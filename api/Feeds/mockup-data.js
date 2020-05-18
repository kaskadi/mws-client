module.exports = {
  submitFeed: {
    SubmitFeedResponse: {
      xmlns: 'http://mws.amazonaws.com/doc/2009-01-01/',
      SubmitFeedResult: {
        FeedSubmissionInfo: {
          FeedSubmissionId: '2291326430',
          FeedType: '_POST_PRODUCT_DATA_',
          SubmittedDate: '2009-02-20T02:10:35+00:00',
          FeedProcessingStatus: '_SUBMITTED_'
        }
      },
      ResponseMetadata: {
        RequestId: '75424a38-f333-4105-98f0-2aa9592d665c'
      }
    }
  },
  getFeedSubmissionList: {
    GetFeedSubmissionListResponse: {
      xmlns: 'http://mws.amazonaws.com/doc/2009-01-01/',
      GetFeedSubmissionListResult: {
        NextToken: '2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=',
        HasNext: true,
        FeedSubmissionInfo: {
          FeedSubmissionId: '2291326430',
          FeedType: '_POST_PRODUCT_DATA_',
          SubmittedDate: '2009-02-20T02:10:35+00:00',
          FeedProcessingStatus: '_SUBMITTED_'
        }
      },
      ResponseMetadata: {
        RequestId: '1105b931-6f1c-4480-8e97-f3b467840a9e'
      }
    }
  },
  getFeedSubmissionCount: {
    GetFeedSubmissionCountResponse: {
      xmlns: 'http://mws.amazonaws.com/doc/2009-01-01/',
      GetFeedSubmissionCountResult: {
        Count: 463
      },
      ResponseMetadata: {
        RequestId: '21e482a8-15c7-4da3-91a4-424995ed0756'
      }
    }
  },
  cancelFeedSubmissions: {
    CancelFeedSubmissionsResponse: {
      xmlns: 'http://mws.amazonaws.com/doc/2009-01-01/',
      CancelFeedSubmissionsResult: {
        Count: 1,
        FeedSubmissionInfo: {
          FeedSubmissionId: '2291326430',
          FeedType: '_POST_PRODUCT_DATA_',
          SubmittedDate: '2009-02-20T02:10:35+00:00',
          FeedProcessingStatus: '_CANCELLED_'
        }
      },
      ResponseMetadata: {
        RequestId: '18e78983-bbf9-43aa-a661-ae7696cb49d4'
      }
    }
  },
  getFeedSubmissionResult: {
    AmazonEnvelope: {
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:noNamespaceSchemaLocation': 'amzn-envelope.xsd',
      Header: {
        DocumentVersion: '1.02',
        MerchantIdentifier: 'T_M_GOOD_83835495'
      },
      MessageType: 'ProcessingReport',
      Message: {
        MessageID: '1',
        ProcessingReport: {
          DocumentTransactionID: '4319742521'
        }
      }
    }
  }
}
