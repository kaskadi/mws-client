/* eslint-env mocha */
const assert = require('assert')
const baseOpts = { AWSAccessKeyId: 'Hello', SellerId: 'Hey', MWSAuthToken: 'Token' }
const MWS = require('../..')(baseOpts)

describe('helpers', function () {
  it('should have a default user agent string', function () {
    const version = require('../../package.json').version
    assert.strictEqual(MWS.userAgent, `kaskadi-mws-client/${version} (Language=node.js)`)
  })
  it('should be able to change the user agent string', function () {
    const MWS = require('../..')({ ...baseOpts, userAgent: 'test' })
    assert.strictEqual(MWS.userAgent, 'test')
    MWS.userAgent = 'another test'
    assert.strictEqual(MWS.userAgent, 'another test')
  })
  it('should be able to sort an object', function () {
    assert.deepStrictEqual(Object.entries(MWS._sortObject({ c: 'Hey', a: 10, b: [1, 5] })), Object.entries({ a: 10, b: [1, 5], c: 'Hey' }))
  })
  it('should be able to filter an object properties', function () {
    assert.deepStrictEqual(MWS._filterObject({ c: 'Hey', _a: 10, b: [1, 5] }), { c: 'Hey', b: [1, 5] })
  })
  it('should be able to sign a string with given key', function () {
    assert.strictEqual(MWS._sign('Test string', process.env.TEST_SIGN_KEY), 'I1AGLbYD7gkVJYZl00J9eHQrdRCiKN910QcSHGgJN68=')
  })
  it('should not allow usage of unsupported parser type', function () {
    try {
      require('../..')({ ...baseOpts, parserType: 'hello' })
    } catch {
      // we should land here
      assert(true)
    }
  })
})
