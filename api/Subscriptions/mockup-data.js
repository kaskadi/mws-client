module.exports = {
  registerDestination: {
    RegisterDestinationResult: null,
    ResponseMetadata: {
      RequestId: 'b120e610-9cf0-48d7-b615-ca869EXAMPLE'
    }
  },
  deregisterDestination: {
    RegisterDestinationResult: null,
    ResponseMetadata: {
      RequestId: 'b120e610-9cf0-48d7-b615-ca869EXAMPLE'
    }
  },
  listRegisteredDestinations: {
    ListRegisteredDestinationsResult: {
      DestinationList: {
        member: {
          DeliveryChannel: 'SQS',
          AttributeList: {
            member: {
              Value: 'https://sqs.us-east-1.amazonaws.com/51471EXAMPLE/mws_notifications',
              Key: 'sqsQueueUrl'
            }
          }
        }
      }
    },
    ResponseMetadata: {
      RequestId: '8329b2a1-4249-43fa-b2d3-da563EXAMPLE'
    }
  },
  sendTestNotificationToDestination: {
    SendTestNotificationToDestinationResult: null,
    ResponseMetadata: {
      RequestId: 'f662dae6-bde0-4e75-a53b-741abEXAMPLE'
    }
  },
  createSubscription: {
    CreateSubscriptionResult: null,
    ResponseMetadata: {
      RequestId: 'c9bb2e77-2425-4e1a-9c85-36d00EXAMPLE'
    }
  },
  getSubscription: {
    GetSubscriptionResult: {
      Subscription: {
        NotificationType: 'AnyOfferChanged',
        IsEnabled: true,
        Destination: {
          DeliveryChannel: 'SQS',
          AttributeList: {
            member: {
              Value: 'https://sqs.us-east-1.amazonaws.com/51471EXAMPLE/mws_notifications',
              Key: 'sqsQueueUrl'
            }
          }
        }
      }
    },
    ResponseMetadata: {
      RequestId: '4012b1ae-3f31-4627-83c3-1757aEXAMPLE'
    }
  },
  deleteSubscription: {
    DeleteSubscriptionResult: null,
    ResponseMetadata: {
      RequestId: '2d7db8a1-8974-4541-9c9b-f882dEXAMPLE'
    }
  },
  listSubscriptions: {
    ListSubscriptionsResult: {
      SubscriptionList: {
        member: {
          NotificationType: 'AnyOfferChanged',
          IsEnabled: true,
          Destination: {
            DeliveryChannel: 'SQS',
            AttributeList: {
              member: {
                Value: 'https://sqs.us-east-1.amazonaws.com/51471EXAMPLE/mws_notifications',
                Key: 'sqsQueueUrl'
              }
            }
          }
        }
      }
    },
    ResponseMetadata: {
      RequestId: 'bf251d30-1409-4855-93cc-52943EXAMPLE'
    }
  },
  updateSubscription: {
    UpdateSubscriptionResult: null,
    ResponseMetadata: {
      RequestId: '3263ad38-d15b-4043-b48c-cbfa2EXAMPLE'
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'http://mws.amazonservices.com/schema/Subscriptions/2013-07-01',
      GetServiceStatusResult: {
        Status: 'GREEN',
        Timestamp: '2020-05-15T15:58:16.619Z'
      },
      ResponseMetadata: {
        RequestId: '6dbb8108-0b5c-4b8b-b607-55a1873a1a8c'
      }
    }
  }
}
