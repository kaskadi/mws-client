/* eslint no-undef: "off" */
const dotenv = require('dotenv')
dotenv.config()
const MWS = require('../')({ AWSAccessKeyId: process.env.AWSACCESSKEY, SellerId: process.env.SELLERID, MWSAuthToken: process.env.MWSAUTHTOKEN })

var assert = require('assert')
describe('MWS.fulfillmentInventory', function () {
  describe('MWS.fulfillmentInventory.listInventorySupply()', function () {
    it('should return an AccessDenied error', async function () {
      var d = new Date()
      d = d - 60 * 60 * 24 * 1000 * 365
      const ret = await MWS.fulfillmentInventory.listInventorySupply({ QueryStartDateTime: new Date(d).toISOString(), ResponseGroup: 'Basic', _marketplace: 'DE' })
      testAccessDenied(ret)
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

function testAccessDenied (ret) {
  assert(ret.hasOwnProperty('ErrorResponse'), 'Response was not an ErrorResponse')
  assert.strictEqual(ret.ErrorResponse.Error.Code, 'AccessDenied', 'Error code was not AccessDenied')
}

function testStatus (ret) {
  assert(ret.hasOwnProperty('GetServiceStatusResponse'), 'No response or error received from the service')
}
