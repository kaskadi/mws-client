const Section = require('./section.js')
class Feeds extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Feeds'
    this.Version = '2009-01-01'
  }

  submitFeed (opt) {
    opt.Action = 'SubmitFeed'
    if (this.parent.mockUp) {
      return {
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
      }
    } else {
      return this.request(opt)
    }
  }

  getFeedSubmissionList (opt) {
    opt.Action = 'GetFeedSubmissionList'
    if (this.parent.mockUp) {
      return {
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
      }
    } else {
      return this.request(opt)
    }
  }

  getFeedSubmissionCount (opt) {
    opt.Action = 'GetFeedSubmissionCount'
    if (this.parent.mockUp) {
      return {
        GetFeedSubmissionCountResponse: {
          xmlns: 'http://mws.amazonaws.com/doc/2009-01-01/',
          GetFeedSubmissionCountResult: {
            Count: 463
          },
          ResponseMetadata: {
            RequestId: '21e482a8-15c7-4da3-91a4-424995ed0756'
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }

  cancelFeedSubmissions (opt) {
    opt.Action = 'CancelFeedSubmissions'
    if (this.parent.mockUp) {
      return {
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
      }
    } else {
      return this.request(opt)
    }
  }

  getFeedSubmissionResult (opt) {
    opt.Action = 'GetFeedSubmissionResult'
    if (this.parent.mockUp) {
      return {
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
    } else {
      return this.request(opt)
    }
  }
}
module.exports = parent => new Feeds(parent)
