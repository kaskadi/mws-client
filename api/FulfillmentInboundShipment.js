const Section = require('./section.js')
class FulfillmentInboundShipment extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'FulfillmentInboundShipment'
    this.Version = '2010-10-01'
  }
  getInboundGuidanceForSKU (opt) {
    opt.Action = 'GetInboundGuidanceForSKU'
    if (parent.mockUp) {
      return {
        GetInboundGuidanceForSKUResponse: {
          xmlns: "https://mws.amazonservices.com/FulfillmentInboundShipment/2010-10-01",
          GetInboundGuidanceForSKUResult: {
            SKUInboundGuidanceList: {
              SellerSKU: "us001",
              ASIN: "B00005N5PF",
              InboundGuidance: "InboundNotRecommended",
              GuidanceReasonList: {
                GuidanceReason: "SlowMovingASIN"
              }
            },
            InvalidSKUList: {}
          },
          ResponseMetadata: {
            RequestId: "d80c6c7b-f7c7-4fa7-bdd7-854711cb3bcc"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getInboundGuidanceForASIN (opt) {
    opt.Action = 'GetInboundGuidanceForASIN'
    if (parent.mockUp) {
      return {
        GetInboundGuidanceForASINResponse: {
          xmlns: "https://mws.amazonservices.com/FulfillmentInboundShipment/2010-10-01",
          GetInboundGuidanceForASINResult: {
            ASINInboundGuidanceList: {
              ASIN: "B00005N5PF",
              InboundGuidance: "InboundNotRecommended",
              GuidanceReasonList: {
                GuidanceReason: "SlowMovingASIN"
              }
            },
            InvalidASINList: {}
          },
          ResponseMetadata: {
            RequestId: "d80c6c7b-f7c7-4fa7-bdd7-854711cb3bcc"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  createInboundShipmentPlan (opt) {
    opt.Action = 'CreateInboundShipmentPlan'
    if (parent.mockUp) {
      return {
        CreateInboundShipmentPlanResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          CreateInboundShipmentPlanResult: {
            InboundShipmentPlans: {
              member: {
                DestinationFulfillmentCenterId: "ABE2",
                LabelPrepType: "SELLER_LABEL",
                ShipToAddress: {
                  City: "Breinigsville",
                  CountryCode: "US",
                  PostalCode: "18031",
                  Name: "Amazon.com",
                  AddressLine1: "705 Boulder Drive",
                  StateOrProvinceCode: "PA"
                },
                EstimatedBoxContentsFee: {
                  TotalUnits: 10,
                  FeePerUnit: {
                    CurrencyCode: "USD",
                    Value: 0.10
                  },
                  TotalFee: {
                    CurrencyCode: "USD",
                    Value: 10.0
                  }
                },
                Items: {
                  member: {
                    FulfillmentNetworkSKU: "FNSKU00001",
                    Quantity: 1,
                    SellerSKU: "SKU00001",
                    PrepDetailsList: {
                      PrepDetails: {
                        PrepInstruction: "Taping",
                        PrepOwner: "AMAZON"
                      }
                    }
                  }
                },
                ShipmentId: "FBA0000001"
              }
            }
          },
          ResponseMetadata: {
            RequestId: "babd156d-8b2f-40b1-a770-d117f9ccafef"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  createInboundShipment (opt) {
    opt.Action = 'CreateInboundShipment'
    if (parent.mockUp) {
      return {
        CreateInboundShipmentResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          CreateInboundShipmentResult: {
            ShipmentId: "FBA2F50GYX"
          },
          ResponseMetadata: {
            RequestId: "2a1455aa-c5f9-4993-9b18-dc10407e09ba"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  updateInboundShipment (opt) {
    opt.Action = 'UpdateInboundShipment'
    if (parent.mockUp) {
      return {
        UpdateInboundShipmentResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          UpdateInboundShipmentResult: {
            ShipmentId: "FBA2F50GYX"
          },
          ResponseMetadata: {
            RequestId:"4a2d48a7-9ac3-41f9-82e8-cbd9c137c7c6"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getPreorderInfo (opt) {
    opt.Action = 'GetPreorderInfo'
    if (parent.mockUp) {
      return {
        GetPreorderInfoResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetPreorderInfoResult: {
            ShipmentContainsPreorderableItems: true,
            NeedByDate: "2015-12-27",
            ConfirmedFulfillableDate: "2015-12-31",
            ShipmentConfirmedForPreorder: true
          },
          ResponseMetadata: {
            RequestId: "4a1a7029-462b-4a27-a04c-4cbe0fd107e3"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  confirmPreorder (opt) {
    opt.Action = 'ConfirmPreorder'
    if (parent.mockUp) {
      return {
        ConfirmPreorderResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          ConfirmPreorderResult: {
            ConfirmedNeedByDate: "2015-12-27",
            ConfirmedFulfillableDate: "2015-12-31"
          },
          ResponseMetadata: {
            RequestId: "4a1a7029-462b-4a27-a04c-4cbe0fd107e3"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getPrepInstructionsForSKU (opt) {
    opt.Action = 'GetPrepInstructionsForSKU'
    if (parent.mockUp) {
      return {
        GetPrepInstructionsForSKUResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetPrepInstructionsForSKUResult: {
            SKUPrepInstructionsList: {
              SKUPrepInstructions: {
                SellerSKU: "ca_001",
                ASIN: "B00EXAMPLE",
                BarcodeInstruction: "RequiresFNSKULabel",
                PrepGuidance: "SeePrepInstructionsList",
                PrepInstructionList: {
                  PrepInstruction: [
                    "Polybagging",
                    "Taping",
                    "Labeling"
                  ]
                },
                AmazonPrepFeesDetailsList: {
                  AmazonPrepFeesDetails: [
                    {
                      PrepInstruction: "Polybagging",
                      Amount: {
                        CurrencyCode: "USD",
                        Value: 0.2
                      }
                    },
                    {
                      PrepInstruction: "Taping",
                      Amount: {
                        CurrencyCode: "USD",
                        Value: 0.2
                      }
                    },
                    {
                      PrepInstruction: "Labeling",
                      Amount: {
                        CurrencyCode:"USD",
                        Value: 0.2
                      }
                    }
                  ]
                }
              }
            },
            InvalidSKUList: ""
          },
          ResponseMetadata: {
            RequestId: "171a23ca-12f9-4599-bbdf-47bc5701d955"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getPrepInstructionsForASIN (opt) {
    opt.Action = 'GetPrepInstructionsForASIN'
    if (parent.mockUp) {
      return {
        GetPrepInstructionsForASINResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetPrepInstructionsForASINResult: {
            ASINPrepInstructionsList: {
              ASINPrepInstructions: {
                ASIN: "B00005N5PF",
                BarcodeInstruction: "RequiresFNSKULabel",
                PrepGuidance: "SeePrepInstructionsList",
                PrepInstructionList: {
                  PrepInstruction: [
                    "Polybagging",
                    "Taping"
                  ]
                }
              }
            },
            InvalidASINList: {
              InvalidASIN: {
                ASIN: "B0INVALIDF",
                ErrorReason: "InvalidASIN"
              }
            }
          },
          ResponseMetadata: {
            RequestId: "171a23ca-12f9-4599-bbdf-47bc5701d955"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  putTransportContent (opt) {
    opt.Action = 'PutTransportContent'
    if (parent.mockUp) {
      return {
        PutTransportContentResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          PutTransportContentResult: {
            TransportResult: {
              TransportStatus: "WORKING"
            }
          },
          ResponseMetadata: {
            RequestId: "616f4f53-973e-4bb3-8dd3-0b46978a45c5"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  estimateTransportRequest (opt) {
    opt.Action = 'EstimateTransportRequest'
    if (parent.mockUp) {
      return {
        EstimateTransportRequestResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          EstimateTransportRequestResult: {
            TransportResult: {
              TransportStatus: "ESTIMATING"
            }
          },
          ResponseMetadata: {
            RequestId: "827e673d-8399-492f-bfb6-4fdf26d146ba"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getTransportContent (opt) {
    opt.Action = 'GetTransportContent'
    if (parent.mockUp) {
      return {
        GetTransportContentResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetTransportContentResult: {
            TransportContent: {
              TransportDetails: {
                PartneredSmallParcelData: {
                  PartneredEstimate: {
                    Amount: {
                      CurrencyCode: "USD",
                      Value: 38.22
                    },
                    VoidDeadline: "2013-08-10T00:25:05.650Z"
                  },
                  PackageList: {
                    member: [
                      {
                        Weight: {
                          Unit: "pounds",
                          Value: 5.5
                        },
                        TrackingId: "1Z8V016A0377769652",
                        CarrierName: "UNITED_PARCEL_SERVICE_INC",
                        Dimensions: {
                          Unit: "inches",
                          Height: 15,
                          Width: 15,
                          Length: 15
                        },
                        PackageStatus: "SHIPPED"
                      },
                      {
                        Weight: {
                          Unit: "pounds",
                          Value: 5.5
                        },
                        TrackingId: "1Z8V016A0371928464",
                        CarrierName: "UNITED_PARCEL_SERVICE_INC",
                        Dimensions: {
                          Unit: "inches",
                          Height: 15,
                          Width: 15,
                          Length: 15
                        },
                        PackageStatus: "SHIPPED"
                      },
                      {
                        Weight: {
                          Unit: "pounds",
                          Value: 5.5
                        },
                        TrackingId: "1Z8V016A0360430477",
                        CarrierName: "UNITED_PARCEL_SERVICE_INC",
                        Dimensions: {
                          Unit: "inches",
                          Height: 15,
                          Width: 15,
                          Length: 15
                        },
                        PackageStatus: "SHIPPED"
                      }
                    ]
                  }
                }
              },
              TransportResult: {
                TransportStatus: "CONFIRMED"
              },
              TransportHeader: {
                ShipmentType: "SP",
                ShipmentId: "FBAQF72K",
                SellerId: "A135KKEKWF1J56",
                IsPartnered: true
              }
            }
          },
          ResponseMetadata: {
            RequestId: "9708430a-4010-478e-aafc-053979329978"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  confirmTransportRequest (opt) {
    opt.Action = 'ConfirmTransportRequest'
    if (parent.mockUp) {
      return {
        ConfirmTransportRequestResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          ConfirmTransportRequestResult: {
            TransportResult: {
              TransportStatus: "CONFIRMING"
            }
          },
          ResponseMetadata: {
            RequestId: "27bdc3df-d41b-4cf5-a96d-047815797bbf"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  voidTransportRequest (opt) {
    opt.Action = 'VoidTransportRequest'
    if (parent.mockUp) {
      return {
        VoidTransportRequestResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          VoidTransportRequestResult: {
            TransportResult: {
              TransportStatus: "VOIDING"
            }
          },
          ResponseMetadata: {
            RequestId: "c5818219-de93-4b3e-8f9b-b172fbacd010"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getPackageLabels (opt) {
    opt.Action = 'GetPackageLabels'
    if (parent.mockUp) {
      return {
        GetPackageLabelsResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetPackageLabelsResult: {
            TransportDocument: {
              PdfDocument: "ABEAAAAAAlbHMucGRmUEsFBgAAAAABAAEAPwAAALQXAQAAAA==",
              Checksum: "WGQwqA+NlzMVL1plHc/7ZA=="
            }
          },
          ResponseMetadata: {
            RequestId: "985a3fa9-3ce2-46fb-a1c7-321439269d2b"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getUniquePackageLabels (opt) {
    opt.Action = 'GetUniquePackageLabels'
    if (parent.mockUp) {
      return {
        GetUniquePackageLabelsResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetUniquePackageLabelsResult: {
            TransportDocument: {
              PdfDocument: "ABEAAAAAAlbHMucGRmUEsFBgAAAAABAAEAPwAAALQXAQAAAA==",
              Checksum: "WGQwqA+NlzMVL1plHc/7ZA=="
            }
          },
          ResponseMetadata: {
            RequestId: "985a3fa9-3ce2-46fb-a1c7-321439269d2b"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getPalletLabels (opt) {
    opt.Action = 'GetPalletLabels'
    if (parent.mockUp) {
      return {
        GetPalletLabelsResponse: {
          GetPalletLabelsResult: {
            TransportDocument: {
              PdfDocument: "ABEAAAAAAlbHMucGRmUEsFBgAAAAABAAEAPwAAALQXAQAAAA==",
              Checksum: "WGQwqA+NlzMVL1plHc/7ZA=="
            }
          },
          ResponseMetadata: {
            RequestId: "985a3fa9-3ce2-46fb-a1c7-321439269d2b"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getBillOfLading (opt) {
    opt.Action = 'GetBillOfLading'
    if (parent.mockUp) {
      return {
        GetBillOfLadingResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          GetBillOfLadingResult: {
            TransportDocument: {
              PdfDocument: "ABEAAAAAAlbHMucGRmUEsFBgAAAAABAAEAPwAAALQXAQAAAA==",
              Checksum: "WGQwqA+NlzMVL1plHc/7ZA=="
            }
          },
          ResponseMetadata: {
            RequestId: "985a3fa9-3ce2-46fb-a1c7-321439269d2b"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  listInboundShipments (opt) {
    opt.Action = 'ListInboundShipments'
    if (parent.mockUp) {
      return {
        ListInboundShipmentsResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          ListInboundShipmentsResult: {
            ShipmentData: {
              member: [
                {
                  ShipFromAddress: {
                    PostalCode: "V5V 1A1",
                    Name: "jsowprni Devo CA20",
                    CountryCode: "CA",
                    StateOrProvinceCode: "BC",
                    AddressLine1: "Address Line 1",
                    City: "Vancouver"
                  },
                  ShipmentId: "FBAN4QNH",
                  ShipmentName: "FBA (8/27/12 1:55 PM)",
                  ShipmentStatus: "WORKING",
                  LabelPrepType: "NO_LABEL",
                  DestinationFulfillmentCenterId: "YYZ1"
                },
                {
                  ShipFromAddress: {
                    PostalCode: "V5V 1A1",
                    Name: "Janani Arvind FBA QA",
                    CountryCode: "CA",
                    StateOrProvinceCode: "BC",
                    AddressLine1: "Address 1",
                    City: "Vancouver"
                  },
                  ShipmentId: "FBA1123",
                  ShipmentName: "Test MWS CA Shipment 1",
                  ShipmentStatus: "WORKING",
                  LabelPrepType: "NO_LABEL",
                  DestinationFulfillmentCenterId: "RIC2",
                  BoxContentsSource: "NONE",
                  EstimatedBoxContentsFee: {
                    TotalUnits: 10,
                    FeePerUnit: {
                      CurrencyCode: "USD",
                      Value: 0.10
                    },
                    TotalFee: {
                      CurrencyCode: "USD",
                      Value: 10.0
                    }
                  }
                }
              ]
            }
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  listInboundShipmentItems (opt) {
    opt.Action = 'ListInboundShipmentItems'
    if (parent.mockUp) {
      return {
        ListInboundShipmentItemsResponse: {
          xmlns: "http://mws.amazonaws.com/FulfillmentInboundShipment/2010-10-01/",
          ListInboundShipmentItemsResult: {
            ItemData: {
              member: [
                {
                  ShipmentId: "SSF85DGIZZ3OF1",
                  SellerSKU: "SampleSKU1",
                  QuantityShipped: 3,
                  QuantityInCase: 0,
                  QuantityReceived: 0,
                  FulfillmentNetworkSKU: "B000FADVPQ",
                  ReleaseDate: "2014-12-31"
                },
                {
                  ShipmentId: "SSF85DGIZZ3OF1",
                  SellerSKU: "SampleSKU2",
                  QuantityShipped: 10,
                  QuantityInCase: 0,
                  QuantityReceived: 0,
                  FulfillmentNetworkSKU: "B0011VECH4"
                }
              ]
            }
          },
          ResponseMetadata: {
            RequestId: "ffce8932-8e69-11df-8af1-5bf2881764d8"
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
module.exports = parent => new FulfillmentInboundShipment(parent)
