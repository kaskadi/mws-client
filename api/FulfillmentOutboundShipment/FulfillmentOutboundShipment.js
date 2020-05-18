const Section = require('../section.js')
class FulfillmentOutboundShipment extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'FulfillmentOutboundShipment'
    this.Version = '2010-10-01'
    require('../attach-methods.js').bind(this)(['getFulfillmentPreview', 'createFulfillmentOrder', 'updateFulfillmentOrder', 'listAllFulfillmentOrders', 'getFulfillmentOrder', 'getPackageTrackingDetails', 'cancelFulfillmentOrder', 'listReturnReasonCodes', 'createFulfillmentReturn', 'getServiceStatus'])
  }
}

module.exports = parent => new FulfillmentOutboundShipment(parent)
