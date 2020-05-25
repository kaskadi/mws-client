module.exports = {
  getFBAOutboundShipmentDetail: {
    GetFBAOutboundShipmentDetailResult: {
      ShipmentDetail: {
        PurchaseDate: '2018-04-16T14:44:38Z',
        WarehouseId: 'XXXX',
        AmazonOrderId: '701-0000000-0000000',
        AmazonShipmentId: 'DrLqQwqvb',
        BuyerTaxInfo: {
          TaxClassifications: {
            TaxClassification: {
              Name: 'CPF',
              Value: '99999999999'
            }
          }
        },
        PaymentMethodDetails: {
          PaymentMethodDetail: 'CreditCard'
        },
        BuyerCounty: 'Centro',
        BuyerName: 'Fulano da Silva',
        MarketplaceId: 'A2Q3Y263D00KWC',
        ShippingAddress: {
          City: 'SAO PAULO',
          PostalCode: '00000-000',
          StateOrRegion: 'SP',
          Phone: '11912345678',
          CountryCode: 'BR',
          Name: 'Beltrano da Silva',
          AddressLine1: 'Rua da ConsolaÃ§Ã£o, 700',
          AddressLine2: 'Apto 32'
        },
        ShipmentItems: {
          ShipmentItem: {
            QuantityOrdered: '2',
            Title: 'iPhone X Apple Cinza Espacial, 64 GB e CÃ¢mera 12 MP',
            PromotionDiscount: {
              CurrencyCode: 'BRL',
              Amount: '0.00'
            },
            ASIN: 'B078HVJB69',
            SellerSKU: 'XY-1A0O-B1CD',
            OrderItemId: '19441439621890',
            ShippingPrice: {
              CurrencyCode: 'BRL',
              Amount: '30.00'
            },
            GiftWrapPrice: {
              CurrencyCode: 'BRL',
              Amount: '0.00'
            },
            ItemPrice: {
              CurrencyCode: 'BRL',
              Amount: '5099.99'
            },
            ShippingDiscount: {
              CurrencyCode: 'BRL',
              Amount: '0.00'
            },
            SerialNumbers: {
              SerialNumber: [
                '1234567890',
                '1234567687'
              ]
            }
          }
        }
      }
    },
    ResponseMetadata: {
      RequestId: '88faca76-b600-46d2-b53c-0c8c4533e43a'
    }
  },
  submitFBAOutboundShipmentInvoice: {
    ResponseMetadata: {
      RequestId: '98bbbfc7-22fe-42cf-9ae7-7cfb1849b90f'
    }
  },
  getFBAOutboundShipmentInvoiceStatus: {
    GetFBAOutboundShipmentInvoiceStatusResult: {
      Shipments: {
        Shipment: {
          AmazonShipmentId: 'DrLqQwqvb',
          InvoiceStatus: 'Accepted'
        }
      }
    },
    ResponseMetadata: {
      RequestId: '98bbbfc7-22fe-42cf-9ae7-7cfb1849b90f'
    }
  },
  getServiceStatus: {
    GetServiceStatusResult: {
      Status: 'GREEN',
      Timestamp: '2018-11-01421:38:09.676Z'
    },
    ResponseMetadata: {
      RequestId: 'd80c6c7b-f7c7-4fa7-bdd7-854711cb3bcc'
    }
  }
}
