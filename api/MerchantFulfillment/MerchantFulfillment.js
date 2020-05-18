const Section = require('../section.js')
class MerchantFulfillment extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'MerchantFulfillment'
    this.Version = '2015-06-01'
    require('../attach-methods.js').bind(this)(['getEligibleShippingServices', 'createShipment', 'getShipment', 'cancelShipment', 'getServiceStatus'])
  }
}

module.exports = parent => new MerchantFulfillment(parent)
