const Section = require('../section.js')
class Orders extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Orders'
    this.Version = '2013-09-01'
    require('../attach-methods.js').bind(this)(['listOrders', 'getOrder', 'listOrderItems', 'getServiceStatus'])
  }
}

module.exports = parent => new Orders(parent)
