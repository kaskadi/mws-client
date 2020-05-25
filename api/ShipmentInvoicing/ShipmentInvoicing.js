const Section = require('../section.js')
class ShipmentInvoicing extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'ShipmentInvoicing'
    this.Version = '2018-11-01'
    require('../attach-methods.js').bind(this)(['getFBAOutboundShipmentDetail', 'submitFBAOutboundShipmentInvoice', 'getFBAOutboundShipmentInvoiceStatus', 'getServiceStatus'])
  }
}

module.exports = parent => new ShipmentInvoicing(parent)
