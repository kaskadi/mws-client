const crypto = require('crypto')
const querystring = require('querystring')
const fetch = require('node-fetch')
const parser = require('xml2json')
const version = JSON.parse(require('./package.json')).version

const MARKETPLACE = {
  BR: { name: 'Brazil', sc: 'BR', endpoint: 'mws.amazonservices.com', id: 'A2Q3Y263D00KWC' },
  CA: { name: 'Canada', sc: 'CA', endpoint: 'mws.amazonservices.ca', id: 'A2EUQ1WTGCTBG2' },
  MX: { name: 'Mexico', sc: 'MX', endpoint: 'mws.amazonservices.com.mx', id: 'A1AM78C64UM0Y8' },
  US: { name: 'US', sc: 'US', endpoint: 'mws.amazonservices.com', id: 'ATVPDKIKX0DER' },
  AE: { name: 'United Arab Emirates (U.A.E.)', sc: 'AE', endpoint: 'mws.amazonservices.ae', id: 'A2VIGQ35RCS4UG' },
  DE: { name: 'Germany', sc: 'DE', endpoint: 'mws-eu.amazonservices.com', id: 'A1PA6795UKMFR9' },
  ES: { name: 'Spain', sc: 'ES', endpoint: 'mws-eu.amazonservices.com', id: 'A1RKKUPIHCS9HS' },
  FR: { name: 'France', sc: 'FR', endpoint: 'mws-eu.amazonservices.com', id: 'A13V1IB3VIYZZH' },
  GB: { name: 'UK', sc: 'GB', endpoint: 'mws-eu.amazonservices.com', id: 'A1F83G8C2ARO7P' },
  IN: { name: 'India', sc: 'IN', endpoint: 'mws.amazonservices.in', id: 'A21TJRUUN4KGV' },
  IT: { name: 'Italy', sc: 'IT', endpoint: 'mws-eu.amazonservices.com', id: 'APJ6JRA9NG5V4' },
  TR: { name: 'Turkey', sc: 'TR', endpoint: 'mws-eu.amazonservices.com', id: 'A33AVAJ2PDY3EV' },
  AU: { name: 'Australia', sc: 'AU', endpoint: 'mws.amazonservices.com.au', id: 'A39IBJ37TRP1C6' },
  JP: { name: 'Japan', sc: 'JP', endpoint: 'mws.amazonservices.jp', id: 'A1VC38T7YXB528' },
  CN: { name: 'China', sc: 'CN', endpoint: 'mws.amazonservices.com.cn', id: 'AAHKV2X7AFYLW' }
}

// these are all defaults. the rest must be passed with the constructor
const MWS_DEFAULT_OPTIONS = {
  SignatureVersion: '2', // we might switch to 4 later
  SignatureMethod: 'HmacSHA256',
  userAgent: `kaskadi-mws-sdk/${version} (Language=node.js)`
}

class MWS {
  constructor (opt) {
    let options = { ...MWS_DEFAULT_OPTIONS, ...opt }
    this.SignatureVersion = options.SignatureVersion
    this.SignatureMethod = options.SignatureMethod
    this.AWSAccessKeyId = options.AWSAccessKeyId
    this.MWSAuthToken = options.MWSAuthToken
    this.SellerId = options.SellerId
    this.userAgent = options.userAgent
    this.easyShip = require('./api/EasyShip.js')(this)
    this.feeds = require('./api/Feeds.js')(this)
    this.finances = require('./api/Finances.js')(this)
    this.fulfillmentInboundShipment = require('./api/FulfillmentInboundShipment.js')(this)
    this.fulfillmentInventory = require('./api/FulfillmentInventory.js')(this)
    this.fulfillmentOutboundShipment = require('./api/FulfillmentOutboundShipment.js')(this)
    this.merchantFulfillment = require('./api/MerchantFulfillment.js')(this)
    this.orders = require('./api/Orders.js')(this)
    this.products = require('./api/Products.js')(this)
    this.recommendations = require('./api/Recommendations.js')(this)
    this.reports = require('./api/Reports.js')(this)
    this.sellers = require('./api/Sellers.js')(this)
    this.subscriptions = require('./api/Subscriptions.js')(this)
  }
  request (opt) {
    const MarketplaceId = MARKETPLACE[opt._marketplace].id
    const MarketplaceEndpoint = MARKETPLACE[opt._marketplace].endpoint
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
    let newObj = {}
    Object.entries(obj).forEach(function (entry) {
      if (entry[0].charAt(0) !== '_') {
        newObj[entry[0]] = entry[1]
      }
    })
    return newObj
  }
  _sortObject (obj) {
    let newObj = {}
    let arr = Object.keys(obj).sort()
    arr.forEach(key => { newObj[key] = obj[key] })
    return newObj
  }

  _sign (str, key) {
    let hmac = crypto.createHmac('sha256', key)
    hmac.update(str)
    return hmac.digest('base64')
  }
}

// helper functions

async function makeRequest (url, method, body, ua) {
  console.log(url)
  var res = await fetch(url, {
    method: method,
    headers: { 'User-Agent': ua }
  })
  return parser.toJson(await res.text(), { object: true })
}

module.exports = opt => new MWS(opt)
