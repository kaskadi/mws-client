module.exports = {
  getEligibleShippingServices: {
    GetEligibleShippingServicesResponse: {
      xmlns: 'https://mws.amazonservices.com/MerchantFulfillment/2015-06-01',
      GetEligibleShippingServicesResult: {
        ShippingServiceList: {
          ShippingService: [
            {
              AvailableLabelFormats: {
                LabelFormat: [
                  'PDF',
                  'ShippingServiceDefault',
                  'ZPL203'
                ]
              },
              CarrierName: 'FEDEX',
              ShippingServiceOptions: {
                CarrierWillPickUp: false,
                DeclaredValue: {
                  CurrencyCode: 'USD',
                  Amount: 10.00
                },
                DeliveryExperience: 'DeliveryConfirmationWithoutSignature'
              },
              ShippingServiceId: 'FEDEX_PTP_PRIORITY_OVERNIGHT',
              Rate: {
                CurrencyCode: 'USD',
                Amount: 27.81
              },
              LatestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
              EarliestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
              ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa3\nmN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9P8hOWw6qYvxYfGr3QxB6dif9iACvBG7fTm0y3\nx5aKoyyj7mlrrOUEutSK4PbpMepC3deb5GjoVHIIdeKhVZYRU=',
              ShipDate: '2015-09-23T19:32:08.727Z',
              ShippingServiceName: 'FedEx Priority Overnight'
            },
            {
              AvailableLabelFormats: {
                LabelFormat: [
                  'PDF',
                  'ShippingServiceDefault',
                  'ZPL203'
                ]
              },
              CarrierName: 'FEDEX',
              ShippingServiceOptions: {
                CarrierWillPickUp: false,
                DeclaredValue: {
                  CurrencyCode: 'USD',
                  Amount: 10.00
                },
                DeliveryExperience: 'DeliveryConfirmationWithoutSignature'
              },
              ShippingServiceId: 'FEDEX_PTP_STANDARD_OVERNIGHT',
              Rate: {
                CurrencyCode: 'USD',
                Amount: 26.57
              },
              LatestEstimatedDeliveryDate: '2015-09-24T20:00:00Z',
              EarliestEstimatedDeliveryDate: '2015-09-24T20:00:00Z',
              ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa3\nmN2+zUOsRCAZS2oYt0elYmXI8AA2YaB4Q0etqj8XeAkNr4oeJBer1ZX9y4YQN+jHo37NejjUkmDTD\nTxHRbtUIKRYtC9pDb7UCg/VJRff5NpQHcMmBbY/Q/tFdxYM5c=',
              ShipDate: '2015-09-23T19:32:08.727Z',
              ShippingServiceName: 'FedEx Standard Overnight'
            },
            {
              AvailableLabelFormats: {
                LabelFormat: [
                  'PNG',
                  'ShippingServiceDefault'
                ]
              },
              CarrierName: 'UPS',
              ShippingServiceOptions: {
                CarrierWillPickUp: false,
                DeclaredValue: {
                  CurrencyCode: 'USD',
                  Amount: 10.00
                },
                DeliveryExperience: 'DeliveryConfirmationWithoutSignature'
              },
              ShippingServiceId: 'UPS_PTP_GND',
              Rate: {
                CurrencyCode: 'USD',
                Amount: 6.89
              },
              LatestEstimatedDeliveryDate: '2015-09-25T06:00:00Z',
              EarliestEstimatedDeliveryDate: '2015-09-25T06:00:00Z',
              ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c12nyrBg+Utzz6zmIwjhbP5DEb\nC2ZiP0hJRCyAda4ne5EiFGyivXnPjg4kMabInnyVrqdSXRj9TCk88N3BHctTV4lY+0YW647Dm0ahK\nhTc4vU9OqMqYLWbnESwE/V/iydXw==',
              ShipDate: '2015-09-23T19:32:08.727Z',
              ShippingServiceName: 'UPS Ground'
            },
            {
              AvailableLabelFormats: {
                LabelFormat: [
                  'PNG',
                  'ShippingServiceDefault'
                ]
              },
              CarrierName: 'UPS',
              ShippingServiceOptions: {
                CarrierWillPickUp: false,
                DeclaredValue: {
                  CurrencyCode: 'USD',
                  Amount: 10.00
                },
                DeliveryExperience: 'DeliveryConfirmationWithoutSignature'
              },
              ShippingServiceId: 'UPS_PTP_NEXT_DAY_AIR_SAVER',
              Rate: {
                CurrencyCode: 'USD',
                Amount: 22.91
              },
              LatestEstimatedDeliveryDate: '2015-09-25T06:00:00Z',
              EarliestEstimatedDeliveryDate: '2015-09-25T06:00:00Z',
              ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c12nyrBg+Utzz6zmIwjhbP5AI\nOD5oqRXbXz/IF3ZW5Q10AweW6+i5eN09ZqJR1mzQzFPPfKibDD4Rp4AgmbgfThY8CFviXQhKSKsU\naEdmFUlijYAwbgH9yJ7QHoA7K6+C2Qv6VrhsAhuOJWrI87rqSTA=',
              ShipDate: '2015-09-23T19:32:08.727Z',
              ShippingServiceName: 'UPS Next Day Air Saver'
            }
          ]
        },
        TemporarilyUnavailableCarrierList: {
          TemporarilyUnavailableCarrier: {
            CarrierName: 'USPS'
          }
        }
      },
      ResponseMetadata: {
        RequestId: '5b7997fb-efd1-495b-b7db-03ecfa691038'
      }
    }
  },
  createShipment: {
    CreateShipmentResponse: {
      xmlns: 'https://mws.amazonservices.com/MerchantFulfillment/2015-06-01',
      CreateShipmentResult: {
        Shipment: {
          Insurance: {
            CurrencyCode: 'USD',
            Amount: 10.00
          },
          ShipToAddress: {
            City: 'Seattle',
            Phone: {},
            CountryCode: 'US',
            PostalCode: '98121-2778',
            Name: 'Jane Smith',
            AddressLine1: '321 Main St',
            StateOrProvinceCode: 'WA',
            Email: {}
          },
          AmazonOrderId: '903-1713775-3598252',
          Weight: {
            Value: 10,
            Unit: 'oz'
          },
          Label: {
            CustomTextForLabel: 'ABC123',
            LabelFormat: 'ZPL203',
            FileContents: {
              Checksum: 'DmsWbJpdMPALN3jV4wHOrg==',
              Contents: 'H4sIAAAAAAAAAK16WbeqyrLmO2Pc/zBVRLG...\n                        ...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD/Bd+Zx3S8LwAA',
              FileType: 'application/zpl',
              LabelFormat: 'ZPL203'
            },
            Dimensions: {
              Width: 8.50000,
              Length: 11.00000,
              Unit: 'inches'
            },
            StandardIdForLabel: 'AmazonOrderId'
          },
          ShippingService: {
            CarrierName: 'FEDEX',
            ShippingServiceOptions: {
              CarrierWillPickUp: false,
              DeclaredValue: {
                CurrencyCode: 'USD',
                Amount: 10.00
              },
              DeliveryExperience: 'DELIVERY_CONFIRMATION'
            },
            ShippingServiceId: 'FEDEX_PTP_PRIORITY_OVERNIGHT',
            Rate: {
              CurrencyCode: 'USD',
              Amount: 27.81
            },
            LatestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            EarliestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa\n                    3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLy\n                    oUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=',
            ShipDate: '2015-09-23T20:10:56.829Z',
            ShippingServiceName: 'FedEx Priority Overnight®'
          },
          PackageDimensions: {
            Width: 5,
            Length: 5,
            Unit: 'inches',
            Height: 5
          },
          CreatedDate: '2015-09-23T20:11:12.908Z',
          ShipFromAddress: {
            City: 'Seattle',
            Phone: '2061234567',
            CountryCode: 'US',
            PostalCode: '98121',
            Name: 'John Doe',
            AddressLine1: '1234 Westlake Ave',
            StateOrProvinceCode: 'WA'
          },
          ShipmentId: '6f77095e-9f75-47eb-aaab-a42d5428fa1a',
          ItemList: {
            Item: {
              OrderItemId: '40525960574974',
              Quantity: 1
            }
          },
          Status: 'Purchased',
          TrackingId: '794657111237'
        }
      },
      ResponseMetadata: {
        RequestId: 'adb18f0d-2076-48d4-99ef-fb4b9f892a4e'
      }
    }
  },
  getShipment: {
    GetShipmentResponse: {
      xmlns: 'https://mws.amazonservices.com/MerchantFulfillment/2015-06-01',
      GetShipmentResult: {
        Shipment: {
          Insurance: {
            CurrencyCode: 'USD',
            Amount: 10.00
          },
          ShipToAddress: {
            City: 'Seattle',
            Phone: {},
            CountryCode: 'US',
            PostalCode: '98121-2778',
            Name: 'Jane Smith',
            AddressLine1: '321 Main St',
            StateOrProvinceCode: 'WA',
            Email: {}
          },
          AmazonOrderId: '903-1713775-3598252',
          Weight: {
            Value: 10,
            Unit: 'oz'
          },
          Label: {
            CustomTextForLabel: 'ABC123',
            LabelFormat: 'ZPL203',
            FileContents: {
              Checksum: 'DmsWbJpdMPALN3jV4wHOrg==',
              Contents: 'H4sIAAAAAAAAAK16WbeqyrLmO2Pc/zBVRLG...\n                        ...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD/Bd+Zx3S8LwAA',
              FileType: 'application/zpl'
            },
            Dimensions: {
              Width: 8.50000,
              Length: 11.00000,
              Unit: 'inches'
            },
            StandardIdForLabel: 'AmazonOrderId'
          },
          ShippingService: {
            CarrierName: 'FEDEX',
            ShippingServiceOptions: {
              CarrierWillPickUp: false,
              DeclaredValue: {
                CurrencyCode: 'USD',
                Amount: 10.00
              },
              DeliveryExperience: 'DELIVERY_CONFIRMATION'
            },
            ShippingServiceId: 'FEDEX_PTP_PRIORITY_OVERNIGHT',
            Rate: {
              CurrencyCode: 'USD',
              Amount: 27.81
            },
            LatestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            EarliestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa\n                    3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLy\n                    oUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=',
            ShipDate: '2015-09-23T20:10:56.829Z',
            ShippingServiceName: 'FedEx Priority Overnight®'
          },
          PackageDimensions: {
            Width: 5,
            Length: 5,
            Unit: 'inches',
            Height: 5
          },
          CreatedDate: '2015-09-23T20:11:12.908Z',
          ShipFromAddress: {
            City: 'Seattle',
            Phone: '2061234567',
            CountryCode: 'US',
            PostalCode: '98121',
            Name: 'John Doe',
            AddressLine1: '1234 Westlake Ave',
            StateOrProvinceCode: 'WA'
          },
          ShipmentId: '6f77095e-9f75-47eb-aaab-a42d5428fa1a',
          ItemList: {
            Item: {
              OrderItemId: '40525960574974',
              Quantity: 1
            }
          },
          Status: 'Purchased',
          TrackingId: '794657111237'
        }
      },
      ResponseMetadata: {
        RequestId: 'f44b6af6-74f8-43d3-b928-1c4e0123b26c'
      }
    }
  },
  cancelShipment: {
    CancelShipmentResponse: {
      xmlns: 'https://mws.amazonservices.com/MerchantFulfillment/2015-06-01',
      CancelShipmentResult: {
        Shipment: {
          Insurance: {
            CurrencyCode: 'USD',
            Amount: 10.00
          },
          ShipToAddress: {
            City: 'Seattle',
            Phone: {},
            CountryCode: 'US',
            PostalCode: '98121-2778',
            Name: 'Jane Smith',
            AddressLine1: '321 Main St',
            StateOrProvinceCode: 'WA',
            Email: {}
          },
          AmazonOrderId: '903-1713775-3598252',
          Weight: {
            Value: 10,
            Unit: 'oz'
          },
          Label: {
            FileContents: {
              Checksum: 'DmsWbJpdMPALN3jV4wHOrg==',
              Contents: 'H4sIAAAAAAAAAK16WbeqyrLmO2Pc/zBVRLG...\n...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD/Bd+Zx3S8LwAA',
              FileType: 'application/pdf'
            },
            Dimensions: {
              Width: 8.50000,
              Length: 11.00000,
              Unit: 'inches'
            }
          },
          ShippingService: {
            CarrierName: 'FEDEX',
            ShippingServiceOptions: {
              CarrierWillPickUp: false,
              DeclaredValue: {
                CurrencyCode: 'USD',
                Amount: 10.00
              },
              DeliveryExperience: 'DELIVERY_CONFIRMATION'
            },
            ShippingServiceId: 'FEDEX_PTP_PRIORITY_OVERNIGHT',
            Rate: {
              CurrencyCode: 'USD',
              Amount: 27.81
            },
            LatestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            EarliestEstimatedDeliveryDate: '2015-09-24T10:30:00Z',
            ShippingServiceOfferId: 'HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa\n3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLy\noUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=',
            ShipDate: '2015-09-23T20:10:56.829Z',
            ShippingServiceName: 'FedEx Priority Overnight®'
          },
          PackageDimensions: {
            Width: 5,
            Length: 5,
            Unit: 'inches',
            Height: 5
          },
          CreatedDate: '2015-09-23T20:11:12.908Z',
          ShipFromAddress: {
            City: 'Seattle',
            Phone: '2061234567',
            CountryCode: 'US',
            PostalCode: '98121',
            Name: 'John Doe',
            AddressLine1: '1234 Westlake Ave',
            StateOrProvinceCode: 'WA'
          },
          ShipmentId: '6f77095e-9f75-47eb-aaab-a42d5428fa1a',
          ItemList: {
            Item: {
              OrderItemId: '40525960574974',
              Quantity: 1
            }
          },
          Status: 'Purchased',
          TrackingId: '794657111237'
        }
      },
      ResponseMetadata: {
        RequestId: 'adb18f0d-2076-48d4-99ef-fb4b9f892a4e'
      }
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'http://mws.amazonservices.com/MerchantFulfillment/2015-06-01',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T13:27:13.612Z' },
      ResponseMetadata: { RequestId: '9c4ad734-816e-4e28-89f2-43d9c76d2cb0' }
    }
  }
}
