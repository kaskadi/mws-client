module.exports = {
  getFulfillmentPreview: {
    GetFulfillmentPreviewResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/',
      GetFulfillmentPreviewResult: {
        FulfillmentPreviews: {
          member: [
            {
              EstimatedShippingWeight: {
                Unit: 'kilograms',
                Value: 12
              },
              ShippingSpeedCategory: 'Expedited',
              FulfillmentPreviewShipments: {
                member: {
                  LatestShipDate: '2014-01-04T00:30:00Z',
                  LatestArrivalDate: '2014-01-06T06:59:59Z',
                  FulfillmentPreviewItems: {
                    member: [
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 10
                        },
                        SellerSKU: 'SampleSKU1',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-2',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 2
                      },
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 2
                        },
                        SellerSKU: 'SampleSKU2',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-1',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 1
                      }
                    ]
                  },
                  EarliestShipDate: '2014-01-04T00:30:00Z',
                  EarliestArrivalDate: '2014-01-05T07:00:00Z'
                }
              },
              EstimatedFees: {
                member: [
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 225
                    },
                    Name: 'FBAPerUnitFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 475
                    },
                    Name: 'FBAPerOrderFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 660
                    },
                    Name: 'FBATransportationFee'
                  }
                ]
              },
              UnfulfillablePreviewItems: {},
              IsFulfillable: true,
              IsCODCapable: false,
              MarketplaceId: 'ATVPDKIKX0DER'
            },
            {
              EstimatedShippingWeight: {
                Unit: 'kilograms',
                Value: 12
              },
              ShippingSpeedCategory: 'Standard',
              FulfillmentPreviewShipments: {
                member: {
                  LatestShipDate: '2014-01-04T00:30:00Z',
                  LatestArrivalDate: '2014-07-09T06:59:59Z',
                  FulfillmentPreviewItems: {
                    member: [
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 10
                        },
                        SellerSKU: 'SampleSKU1',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-2',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 2
                      },
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 2
                        },
                        SellerSKU: 'SampleSKU2',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-1',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 1
                      }
                    ]
                  },
                  EarliestShipDate: '2014-01-04T00:30:00Z',
                  EarliestArrivalDate: '2014-01-05T07:00:00Z'
                }
              },
              EstimatedFees: {
                member: [
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 225
                    },
                    Name: 'FBAPerUnitFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 475
                    },
                    Name: 'FBAPerOrderFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 660
                    },
                    Name: 'FBATransportationFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 315
                    },
                    Name: 'FBAFulfillmentCODFee'
                  }
                ]
              },
              UnfulfillablePreviewItems: {},
              IsFulfillable: true,
              IsCODCapable: true
            },
            {
              EstimatedShippingWeight: {
                Unit: 'kilograms',
                Value: 12
              },
              ShippingSpeedCategory: 'ScheduledDelivery',
              ScheduledDeliveryInfo: {
                DeliveryTimeZone: 'Asia/Tokyo',
                DeliveryWindows: {
                  member: [
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-04T23:00:00Z',
                        EndDateTime: '2014-01-05T03:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T03:00:00Z',
                        EndDateTime: '2014-01-05T05:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T05:00:00Z',
                        EndDateTime: '2014-01-05T07:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T07:00:00Z',
                        EndDateTime: '2014-01-05T09:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T09:00:00Z',
                        EndDateTime: '2014-01-05T11:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T11:00:00Z',
                        EndDateTime: '2014-01-05T12:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-05T23:00:00Z',
                        EndDateTime: '2014-01-06T03:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-06T03:00:00Z',
                        EndDateTime: '2014-01-06T05:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-06T05:00:00Z',
                        EndDateTime: '2014-01-06T07:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-06T07:00:00Z',
                        EndDateTime: '2014-01-06T09:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-06T09:00:00Z',
                        EndDateTime: '2014-01-06T11:00:00Z'
                      }
                    },
                    {
                      DeliveryWindow: {
                        StartDateTime: '2014-01-06T11:00:00Z',
                        EndDateTime: '2014-01-06T12:00:00Z'
                      }
                    }
                  ]
                }
              },
              FulfillmentPreviewShipments: {
                member: {
                  LatestShipDate: '2014-01-04T00:30:00Z',
                  LatestArrivalDate: '2014-01-06T06:59:59Z',
                  FulfillmentPreviewItems: {
                    member: [
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 10
                        },
                        SellerSKU: 'SampleSKU1',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-2',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 2
                      },
                      {
                        EstimatedShippingWeight: {
                          Unit: 'kilograms',
                          Value: 2
                        },
                        SellerSKU: 'SampleSKU2',
                        SellerFulfillmentOrderItemId: 'mws-test-query-20100713023406723-1',
                        ShippingWeightCalculationMethod: 'Package',
                        Quantity: 1
                      }
                    ]
                  },
                  EarliestShipDate: '2014-01-04T00:30:00Z',
                  EarliestArrivalDate: '2014-01-05T07:00:00Z'
                }
              },
              EstimatedFees: {
                member: [
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 225
                    },
                    Name: 'FBAPerUnitFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 475
                    },
                    Name: 'FBAPerOrderFulfillmentFee'
                  },
                  {
                    Amount: {
                      CurrencyCode: 'JPY',
                      Value: 660
                    },
                    Name: 'FBATransportationFee'
                  }
                ]
              },
              UnfulfillablePreviewItems: {},
              IsFulfillable: true,
              IsCODCapable: false
            }
          ]
        }
      },
      ResponseMetadata: {
        RequestId: 'f4c29ec4-ceb7-4608-a764-5c758ac0021a'
      }
    }
  },
  createFulfillmentOrder: {
    CreateFulfillmentOrderResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      ResponseMetadata: {
        RequestId: 'd95be26c-16cf-4bbc-ab58-dce89fd4ac53'
      }
    }
  },
  updateFulfillmentOrder: {
    UpdateFulfillmentOrderResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      ResponseMetadata: {
        RequestId: 'd95be26c-16cf-4bbc-ab58-dce89fd4ac53'
      }
    }
  },
  listAllFulfillmentOrders: {
    ListAllFulfillmentOrdersResponse:
    {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      ListAllFulfillmentOrdersResult: {
        NextToken: 'H4sIAAAAAAAAAC2MwQqDMBBEfyXsPXU3ITUEEyjFQ6FWUNt7sbEI\n            alH7/3SVwjLLG3iTzeLjoe6n9xAv3ziWyysuIFoPCjGVqCWmDaZOWYckkRNB9B4MgZj\n            4MY0euuewRhBxswhZkaQbUk5pZ+iA1nK1m+u+ayXxlmnwyCXffzdkXTiXt/pe5FWWdB\n            tWeVE+Ttedkjn8AF4nvJquAAAA',
        FulfillmentOrders: {
          member: [
            {
              ShippingSpeedCategory: 'Standard',
              StatusUpdatedDateTime: '2011-01-28T23:48:48Z',
              NotificationEmailList: {
                member: 'o8c2EXAMPLsfr7o@marketplace.amazon.com'
              },
              SellerFulfillmentOrderId: 'extern_id_1154539615776',
              DestinationAddress: {
                PostalCode: '98101',
                PhoneNumber: '321-098-7654',
                Name: 'Jane Adams',
                CountryCode: 'US',
                Line1: '123 Oak St.',
                StateOrProvinceCode: 'WA',
                City: 'Seattle',
                Line2: 'Apt. 321'
              },
              DisplayableOrderDateTime: '2011-02-05T17:26:56Z',
              FulfillmentPolicy: 'FillOrKill',
              ReceivedDateTime: '2011-02-06T17:26:56Z',
              DisplayableOrderId: 'test_displayable_id',
              DisplayableOrderComment: 'Sample comment text.',
              FulfillmentOrderStatus: 'PROCESSING'
            },
            {
              ShippingSpeedCategory: 'Standard',
              StatusUpdatedDateTime: '2011-03-05T18:48:53Z',
              SellerFulfillmentOrderId: 'external-order-ebaytime1154557376014',
              DestinationAddress: {
                PostalCode: '98104',
                PhoneNumber: '123-123-4567',
                Name: 'George Jones',
                CountryCode: 'US',
                Line1: '2345 5th Ave',
                StateOrProvinceCode: 'WA',
                City: 'Seattle'
              },
              DisplayableOrderDateTime: '2011-03-11T18:48:52Z',
              FulfillmentPolicy: 'FillAllAvailable',
              ReceivedDateTime: '2011-03-03T18:48:53Z',
              DisplayableOrderId: 'test-order-test-1159210132812',
              DisplayableOrderComment: 'Sample order comment.',
              FulfillmentOrderStatus: 'PLANNING'
            }
          ]
        }
      },
      ResponseMetadata: {
        RequestId: '7e9c8d48-8e79-11df-929f-87c80302f8f6'
      }
    }
  },
  getFulfillmentOrder: {
    GetFulfillmentOrderResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      GetFulfillmentOrderResult: {
        FulfillmentOrderItem: {
          member: [
            {
              SellerSKU: 'SKU100',
              GiftMessage: 'giftwrap_message',
              SellerFulfillmentOrderItemId: 'merchant_order_item_id_2',
              EstimatedShipDateTime: '2016-09-03T07:07:53Z',
              DisplayableComment: 'Example comment',
              UnfulfillableQuantity: 0,
              CancelledQuantity: 1,
              Quantity: 5,
              EstimatedArrivalDateTime: '2016-09-05T08:07:53Z',
              PerUnitPrice: {
                CurrencyCode: 'JPY',
                Value: 2500
              },
              PerUnitTax: {
                CurrencyCode: 'JPY',
                Value: 5000
              }
            },
            {
              SellerSKU: 'SKU101',
              GiftMessage: 'giftwrap_message',
              SellerFulfillmentOrderItemId: 'merchant_order_item_id_1',
              EstimatedShipDateTime: '2016-09-03T07:07:53Z',
              DisplayableComment: 'Example comment',
              UnfulfillableQuantity: 2,
              CancelledQuantity: 1,
              Quantity: 5,
              EstimatedArrivalDateTime: '2016-09-05T08:07:53Z',
              PerUnitPrice: {
                CurrencyCode: 'JPY',
                Value: 1000
              },
              PerUnitTax: {
                CurrencyCode: 'JPY',
                Value: 2000
              }
            }
          ]
        },
        FulfillmentOrder: {
          ShippingSpeedCategory: 'ScheduledDelivery',
          DeliveryWindow: {
            StartDateTime: '2016-09-05T03:00:00Z',
            EndDateTime: '2016-09-05T05:00:00Z'
          },
          NotificationEmailList: {
            member: 'o8c2EXAMPLsfr7o@marketplace.amazon.com'
          },
          StatusUpdatedDateTime: '2016-09-05T23:48:48Z',
          SellerFulfillmentOrderId: 'extern_id_1154539615776',
          DestinationAddress: {
            PostalCode: '153-0002',
            Name: 'Amazon Taro',
            CountryCode: 'JP',
            Line1: 'Meguro-ku Shimomeguro 12-34-56',
            StateOrProvinceCode: 'Tokyo',
            Line2: 'XXX building 101'
          },
          DisplayableOrderDateTime: '2016-09-02T17:26:56Z',
          FulfillmentPolicy: 'FillOrKill',
          ReceivedDateTime: '2016-09-02T17:26:56Z',
          DisplayableOrderId: 'test_displayable_id',
          DisplayableOrderComment: 'Sample comment',
          CODSettings: {
            IsCODRequired: true,
            CODCharge: {
              Value: 4000,
              CurrencyCode: 'JPY'
            },
            CODChargeTax: {
              Value: 300,
              CurrencyCode: 'JPY'
            },
            ShippingCharge: {
              Value: 1000,
              CurrencyCode: 'JPY'
            },
            ShippingChargeTax: {
              Value: 75,
              CurrencyCode: 'JPY'
            }
          },
          FulfillmentOrderStatus: 'PROCESSING',
          FulfillmentAction: 'Ship',
          MarketplaceId: 'ATVPDKIKX0DER'
        },
        FulfillmentShipment: {
          member: [
            {
              FulfillmentShipmentStatus: 'PENDING',
              FulfillmentShipmentItem: {
                member: {
                  SellerSKU: 'SKU100',
                  SellerFulfillmentOrderItemId: 'merchant_order_item_id_2',
                  Quantity: 2,
                  PackageNumber: 0
                }
              },
              AmazonShipmentId: 'DnMDLWJWN',
              ShippingDateTime: '2016-09-03T07:00:00Z',
              FulfillmentCenterId: 'RNO1',
              EstimatedArrivalDateTime: '2016-09-04T07:00:00Z'
            },
            {
              FulfillmentShipmentStatus: 'SHIPPED',
              FulfillmentShipmentItem: {
                member: {
                  SellerSKU: 'SKU101',
                  SellerFulfillmentOrderItemId: 'merchant_order_item_id_1',
                  Quantity: 1,
                  PackageNumber: 1
                }
              },
              AmazonShipmentId: 'DKMKLXJmN',
              ShippingDateTime: '2016-09-03T07:00:00Z',
              FulfillmentShipmentPackage: {
                member: {
                  TrackingNumber: '93ZZ00',
                  CarrierCode: 'UPS',
                  PackageNumber: 1
                }
              },
              FulfillmentCenterId: 'TST1',
              EstimatedArrivalDateTime: '2016-09-05T07:00:00Z'
            }
          ]
        },
        ReturnItemList: {
          ReturnItem: {
            SellerReturnItemId: '16a6a142EXAMPLE',
            SellerFulfillmentOrderItemId: 'order-item-1',
            AmazonShipmentId: 'DLHg36GDN',
            ReturnReasonCode: 'REASON-CODE',
            ReturnComment: 'Did not like color',
            AmazonReturnReasonCode: 'OTHER-REASON-CODE',
            Status: 'Processed',
            StatusChangedDate: '2016-09-02T02:40:36Z',
            ReturnAuthorizationId: 'amzn-rma-id',
            ReturnReceivedCondition: 'Sellable',
            FulfillmentCenterId: 'FC123'
          }
        },
        ReturnAuthorizationList: {
          ReturnAuthorization: {
            ReturnAuthorizationId: 'amzn-rma-id',
            FulfillmentCenterId: 'FC123',
            ReturnToAddress: {
              Name: 'Amazon FC',
              Line1: '123 Main Street',
              City: 'Anywhere',
              StateOrRegionCode: 'WA',
              PostalCode: '98122',
              CountryCode: 'US'
            },
            AmazonRmaId: 'test123',
            RmaPageURL: 'https://sellercentral.amazon.com/URL'
          }
        }
      },
      ResponseMetadata: {
        RequestId: '5e5e5694-8e76-11df-929f-87c80302f8f6'
      }
    }
  },
  getPackageTrackingDetails: {
    GetPackageTrackingDetailsResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      GetPackageTrackingDetailsResult: {
        PackageNumber: '42343',
        TrackingNumber: '3A18351E0390447173',
        CarrierCode: 'UPS',
        CarrierPhoneNumber: '206-000-0000',
        CarrierURL: 'http://www.ups.com/',
        ShipDate: '2012-03-09T10:27:10Z',
        ShipToAddress: {
          City: 'Seattle',
          State: 'WA',
          Country: 'US'
        },
        CurrentStatus: 'DELIVERED',
        SignedForBy: 'John',
        EstimatedArrivalDate: '2012-03-09T10:00:00Z',
        TrackingEvents: {
          member: [
            {
              EventDate: '2012-03-09T08:48:53Z',
              EventAddress: {
                City: 'Reno',
                State: 'NV',
                Country: 'US'
              },
              EventCode: 'EVENT_202'
            },
            {
              EventDate: '2012-03-10T10:27:10Z',
              EventAddress: {
                City: 'Seattle',
                State: 'WA',
                Country: 'US'
              },
              EventCode: 'EVENT_301'
            }
          ]
        },
        AdditionalLocationInfo: 'FRONT_DESK'
      },
      ResponseMetaData: {
        RequestId: '5e5e5694-8e76-11df-929f-87c80302f8f6'
      }
    }
  },
  cancelFulfillmentOrder: {
    CancelFulfillmentOrderResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      ResponseMetadata: {
        RequestId: 'd95be26c-16cf-4bbc-ab58-dce89fd4ac53'
      }
    }
  },
  listReturnReasonCodes: {
    ListReturnReasonCodesResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      ListReturnReasonCodesResult: {
        ReasonCodeDetailsList: {
          ReasonCodeDetails: {
            ReturnReasonCode: 'REASON-CODE',
            Description: 'This is a description of the reason code.',
            TranslatedDescription: 'This is an optional translated description of the reason code.'
          }
        }
      },
      ResponseMetadata: {
        RequestId: '5e5e5694-8e76-11df-929f-87c80302f8f6'
      }
    }
  },
  createFulfillmentReturn: {
    CreateFulfillmenReturnResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      CreateFulfillmentReturnResult: {
        ReturnItemList: {
          ReturnItem: {
            SellerReturnItemId: '16a6a142EXAMPLE',
            SellerFulfillmentOrderItemId: 'order-item-1',
            AmazonShipmentId: 'DLHg36GDN',
            SellerReturnReasonCode: 'REASON-CODE',
            ReturnComment: 'Did not like color',
            AmazonReturnReasonCode: 'OTHER-REASON-CODE',
            Status: 'Processed',
            StatusChangedDate: '2016-09-29T02:40:36Z',
            ReturnAuthorizationId: 'amzn-rma-id',
            ReturnReceivedCondition: 'Sellable',
            FulfillmentCenterId: 'FC123'
          }
        },
        InvalidReturnItemList: {
          InvalidReturnItem: {
            SellerReturnItemId: '20a6a142EXAMPLE',
            SellerFulfillmentOrderItemId: 'order-item-2',
            InvalidItemReason: {
              InvalidItemReasonCode: 'DuplicateRequest',
              Description: 'There are duplicate return requests for this item.'
            }
          }
        },
        ReturnAuthorizationList: {
          ReturnAuthorization: {
            ReturnAuthorizationId: 'amzn-rma-id',
            FulfillmentCenterId: 'FC123',
            ReturnToAddress: {
              Name: 'Amazon FC',
              Line1: '123 Main Street',
              City: 'Anywhere',
              StateOrRegionCode: 'WA',
              PostalCode: '98122',
              CountryCode: 'US'
            },
            AmazonRmaId: 'test123',
            RmaPageURL: 'https://sellercentral.amazon.com/URL'
          }
        }
      },
      ResponseMetadata: {
        RequestId: '5e5e5694-8e76-11df-929f-87c80302f8f6'
      }
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'http://mws.amazonaws.com/FulfillmentOutboundShipment/2010-10-01/',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T13:23:45.768Z' },
      ResponseMetadata: { RequestId: '576ad9ae-6ec8-43ef-a7b7-d6c36a748a14' }
    }
  }
}
