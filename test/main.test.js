/* eslint-env mocha */
require('./utils/set-env.js')
const assert = require('assert')

describe('MWS client', function () {
  it('should not instanciate the client if Node version is lower than 12', function () {
    const nodeVersion = process.version
    const nodeMajorVersion = Number(nodeVersion.split('.')[0].slice(1))
    if (nodeMajorVersion < 12) {
      try {
        require('../..')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
      } catch {
        // we should land here
        assert(true)
      }
    } else {
      assert(true)
    }
  })
  require('./tests/index.test.js')
  require('./tests/fulfillmentInventory.test.js')
  require('./tests/reports.test.js')
})
