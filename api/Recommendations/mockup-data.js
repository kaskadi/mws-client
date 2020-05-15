module.exports = {
  getLastUpdatedTimeForRecommendations: {
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
  },
  listRecommendations: {
    ListRecommendationsResponse: {
      xmlns: 'https://mws.amazonservices.com/Recommendations/2013-04-01',
      ListRecommendationsResult: '',
      ResponseMetadata: {
        RequestId: 'd0305dfc-b83e-11e2-8aeb-c93b3EXAMPLE'
      }
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'https://mws.amazonservices.com/Recommendations/2013-04-01',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T15:27:25.542Z' },
      ResponseMetadata: { RequestId: 'b97ba060-29e2-4ac6-8334-63c8d27ec3b0' }
    }
  }
}
