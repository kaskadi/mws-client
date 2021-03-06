const crypto = require('crypto')
const querystring = require('querystring')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const createSection = require('./api/create-section.js')

const nodeVersion = process.version
if (Number(nodeVersion.split('.')[0].slice(1)) < 12) {
  throw Error(`Your current node version is ${nodeVersion}. This client requires you to run at least node 12 to work properly.`)
}

/**
 * Options for the new MWS client instanciation
 * @typedef {Object} Options
 * @property {string} AWSAccessKeyId - AWS access key ID
 * @property {string} MWSAuthToken - MWS authentication token
 * @property {string} SellerId - Seller ID
 * @property {string} [SignatureVersion=2] - Signature version used for signing to request URL
 * @property {string} [SignatureMethod=HmacSHA256] - Signature method used for signing to request URL
 * @property {string} [userAgent=kaskadi-mws-client/VERSION (Language=node.js)] - User agent used when sending request
 * @property {string} [parserType=xml] - Parser used for the response received from MWS. Accepted values: `'xml'`, `'text'`
 */

/**
 * MWS client
 * @typedef {Class} MWS
 * @property {Section} Section - MWS API section
 */

/**
 *
 * Creates a new client to communicate with MWS API
 *
 * @module mws-client
 * @typicalname MWS
 * @param {Options} opts - Options to be passed to instanciate a new client
 * @returns {MWS} MWS client
 *
 * @example
 * const MWS = require('mws-client')({
 *   AWSAccessKeyId: process.env.YOUR_AWS_ACCESS_KEY,
 *   SellerId: process.env.YOUR_SELLER_ID,
 *   MWSAuthToken: process.env.YOUR_MWS_AUTH_TOKEN
 * })
 */

class MWS {
  constructor (opt) {
    // these are all defaults. the rest must be passed with the constructor
    const MWS_DEFAULT_OPTIONS = {
      SignatureVersion: '2', // we might switch to 4 later
      SignatureMethod: 'HmacSHA256',
      userAgent: `kaskadi-mws-client/${require('./package.json').version} (Language=node.js)`,
      parserType: 'xml'
    }
    const options = { ...MWS_DEFAULT_OPTIONS, ...opt }
    const supportedParsers = ['xml', 'text']
    if (!supportedParsers.includes(options.parserType)) {
      throw new Error(`${options.parserType} is not a valid parser type. Supported parser types are: ${supportedParsers.join(', ')}`)
    }
    for (const option in options) {
      this[option] = options[option]
    }
    fs.readdirSync(path.join(__dirname, 'api'), { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name).forEach(section => {
      const sectionData = require(`./api/${section}/section-data.json`)
      this[section.charAt(0).toLowerCase() + section.slice(1)] = createSection(sectionData, this)
    })
  }

  request (opt) {
    const marketplaces = require('./data/marketplaces.js')
    const MarketplaceId = marketplaces[opt._marketplace].id
    const MarketplaceEndpoint = marketplaces[opt._marketplace].endpoint
    const Timestamp = new Date().toISOString()
    const { AWSAccessKeyId, SignatureVersion, SignatureMethod, SellerId } = this
    const _httpMethod = 'GET'
    let rqs = { Timestamp, AWSAccessKeyId, SignatureVersion, SignatureMethod, SellerId, MarketplaceId, _httpMethod, ...opt }
    const httpMethod = rqs._httpMethod
    rqs = this._sortObject(this._filterObject(rqs))
    // ------------------------------------------------------------------------------
    // do not insert tabs or spaces here! formatting is important
    let stringToSign = `${httpMethod}
${MarketplaceEndpoint}
/${opt._section}/${opt.Version}
${querystring.stringify(rqs)}`
    // ------------------------------------------------------------------------------
    stringToSign = stringToSign.replace(/'/g, '%27').replace(/\*/g, '%2A').replace(/\(/g, '%28').replace(/\)/g, '%29')
    rqs.Signature = this._sign(stringToSign, this.MWSAuthToken)
    const reqOpts = {
      url: `https://${MarketplaceEndpoint}/${opt._section}/${opt.Version}?${querystring.stringify(rqs)}`,
      method: httpMethod,
      ua: opt.userAgent || this.userAgent,
      parserType: opt.parserType || this.parserType
    }
    return makeRequest(reqOpts)
  }

  _filterObject (obj) {
    return Object.fromEntries(Object.entries(obj).filter(entry => entry[0].charAt(0) !== '_'))
  }

  _sortObject (obj) {
    return Object.fromEntries(Object.keys(obj).sort().map(key => [key, obj[key]]))
  }

  _sign (str, key) {
    const hmac = crypto.createHmac('sha256', key)
    hmac.update(str)
    return hmac.digest('base64')
  }
}

// helper functions

async function makeRequest (opts) {
  const res = await fetch(opts.url, {
    method: opts.method,
    headers: { 'User-Agent': opts.ua }
  })
  return {
    headers: res.headers,
    status: res.status,
    body: parseBody(await res.text(), opts.parserType)
  }
}

function parseBody (body, parserType) {
  switch (parserType) {
    case 'text':
      return body
    case 'xml':
    default:
      return require('xml2json').toJson(body, { object: true })
  }
}

module.exports = opt => new MWS(opt)
