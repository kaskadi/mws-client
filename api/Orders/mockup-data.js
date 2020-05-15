module.exports = {
  listOrders: {
    ListOrdersResponse: {
      xmlns: 'https://mws.amazonservices.com/Orders/2013-09-01',
      ListOrdersResult: {
        NextToken: '2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=',
        LastUpdatedBefore: '2017-02-25T18%3A10%3A21.687Z',
        Orders: {
          Order: [
            {
              AmazonOrderId: '902-3159896-1390916',
              PurchaseDate: '2017-02-20T19:49:35Z',
              LastUpdateDate: '2017-02-20T19:49:35Z',
              OrderStatus: 'Unshipped',
              FulfillmentChannel: 'MFN',
              SalesChannel: 'Amazon.com',
              ShippingAddress: {
                Name: 'Buyer name',
                AddressLine1: '1234 Any St.',
                City: 'Seattle',
                PostalCode: '98103',
                CountryCode: 'US',
                AddressType: 'Commercial'
              },
              OrderTotal: {
                CurrencyCode: 'USD',
                Amount: 25.00
              },
              NumberOfItemsShipped: 0,
              NumberOfItemsUnshipped: 1,
              PaymentMethod: 'Other',
              PaymentMethodDetails: {
                PaymentMethodDetail: 'CreditCard'
              },
              MarketplaceId: 'ATVPDKIKX0DER',
              BuyerEmail: '5vlhEXAMPLEh9h5@marketplace.amazon.com',
              BuyerName: 'Buyer name',
              BuyerTaxInfo: {
                CompanyLegalName: 'Company Name',
                TaxingRegion: 'US',
                TaxClassifications: {
                  TaxClassification: {
                    Name: 'VATNumber',
                    Value: 'XXX123'
                  }
                }
              },
              OrderType: 'StandardOrder',
              EarliestShipDate: '2017-02-20T19:51:16Z',
              LatestShipDate: '2017-02-25T19:49:35Z',
              IsBusinessOrder: true,
              PurchaseOrderNumber: 'PO12345678',
              IsPrime: false,
              IsPremiumOrder: false
            },
            {
              AmazonOrderId: '483-3488972-0896720',
              PurchaseDate: '20178-02-20T19:49:35Z',
              LastUpdateDate: '2017-02-20T19:49:35Z',
              OrderStatus: 'Unshipped',
              FulfillmentChannel: 'MFN',
              ShippingAddress: {
                Name: 'Buyer name',
                AddressLine1: '1234 Avenida Qualquer',
                City: 'Sao Paulo',
                PostalCode: '08474-130',
                CountryCode: 'BR',
                AddressType: 'Residential'
              },
              OrderTotal: {
                CurrencyCode: 'BRL',
                Amount: 100.00
              },
              NumberOfItemsShipped: 0,
              NumberOfItemsUnshipped: 1,
              PaymentMethod: 'Other',
              PaymentMethodDetails: {
                PaymentMethodDetail: 'CreditCard'
              },
              MarketplaceId: 'A2Q3Y263D00KWC',
              BuyerEmail: '5vlhEXAMPLEh9h5@marketplace.amazon.com.br',
              BuyerName: 'John Jones',
              BuyerCounty: 'Vila Olimpia',
              BuyerTaxInfo: {
                TaxingRegion: 'BR',
                TaxClassifications: {
                  TaxClassification: {
                    Name: 'CSTNumber',
                    Value: 'XXX123'
                  }
                }
              },
              EarliestShipDate: '2017-02-20T19:51:16Z',
              LatestShipDate: '2017-02-25T19:49:35Z',
              IsBusinessOrder: false,
              IsPrime: false,
              IsPremiumOrder: false
            },
            {
              AmazonOrderId: '058-1233752-8214740',
              PurchaseDate: '2017-02-05T00%3A06%3A07.000Z',
              LastUpdateDate: '2017-02-07T12%3A43%3A16.000Z',
              OrderStatus: 'Unshipped',
              FulfillmentChannel: 'MFN',
              ShipServiceLevel: 'Std JP Kanto8',
              ShippingAddress: {
                Name: 'Jane Smith',
                AddressLine1: '1-2-10 Akasaka',
                City: 'Tokyo',
                PostalCode: '107-0053',
                CountryCode: 'JP'
              },
              OrderTotal: {
                CurrencyCode: 'JPY',
                Amount: 1507.00
              },
              NumberOfItemsShipped: 0,
              NumberOfItemsUnshipped: 1,
              PaymentExecutionDetail: {
                PaymentExecutionDetailItem: [
                  {
                    Payment: {
                      Amount: 10.00,
                      CurrencyCode: 'JPY'
                    },
                    PaymentMethod: 'PointsAccount'
                  },
                  {
                    Payment: {
                      Amount: 317.00,
                      CurrencyCode: 'JPY'
                    },
                    PaymentMethod: 'GC'
                  },
                  {
                    Payment: {
                      Amount: 1180.00,
                      CurrencyCode: 'JPY'
                    },
                    PaymentMethod: 'COD'
                  }
                ]
              },
              PaymentMethod: 'COD',
              PaymentMethodDetails: {
                PaymentMethodDetail: 'COD'
              },
              MarketplaceId: 'A1VC38T7YXB528',
              BuyerEmail: '5vlhEXAMPLEh9h5@marketplace.amazon.co.jp',
              BuyerName: 'Jane Smith',
              ShipmentServiceLevelCategory: 'Standard',
              OrderType: 'SourcingOnDemandOrder',
              IsBusinessOrder: false,
              IsPrime: false,
              IsPremiumOrder: false,
              PromiseResponseDueDate: '2017-08-31T23:58:44Z',
              IsEstimatedShipDateSet: true
            }
          ]
        }
      },
      ResponseMetadata: {
        RequestId: '88faca76-b600-46d2-b53c-0c8c4533e43a'
      }
    }
  },
  getOrder: {
    GetOrderResponse: {
      xmlns: 'https://mws.amazonservices.com/Orders/2013-09-01',
      GetOrderResult: {
        Orders: {
          Order: {
            AmazonOrderId: '902-3159896-1390916',
            PurchaseDate: '2017-01-20T19:49:35Z',
            LastUpdateDate: '2017-01-20T19:49:35Z',
            OrderStatus: 'Pending',
            FulfillmentChannel: 'MFN',
            NumberOfItemsShipped: 0,
            NumberOfItemsUnshipped: 0,
            PaymentMethod: 'Other',
            PaymentMethodDetails: {
              PaymentMethodDetail: [
                'CreditCard',
                'GiftCerificate'
              ]
            },
            MarketplaceId: 'ATVPDKIKX0DER',
            ShipmentServiceLevelCategory: 'Standard',
            OrderType: 'StandardOrder',
            EarliestShipDate: '2017-01-20T19:51:16Z',
            LatestShipDate: '2017-01-25T19:49:35Z',
            IsBusinessOrder: false,
            IsPrime: false,
            IsPremiumOrder: false
          }
        }
      },
      ResponseMetadata: {
        RequestId: '88faca76-b600-46d2-b53c-0c8c4533e43a'
      }
    }
  },
  listOrderItems: {
    ListOrderItemsResponse: {
      xmlns: 'https://mws.amazonservices.com/Orders/2013-09-01',
      ListOrderItemsResult: {
        NextToken: 'MRgZW55IGNhcm5hbCBwbGVhc3VyZS6=',
        AmazonOrderId: '058-1233752-8214740',
        OrderItems: {
          OrderItem: [
            {
              ASIN: 'BT0093TELA',
              OrderItemId: '68828574383266',
              BuyerCustomizedInfo: {
                CustomizedURL: 'https://zme-caps.amazon.com/t/bR6qHkzSOxuB/J8nbWhze0Bd3DkajkOdY-XQbWkFralegp2sr_QZiKEE/1'
              },
              SellerSKU: 'CBA_OTF_1',
              Title: 'Example item name',
              QuantityOrdered: 1,
              QuantityShipped: 1,
              ProductInfo: {
                NumberOfItems: 12
              },
              PointsGranted: {
                PointsNumber: 10,
                PointsMonetaryValue: {
                  CurrencyCode: 'JPY',
                  Amount: 10.00
                }
              },
              ItemPrice: {
                CurrencyCode: 'JPY',
                Amount: 25.99
              },
              ShippingPrice: {
                CurrencyCode: 'JPY',
                Amount: 1.26
              },
              ScheduledDeliveryEndDate: '2013-09-09T01:30:00.000-06:00',
              ScheduledDeliveryStartDate: '2013-09-071T02:00:00.000-06:00',
              CODFee: {
                CurrencyCode: 'JPY',
                Amount: 10.00
              },
              CODFeeDiscount: {
                CurrencyCode: 'JPY',
                Amount: 1.00
              },
              IsGift: false,
              IsTransparency: true,
              GiftMessageText: 'For you!',
              GiftWrapPrice: {
                CurrencyCode: 'JPY',
                Amount: 1.99
              },
              GiftWrapLevel: 'Classic',
              PriceDesignation: 'BusinessPrice'
            },
            {
              ASIN: 'BCTU1104UEFB',
              OrderItemId: '79039765272157',
              SellerSKU: 'CBA_OTF_5',
              Title: 'Example item name',
              QuantityOrdered: 2,
              ItemPrice: {
                CurrencyCode: 'JPY',
                Amount: 17.95
              },
              PromotionIds: {
                PromotionId: 'FREESHIP'
              },
              ConditionId: 'Used',
              ConditionSubtypeId: 'Mint',
              ConditionNote: 'Example ConditionNote',
              IsGift: false,
              IsTransparency: false,
              PriceDesignation: 'BusinessPrice',
              TaxCollection: {
                Model: 'MarketplaceFacilitator',
                ResponsibleParty: 'Amazon Services, Inc.'
              }
            }
          ]
        }
      },
      ResponseMetadata: {
        RequestId: '88faca76-b600-46d2-b53c-0c8c4533e43a'
      }
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'https://mws.amazonservices.com/Orders/2013-09-01',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T13:29:44.320Z' },
      ResponseMetadata: { RequestId: '1d7c13af-72b0-4f14-b9b6-856378287209' }
    }
  }
}
