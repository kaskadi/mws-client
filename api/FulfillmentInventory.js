const Section = require('./section.js')
class FulfillmentInventory extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'FulfillmentInventory'
    this.Version = '2010-10-01'
  }

  listInventorySupply (opt) {
    opt.Action = 'ListInventorySupply'
    if (this.parent.mockUp) {
      return {
        ListInventorySupplyResponse: {
          xmlns: 'http://mws.amazonaws.com/FulfillmentInventory/2010-10-01',
          ListInventorySupplyResult: {
            InventorySupplyList: {
              member: [
                {
                  SellerSKU: 'SampleSKU1',
                  ASIN: 'B00000K3CQ',
                  TotalSupplyQuantity: 20,
                  FNSKU: 'X0000000FM',
                  Condition: 'NewItem',
                  SupplyDetail: {},
                  InStockSupplyQuantity: 15,
                  EarliestAvailability: {
                    TimepointType: 'Immediately'
                  }
                },
                {
                  SellerSKU: 'SampleSKU2',
                  ASIN: 'B00004RWQR',
                  TotalSupplyQuantity: 0,
                  FNSKU: 'X00008FZR1',
                  Condition: 'UsedLikeNew',
                  SupplyDetail: {},
                  InStockSupplyQuantity: 0
                }
              ]
            }
          },
          ResponseMetadata: {
            RequestId: 'e8698ffa-8e59-11df-9acb-230ae7a8b736'
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }

  getServiceStatus (opt) {
    opt.Action = 'GetServiceStatus'
    return this.request(opt)
  }
}
module.exports = parent => new FulfillmentInventory(parent)
