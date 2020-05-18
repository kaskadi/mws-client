module.exports = {
  requestReport: {
    RequestReportResult: {
      ReportRequestInfo: {
        ReportRequestId: '2291326454',
        ReportType: '_GET_MERCHANT_LISTINGS_DATA_',
        StartDate: '2009-01-21T02:10:39+00:00',
        EndDate: '2009-02-13T02:10:39+00:00',
        Scheduled: false,
        SubmittedDate: '2009-02-20T02:10:39+00:00',
        ReportProcessingStatus: '_SUBMITTED_'
      }
    },
    ResponseMetadata: {
      RequestId: '88faca76-b600-46d2-b53c-0c8c4533e43a'
    }
  },
  getReportRequestList: {
    GetReportRequestListResult: {
      NextToken: '2YgYW55IPQhcm5hbCBwbGVhc3VyZS4=',
      HasNext: true,
      ReportRequestInfo: {
        ReportRequestId: '2291326454',
        ReportType: '_GET_MERCHANT_LISTINGS_DATA_',
        StartDate: '2011-01-21T02:10:39+00:00',
        EndDate: '2011-02-13T02:10:39+00:00',
        Scheduled: false,
        SubmittedDate: '2011-02-17T23:44:09+00:00',
        ReportProcessingStatus: '_DONE_',
        GeneratedReportId: '3538561173',
        StartedProcessingDate: '2011-02-17T23:44:43+00:00',
        CompletedDate: '2011-02-17T23:44:48+00:00'
      }
    },
    ResponseMetadata: {
      RequestId: '732480cb-84a8-4c15-9084-a46bd9a0889b'
    }
  },
  getReportRequestCount: {
    GetReportRequestCountResult: {
      Count: '1276'
    },
    ResponseMetadata: {
      RequestId: '7e155027-3741-4422-95a7-1de12703c13e'
    }
  },
  cancelReportRequests: {
    CancelReportRequestsResult: {
      Count: '1',
      ReportRequestInfo: {
        ReportRequestId: '2291326454',
        ReportType: '_GET_MERCHANT_LISTINGS_DATA_',
        StartDate: '2009-01-21T02:10:39+00:00',
        EndDate: '2009-02-13T02:10:39+00:00',
        Scheduled: false,
        SubmittedDate: '2009-02-20T02:10:39+00:00',
        ReportProcessingStatus: '_CANCELLED_'
      }
    },
    ResponseMetadata: {
      RequestId: 'a720f9d6-83e9-4684-bc35-065b41ed5ca4'
    }
  },
  getReportList: {
    GetReportListResult: {
      NextToken: '2YgYW55IPQhvu5hbCBwbGVhc3VyZS4=',
      HasNext: true,
      ReportInfo: {
        ReportId: '898899473',
        ReportType: '_GET_MERCHANT_LISTINGS_DATA_',
        ReportRequestId: '2278662938',
        AvailableDate: '2009-02-10T09:22:33+00:00',
        Acknowledged: false
      }
    },
    ResponseMetadata: {
      RequestId: 'fbf677c1-dcee-4110-bc88-2ba3702e331b'
    }
  },
  getReportCount: {
    GetReportCountResult: {
      Count: '166'
    },
    ResponseMetadata: {
      RequestId: 'a497aadb-5ea1-49bf-aa14-dabe914465e3'
    }
  },
  getReport: `  order-id order-item-id purchase-date payments-date buyer-email 
  buyer-name buyer-phone-number sku product-name quantity-purchased 
  currency item-price item-tax shipping-price shipping-tax 
  ship-service-level recipient-name ship-address-1 ship-address-2 
  ship-address-3 ship-city ship-state ship-postal-code ship-country
  ship-phone-number delivery-start-date delivery-end-date 
  delivery-time-zone delivery-Instructions
103-26010-55904 394929210114 2011-02-09T02:46:57-08:00
2011-02-09T02:46:57-08:00 0g9lx423zn5@marketplace.amazon.com 
Joe Customer 404-555-1212 JW-RT1-HLD9 The Structure of Aikido: 
Volume 1: Kenjutsu and Taijutsu Sword and Open-Hand Movement 
Relationships (Structure of Aikido, Vol 1) 1 USD 19.49 0.00 3.99 
0.00 Standard Joe Customer 123 Main Street LAWRENCE CA 90044-2463 
US 404-555-1212`,
  manageReportSchedule: {
    ManageReportScheduleResult: {
      Count: '1',
      ReportSchedule: {
        ReportType: '_GET_ORDERS_DATA_',
        Schedule: '_30_DAYS_',
        ScheduledDate: '2009-02-20T02:10:42+00:00'
      }
    },
    ResponseMetadata: {
      RequestId: '7ee1bc50-5a13-4db1-afd7-1386e481984e'
    }
  },
  getReportScheduleList: {
    GetReportScheduleListResult: {
      NextToken: null,
      HasNext: false,
      ReportSchedule: {
        ReportType: '_GET_ORDERS_DATA_',
        Schedule: '_30_DAYS_',
        ScheduledDate: '2009-02-20T02:10:42+00:00'
      }
    },
    ResponseMetadata: {
      RequestId: 'c0464157-b74f-4e52-bd1a-4ebf4bc7e5aa'
    }
  },
  getReportScheduleCount: {
    GetReportScheduleCountResult: {
      Count: '18'
    },
    ResponseMetadata: {
      RequestId: '21e482a8-15c7-4da3-91a4-424995ed0756'
    }
  },
  updateReportAcknowledgements: {
    UpdateReportAcknowledgementsResult: {
      Count: '1',
      ReportInfo: {
        ReportId: '841997483',
        ReportType: '_GET_MERCHANT_LISTINGS_DATA_',
        ReportRequestId: '2234038326',
        AvailableDate: '2009-01-06T03:48:36+00:00',
        Acknowledged: true,
        AcknowledgedDate: '2009-02-20T02:10:41+00:00'
      }
    },
    ResponseMetadata: {
      RequestId: '42a578a7-ed92-486b-ac67-5de7464fcdfa'
    }
  }
}
