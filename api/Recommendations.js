const Section = require('./section.js')
class Recommendations extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Recommendations'
    this.Version = '2013-04-01'
  }

  getLastUpdatedTimeForRecommendations (opt) {
    opt.Action = 'GetLastUpdatedTimeForRecommendations'
    if (this.parent.mockUp) {
      return {
        GetLastUpdatedTimeForRecommendationsResponse: {
          xmlns: 'https://mws.amazonservices.com/Recommendations/2013-04-01/',
          InventoryRecommendationsLastUpdated: '2013-03-04T02:10:32+00:00',
          PricingRecommendationsLastUpdated: '2013-03-05T03:11:33+00:00',
          FulfillmentRecommendationsLastUpdated: '2013-03-02T03:11:32+00:00',
          GlobalSellingRecommendationsLastUpdated: '2013-03-02T04:31:32+00:00',
          AdvertisingRecommendationsLastUpdated: '2013-03-03T17:45:11+00:00',
          ResponseMetadata: {
            RequestId: '88faca76-b600-46d2-b53c-0c8c4EXAMPLE'
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }

  listRecommendations (opt) {
    opt.Action = 'ListRecommendations'
    if (this.parent.mockUp) {
      return {
        ListRecommendationsResponse: {
          xmlns: 'https://mws.amazonservices.com/Recommendations/2013-04-01',
          ListRecommendationsResult: '',
          ResponseMetadata: {
            RequestId: 'd0305dfc-b83e-11e2-8aeb-c93b3EXAMPLE'
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
module.exports = parent => new Recommendations(parent)
