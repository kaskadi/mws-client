const crypto = require('crypto')
const querystring = require('querystring')
const fetch = require('node-fetch')
const parser = require('xml2json')
const fs = require('fs')

const nodeVersion = process.version
if (Number(nodeVersion.split('.')[0].slice(1)) < 12) {
  throw Error(`Your current node version is ${nodeVersion}. This client requires you to run at least node 12 to work properly.`)
}

class MWS {
  constructor (opt) {
    // these are all defaults. the rest must be passed with the constructor
    const MWS_DEFAULT_OPTIONS = {
      SignatureVersion: '2', // we might switch to 4 later
      SignatureMethod: 'HmacSHA256',
      userAgent: `kaskadi-mws-client/${require('./package.json').version} (Language=node.js)`
    }
    const options = { ...MWS_DEFAULT_OPTIONS, ...opt }
    this.SignatureVersion = options.SignatureVersion
    this.SignatureMethod = options.SignatureMethod
    this.AWSAccessKeyId = options.AWSAccessKeyId
    this.MWSAuthToken = options.MWSAuthToken
    this.SellerId = options.SellerId
    this.userAgent = options.userAgent
    fs.readdirSync('api', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name).forEach(section => {
      this[section.charAt(0).toLowerCase() + section.slice(1)] = require(`./api/${section}/${section}.js`)(this)
    })
  }

  request (opt) {
    const marketplaces = require('./data/marketplaces.js')
    const MarketplaceId = marketplaces[opt._marketplace].id
    const MarketplaceEndpoint = marketplaces[opt._marketplace].endpoint
    var rqs = {
      ...{
        Timestamp: new Date().toISOString(),
        AWSAccessKeyId: this.AWSAccessKeyId,
        SignatureVersion: this.SignatureVersion,
        SignatureMethod: this.SignatureMethod,
        SellerId: this.SellerId,
        MarkedplaceId: MarketplaceId,
        _httpMethod: 'GET'
      },
      ...opt
    }
    const httpMethod = rqs._httpMethod
    rqs = this._filterObject(rqs)
    rqs = this._sortObject(rqs)
    // ------------------------------------------------------------------------------
    // do not insert tabs or spaces here! formatting is important
    var stringToSign = `${httpMethod}
${MarketplaceEndpoint}
/${opt._section}/${opt.Version}
${querystring.stringify(rqs)}`
    // ------------------------------------------------------------------------------
    stringToSign = stringToSign.replace(/'/g, '%27')
    stringToSign = stringToSign.replace(/\*/g, '%2A')
    stringToSign = stringToSign.replace(/\(/g, '%28')
    stringToSign = stringToSign.replace(/\)/g, '%29')
    rqs.Signature = this._sign(stringToSign, this.MWSAuthToken)

    return makeRequest(`https://${MarketplaceEndpoint}/${opt._section}/${opt.Version}?${querystring.stringify(rqs)}`, httpMethod, null, this.userAgent)
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

async function makeRequest (url, method, body, ua) {
  var res = await fetch(url, {
    method: method,
    headers: { 'User-Agent': ua }
  })
  return parser.toJson(await res.text(), { object: true })
}

module.exports = opt => new MWS(opt)
