const Section = require('../section.js')
class FulfillmentInboundShipment extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'FulfillmentInboundShipment'
    this.Version = '2010-10-01'
    require('../attach-methods.js').bind(this)(['getInboundGuidanceForSKU', 'getInboundGuidanceForASIN', 'createInboundShipmentPlan', 'createInboundShipment', 'updateInboundShipment', 'getPreorderInfo', 'confirmPreorder', 'getPrepInstructionsForSKU', 'getPrepInstructionsForASIN', 'putTransportContent', 'estimateTransportRequest', 'getTransportContent', 'confirmTransportRequest', 'voidTransportRequest', 'getPackageLabels', 'getUniquePackageLabels', 'getPalletLabels', 'getBillOfLading', 'listInboundShipments', 'listInboundShipmentItems', 'getServiceStatus'])
  }
}

module.exports = parent => new FulfillmentInboundShipment(parent)
