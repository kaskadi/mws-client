module.exports = {
  listInventorySupply: {
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
  },
  listInventorySupplyByNextToken: {
    ListInventorySupplyByNextTokenResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentInventory/2010-10-01/',
      ListInventorySupplyByNextTokenResult: {
        NextToken: '2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=',
        InventorySupplyList: {
          member: [
            {
              SellerSKU: 'SampleSKU5',
              ASIN: 'B00008UI0R',
              TotalSupplyQuantity: '0',
              FNSKU: 'B00008UI0R',
              Condition: null,
              SupplyDetail: null,
              InStockSupplyQuantity: '0'
            },
            {
              SellerSKU: 'SampleSKU6',
              ASIN: 'B00000K3CQ',
              TotalSupplyQuantity: '5259',
              FNSKU: 'X0000000FM',
              Condition: 'NewItem',
              SupplyDetail: null,
              InStockSupplyQuantity: '5259',
              EarliestAvailability: {
                TimepointType: 'Immediately'
              }
            }
          ]
        }
      },
      ResponseMetadata: {
        RequestId: 'b3a020ac-8e5e-11df-9acb-230ae7a8b736'
      }
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentInventory/2010-10-01/',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T13:18:01.451Z' },
      ResponseMetadata: { RequestId: '1d9d75ab-fdca-4d10-bf26-75e6e32f0e6e' }
    }
  }
}
