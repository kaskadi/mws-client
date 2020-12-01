/* eslint-env mocha */
const assert = require('assert')

it('should not instanciate the client if Node version is lower than 12', function () {
  try {
    require('../..')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
    // we shouldn't be here
    assert(false)
  } catch {
    // we should land here
    assert(true)
  }
})
