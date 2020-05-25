module.exports = {
  listFinancialEventGroups: {
    ListFinancialEventGroupsResponse: {
      xmlns: 'https://mws.amazonservices.com/Finances/2015-05-01',
      ListFinancialEventGroupsResult: {
        NextToken: '2YgYW55IGNhcm5hbCBwbGVhcEXAMPLE',
        FinancialEventGroupList: {
          FinancialEventGroup: {
            FinancialEventGroupId: '22YgYW55IGNhcm5hbCBwbGVhEXAMPLE',
            ProcessingStatus: 'Closed',
            FundTransferStatus: 'Successful',
            OriginalTotal: {
              CurrencyCode: 'USD',
              Amount: 19.00
            },
            ConvertedTotal: {
              CurrencyCode: 'USD',
              Amount: 19.00
            },
            FundTransferDate: '2014-09-09T01:30:00.000-06:00',
            TraceId: '128311029381HSADJEXAMPLE',
            AccountTail: '1212',
            BeginningBalance: {
              CurrencyCode: 'USD',
              Amount: 0.00
            },
            FinancialEventGroupStart: '2014-09-01T01:30:00.000-06:00',
            FinancialEventGroupEnd: '2014-09-09T01:30:00.000-06:00'
          }
        }
      },
      ResponseMetadata: {
        RequestId: '1105b931-6f1c-4480-8e97-f3b46EXAMPLE'
      }
    }
  },
  listFinancialEventGroupsByNextToken: {
    ListFinancialEventGroupsByNextTokenResult: {
      NextToken: '2YgYW55IGNhcm5hbCBwbGVhcEXAMPLE',
      FinancialEventGroupList: {
        FinancialEventGroup: {
          FinancialEventGroupId: '22YgYW55IGNhcm5hbCBwbGVhEXAMPLE',
          ProcessingStatus: 'Closed',
          FundTransferStatus: 'Successful',
          OriginalTotal: {
            CurrencyCode: 'USD',
            Amount: '19.00'
          },
          ConvertedTotal: {
            CurrencyCode: 'USD',
            Amount: '19.00'
          },
          FundTransferDate: '2014-09-09T01:30:00.000-06:00',
          TraceId: '128311029381HSADJEXAMPLE',
          AccountTail: '1212',
          BeginningBalance: {
            CurrencyCode: 'USD',
            Amount: '0.00'
          },
          FinancialEventGroupStart: '2014-09-01T01:30:00.000-06:00',
          FinancialEventGroupEnd: '2014-09-09T01:30:00.000-06:00'
        }
      }
    },
    ResponseMetadata: {
      RequestId: '1105b931-6f1c-4480-8e97-f3b46EXAMPLE'
    }
  },
  listFinancialEvents: {
    ListFinancialEventsResponse: {
      xmlns: 'http://mws.amazonservices.com/Finances/2015-05-01',
      ListFinancialEventsResult: {
        FinancialEvents: {
          ProductAdsPaymentEventList: [
            {},
            {
              ProductAdsPaymentEvent: {
                PostedDate: '2017-01-11T13:17:15.000Z',
                transactionType: 'Charge',
                invoiceId: 'TR1W0B4YB-6',
                baseValue: {
                  CurrencyAmount: 115.34,
                  CurrencyCode: 'USD'
                },
                taxValue: {
                  CurrencyAmount: 21.91,
                  CurrencyCode: 'USD'
                },
                transactionValue: {
                  CurrencyAmount: 137.25,
                  CurrencyCode: 'USD'
                }
              }
            }
          ],
          RentalTransactionEventList: {},
          PayWithAmazonEventList: {},
          ServiceFeeEventList: {},
          ServiceProviderCreditEventList: {},
          SellerDealPaymentEventList: {
            SellerDealPaymentEvent: {
              PostedDate: '2016-11-21T16:18:15.000Z',
              DealDescription: 'test fees',
              DealId: 'fec11097c1f4379426a7de68bf938b684f677de2',
              EventType: 'SellerDealComplete',
              FeeType: 'RunLightningDealFee',
              FeeAmount: {
                CurrencyAmount: 16.38,
                CurrencyCode: 'USD'
              },
              TaxAmount: {
                CurrencyAmount: 3.18,
                CurrencyCode: 'USD'
              }
            }
          },
          DebtRecoveryEventList: {},
          ShipmentEventList: {
            ShipmentEvent: {
              ShipmentItemList: {
                ShipmentItem: {
                  ItemChargeList: {
                    ChargeComponent: [
                      {
                        ChargeType: 'Principal',
                        ChargeAmount: {
                          CurrencyAmount: 25.99,
                          CurrencyCode: 'USD'
                        }
                      },
                      {
                        ChargeType: 'Tax',
                        ChargeAmount: {
                          CurrencyAmount: 0.0,
                          CurrencyCode: 'USD'
                        }
                      }
                    ],
                    FeeType: 'ShippingChargeback',
                    FeeAmount: {
                      CurrencyAmount: 0.0,
                      CurrencyCode: 'USD'
                    },
                    FeeComponent: {
                      FeeType: 'VariableClosingFee',
                      FeeAmount: {
                        CurrencyAmount: 0.0,
                        CurrencyCode: 'USD'
                      }
                    },
                    OrderItemId: '46432915698730',
                    QuantityShipped: 1,
                    SellerSKU: 'HS223A-C00'
                  }
                }
              },
              AmazonOrderId: '105-0457358-1245022',
              PostedDate: '2017-01-23T01:31:25Z',
              MarketplaceName: 'Amazon.com',
              SellerOrderId: '105-0457358-1245022'
            }
          },
          AffordabilityExpenseEventList: {
            AffordabilityExpenseEvent: {
              PostedDate: '2018-02-08T13:17:15.000Z',
              TransactionType: 'Charge',
              AmazonOrderId: '931-2463294-5740665',
              MarketplaceId: 'A2XZLSVIQ0F4JT',
              BaseExpense: {
                CurrencyAmount: -100.00,
                CurrencyCode: 'INR'
              },
              TaxTypeIGST: {
                CurrencyAmount: -18.00,
                CurrencyCode: 'INR'
              },
              TaxTypeSGST: {
                CurrencyAmount: 0.00,
                CurrencyCode: 'INR'
              },
              TaxTypeCGST: {
                CurrencyAmount: 0.00,
                CurrencyCode: 'INR'
              },
              TotalExpense: {
                CurrencyAmount: -118.00,
                CurrencyCode: 'INR'
              }
            }
          },
          RetrochargeEventList: {},
          GuaranteeClaimEventList: {},
          ChargebackEventList: {},
          LoanServicingEventList: {},
          RefundEventList: {},
          AdjustmentEventList: {},
          PerformanceBondRefundEventList: {},
          AffordabilityExpenseReversalEventList: {
            AffordabilityExpenseReversalEvent: {
              PostedDate: '2018-02-08T13:17:15.000Z',
              TransactionType: 'Refund',
              AmazonOrderId: '931-2463294-5740665',
              MarketplaceId: 'A2XZLSVIQ0F4JT',
              BaseExpense: {
                CurrencyAmount: 100.00,
                CurrencyCode: 'INR'
              },
              TaxTypeIGST: {
                CurrencyAmount: 18.00,
                CurrencyCode: 'INR'
              },
              TaxTypeSGST: {
                CurrencyAmount: 0.00,
                CurrencyCode: 'INR'
              },
              TaxTypeCGST: {
                CurrencyAmount: 0.00,
                CurrencyCode: 'INR'
              },
              TotalExpense:
              {
                CurrencyAmount: 118.00,
                CurrencyCode: 'INR'
              }
            }
          }
        }
      },
      ResponseMetadata: {
        RequestId: '6a2929e5-5c77-470e-ad71-36f30bfaffcc'
      }
    }
  },
  listFinancialEventsByNextToken: {
    ListFinancialEventsByNextTokenResult: {
      NextToken: 'e21hcmtldHBsYWNlSWQ6bnVsbCxtYXhSZXN1bHRzUGVyUGFnZTowLHNlYXJjaFF1ZXJ5Q2hlY2tzdW06bnVsbCxxdWVyeVBhZ2luYXRpb25Ub2tlbjoidDB3V25MNXFLWkRIZ2p5ZzB3ZHRWODVnV0htVExVMkM0XzlsMHpRMG9HVXFZOVhTdjFyWUNWUE8teGxWRnF3N0ZyaDIyY3lQX0VTOXYxendQNUVvc0t0V1NKM1YyQkRJdWcyWFpXdm1KVmdPVktBdzNIMXUyVHBiTGoxVmRmY3Z6ZlU1WlpNaEpsQ0RKUnYxRk16am13Y1YyQ1BoOXNWMU1xNUZqamxUMlRCeFBkSjdEa3BkbENISElVZ094aHVTN3ZfZlFCUWYyWWJYZ2l3NHNxZXkwNnQyaVBucm5PdnAzRTdKbW4xcnc1UTlaTGV1Ymk5WUV6UGJ6UnhjRmh2VUFKdlQ5U2U3eERIdHVMUzNJVWFRODBubVhja3JLeWt3dVZKeWZXQm5CY3p0bjZTbVRHenJmZ1VOanFMWFFNT2giLHNlYXJjaFF1ZXJ5Om51bGwsdG9rZW5DcmVhdGlvbkRhdGU6MTQ4NTg2MjY5ODI1NCxzZWxsZXJJZDoiQTM1SlMxREpITjdGViJ9',
      FinancialEvents: {
        ProductAdsPaymentEventList: [
          null,
          {
            ProductAdsPaymentEvent: {
              PostedDate: '2017-01-11T13:17:15.000Z',
              transactionType: 'Charge',
              invoiceId: 'TR1W0B4YB-6',
              baseValue: {
                CurrencyAmount: '115.34',
                CurrencyCode: 'USD'
              },
              taxValue: {
                CurrencyAmount: '21.91',
                CurrencyCode: 'USD'
              },
              transactionValue: {
                CurrencyAmount: '137.25',
                CurrencyCode: 'USD'
              }
            }
          }
        ],
        RentalTransactionEventList: null,
        PayWithAmazonEventList: null,
        SellerDealPaymentEventList: [
          {
            SellerDealPaymentEvent: {
              PostedDate: '2016-11-21T16:18:15.000Z',
              DealDescription: 'test fees',
              DealId: 'fec11097c1f4379426a7de68bf938b684f677de2',
              EventType: 'SellerDealComplete',
              FeeType: 'RunLightningDealFee',
              FeeAmount: {
                CurrencyAmount: '16.38',
                CurrencyCode: 'USD'
              },
              TaxAmount: {
                CurrencyAmount: '3.18',
                CurrencyCode: 'USD'
              }
            }
          },
          null
        ],
        AffordabilityExpenseEventList: {
          AffordabilityExpenseEvent: {
            PostedDate: '2018-02-08T13:17:15.000Z',
            TransactionType: 'Charge',
            AmazonOrderId: '931-2463294-5740665',
            MarketplaceId: 'A2XZLSVIQ0F4JT',
            BaseExpense: {
              CurrencyAmount: '-100.00',
              CurrencyCode: 'INR'
            },
            TaxTypeIGST: {
              CurrencyAmount: '-18.00',
              CurrencyCode: 'INR'
            },
            TaxTypeSGST: {
              CurrencyAmount: '0.00',
              CurrencyCode: 'INR'
            },
            TaxTypeCGST: {
              CurrencyAmount: '0.00',
              CurrencyCode: 'INR'
            },
            TotalExpense: {
              CurrencyAmount: '-118.00',
              CurrencyCode: 'INR'
            }
          }
        },
        ServiceFeeEventList: {
          ServiceFeeEvent: [
            {
              FeeDescription: 'Shacke Luggage Tags with Full Back Privacy Cover w/ Steel Loops - Set of 2\n            (Green)',
              SellerSKU: 'FH-REED-16DX'
            },
            {
              FeeDescription: 'Shacke Luggage Tags with Full Back Privacy Cover w/ Steel Loops - Set of 2\n            (Green)',
              SellerSKU: 'FH-REED-16DX',
              FeeList: {
                FeeComponent: [
                  {
                    FeeType: 'FBACustomerReturnPerOrderFee',
                    FeeAmount: {
                      CurrencyAmount: '-1.0',
                      CurrencyCode: 'USD'
                    }
                  },
                  {
                    FeeType: 'FBACustomerReturnPerUnitFee',
                    FeeAmount: {
                      CurrencyAmount: '-1.06',
                      CurrencyCode: 'USD'
                    }
                  },
                  {
                    FeeType: 'FBACustomerReturnWeightBasedFee',
                    FeeAmount: {
                      CurrencyAmount: '-0.5',
                      CurrencyCode: 'USD'
                    }
                  }
                ]
              }
            }
          ]
        },
        AffordabilityExpenseReversalEventList: {
          AffordabilityExpenseReversalEvent: {
            PostedDate: '2018-02-08T13:17:15.000Z',
            TransactionType: 'Refund',
            AmazonOrderId: '931-2463294-5740665',
            MarketplaceId: 'A2XZLSVIQ0F4JT',
            BaseExpense: {
              CurrencyAmount: '100.00',
              CurrencyCode: 'INR'
            },
            TaxTypeIGST: {
              CurrencyAmount: '18.00',
              CurrencyCode: 'INR'
            },
            TaxTypeSGST: {
              CurrencyAmount: '0.00',
              CurrencyCode: 'INR'
            },
            TaxTypeCGST: {
              CurrencyAmount: '0.00',
              CurrencyCode: 'INR'
            },
            TotalExpense: {
              CurrencyAmount: '118.00',
              CurrencyCode: 'INR'
            }
          }
        },
        ServiceProviderCreditEventList: null,
        DebtRecoveryEventList: null,
        AdjustmentEventList: {
          AdjustmentEvent: {
            AdjustmentItemList: {
              AdjustmentItem: {
                PerUnitAmount: {
                  CurrencyAmount: '3.38',
                  CurrencyCode: 'USD'
                },
                TotalAmount: {
                  CurrencyAmount: '3.38',
                  CurrencyCode: 'USD'
                },
                Quantity: '1',
                SellerSKU: 'KL-BPYA-C1VH',
                ProductDescription: 'Shacke Metal Shoe Horn 7.5" inches - Double Sided Stainless\n                Steel (Silver)'
              }
            },
            AdjustmentType: 'REVERSAL_REIMBURSEMENT'
          }
        },
        PerformanceBondRefundEventList: null
      }
    },
    ResponseMetadata: {
      RequestId: 'c07d1dd2-12f9-415f-a167-8ab5f7726dbf'
    }
  },
  getServiceStatus: {
    GetServiceStatusResponse: {
      xmlns: 'http://mws.amazonservices.com/schema/Finances/2015-05-01',
      GetServiceStatusResult: { Status: 'GREEN', Timestamp: '2020-05-15T11:19:37.764Z' },
      ResponseMetadata: { RequestId: '4370bd2f-4018-4f77-be60-57f246f93c60' }
    }
  }
}
