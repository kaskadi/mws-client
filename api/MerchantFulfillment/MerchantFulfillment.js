const Section = require('../section.js')
class MerchantFulfillment extends Section {
  constructor (parent) {
    super(parent)
    require('../create-section.js').bind(this)(require('./section-data.json'))
  }
}

module.exports = parent => new MerchantFulfillment(parent)
