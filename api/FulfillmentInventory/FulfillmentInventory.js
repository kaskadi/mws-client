const Section = require('../section.js')
class FulfillmentInventory extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'FulfillmentInventory'
    this.Version = '2010-10-01'
    require('../attach-methods.js').bind(this)(['listInventorySupply', 'getServiceStatus'])
  }
}

module.exports = parent => new FulfillmentInventory(parent)
