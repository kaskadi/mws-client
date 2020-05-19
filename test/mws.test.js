/* eslint-disable */
require('./utils/set-env.js')
const version = require('../package.json').version

var assert = require('assert')
describe('MWS API', function () {
  it('should have a default user agent string', function () {
    const MWS = require('../')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
    assert.strictEqual(MWS.userAgent, `kaskadi-mws-client/${version} (Language=node.js)`)
  })
  it('should be able to change the user agent string', function () {
    const MWS = require('../')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token', userAgent: 'test' })
    assert.strictEqual(MWS.userAgent, 'test')
    MWS.userAgent = 'another test'
    assert.strictEqual(MWS.userAgent, 'another test')
  })
  it('should be able to sort an object', function () {
    const MWS = require('../')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
    let testObj = {
      c: 'Hey',
      a: 10,
      b: [1, 5]
    }
    let assertObj = {
      a: 10,
      b: [1, 5],
      c: 'Hey'
    }
    assert.deepEqual(Object.entries(MWS._sortObject(testObj)), Object.entries(assertObj))
  })
  it('should be able to filter an object properties', function () {
    const MWS = require('../')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
    let testObj = {
      c: 'Hey',
      _a: 10,
      b: [1, 5]
    }
    let assertObj = {
      c: 'Hey',
      b: [1, 5]
    }
    assert.deepEqual(MWS._filterObject(testObj), assertObj)
  })
  it('should be able to sign a string with given key', function () {
    const MWS = require('../')({ AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' })
    assert.strictEqual(MWS._sign('Test string', 'Sign key'), 'I1AGLbYD7gkVJYZl00J9eHQrdRCiKN910QcSHGgJN68=')
  })
})

// Helper functions

// function delay (t) {
//   return new Promise((res, rej) => {
//     setTimeout(res, t)
//   })
// }
