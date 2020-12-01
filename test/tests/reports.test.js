/* eslint-env mocha */
const assert = require('assert')
const MWS = require('../..')({ AWSAccessKeyId: process.env.MWS_KEY_ID, SellerId: process.env.AMZ_EU_SELLER_ID, MWSAuthToken: process.env.MWS_KEY_SECRET })

describe('MWS.reports', function () {
  this.timeout(30000)
  describe('MWS.fulfillmentInventory.getReport()', function () {
    it('should return a tab-delimited flat file', async function () {
      const lastListingReportId = await getLastListingReportId(MWS)
      MWS.parserType = 'text'
      const lastReport = await MWS.reports.getReport({ ReportId: lastListingReportId, _marketplace: 'DE' }).then(res => res.body)
      assert(typeof lastReport === 'string', 'MWS response is not a string')
    })
  })
})

async function getLastListingReportId (MWS) {
  const getListingReports = reportList => reportList.filter(report => report.ReportType === '_GET_MERCHANT_LISTINGS_ALL_DATA_')
  let data = await MWS.reports.getReportList({ _marketplace: 'DE' }).then(res => res.body.GetReportListResponse.GetReportListResult)
  let listingReports = getListingReports(data.ReportInfo)
  let nextToken = data.NextToken
  while (Boolean(data.HasNext) && listingReports.length === 0) {
    data = await MWS.reports.getReportListByNextToken({ NextToken: nextToken, _marketplace: 'DE' }).then(res => res.body.GetReportListByNextTokenResponse.GetReportListByNextTokenResult)
    listingReports = getListingReports(data.ReportInfo)
    nextToken = data.NextToken
  }
  return listingReports[0].ReportId
}
