/* eslint-env mocha */
require('./utils/set-env.js')

describe('MWS client', function () {
  const nodeVersion = process.version
  const nodeMajorVersion = Number(nodeVersion.split('.')[0].slice(1))
  if (nodeMajorVersion < 12) {
    require('./tests/version.test.js')
  } else {
    require('./tests/index.test.js')
    require('./tests/fulfillmentInventory.test.js')
    require('./tests/reports.test.js')
  }
})
