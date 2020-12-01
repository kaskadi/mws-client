/* eslint-env mocha */
const assert = require('assert')
const MWS = require('../..')({ AWSAccessKeyId: process.env.MWS_KEY_ID, SellerId: process.env.AMZ_EU_SELLER_ID, MWSAuthToken: process.env.MWS_KEY_SECRET })

describe('MWS.fulfillmentInventory', function () {
  this.timeout(10000)
  let inventorySupplyData
  it('should return mockup data when set to', function () {
    let MWS = require('../..')({ AWSAccessKeyId: process.env.MWS_KEY_ID, SellerId: process.env.AMZ_EU_SELLER_ID, MWSAuthToken: process.env.MWS_KEY_SECRET, mockUp: true })
    testMockUp(MWS)
    MWS = require('../..')({ AWSAccessKeyId: process.env.MWS_KEY_ID, SellerId: process.env.AMZ_EU_SELLER_ID, MWSAuthToken: process.env.MWS_KEY_SECRET })
    MWS.mockUp = true
    testMockUp(MWS)
  })
  describe('MWS.fulfillmentInventory.listInventorySupply()', function () {
    it('should return inventory data', async function () {
      let d = new Date()
      d = d - 60 * 60 * 24 * 1000 * 365
      inventorySupplyData = await MWS.fulfillmentInventory.listInventorySupply({ QueryStartDateTime: new Date(d).toISOString(), ResponseGroup: 'Basic', _marketplace: 'DE' })
      testListInventorySupply(inventorySupplyData)
    })
  })
  describe('MWS.fulfillmentInventory.listInventorySupplyByNextToken()', function () {
    it('should return next page inventory data if a next token exists', async function () {
      const token = inventorySupplyData.body.ListInventorySupplyResponse.ListInventorySupplyResult.NextToken
      if (token) {
        const ret = await MWS.fulfillmentInventory.listInventorySupplyByNextToken({ NextToken: token, _marketplace: 'DE' })
        testListInventorySupplyByNextToken(ret)
      } else {
        assert(true)
      }
    })
  })
  describe('MWS.fulfillmentInventory.getServiceStatus()', function () {
    it('should receive response from service with its state', async function () {
      const ret = await MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })
      testStatus(ret)
    })
  })
})

// Helper functions

function testListInventorySupply (ret) {
  assert(ret.body.ListInventorySupplyResponse, 'Response was not a ListInventorySupplyResponse')
  assert(ret.body.ListInventorySupplyResponse.ListInventorySupplyResult.InventorySupplyList, 'Response does not contains an InventorySupplyList')
}

function testListInventorySupplyByNextToken (ret) {
  assert(ret.body.ListInventorySupplyByNextTokenResponse, 'Response was not a ListInventorySupplyByNextTokenResponse')
  assert(ret.body.ListInventorySupplyByNextTokenResponse.ListInventorySupplyByNextTokenResult.InventorySupplyList, 'Response does not contains an InventorySupplyList')
}

function testStatus (ret) {
  assert(ret.body.GetServiceStatusResponse, 'No response or error received from the service')
}

function testMockUp (MWS) {
  const ret = MWS.fulfillmentInventory.getServiceStatus({ _marketplace: 'DE' })
  assert(ret.GetServiceStatusResponse, 'No response or error received from the service')
}
