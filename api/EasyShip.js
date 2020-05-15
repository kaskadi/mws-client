const Section = require('./section.js')
class EasyShip extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'EasyShip'
    this.Version = '2018-09-01'
  }
  listPickupSlots (opt) {
    opt.Action = 'ListPickupSlots'
    if (parent.mockUp) {
      return {
        ListPickupSlotsResponse: {
          xmlns: "http://mws.amazonaws.in/EasyShip/2018-09-01",
          ListPickupSlotsResult: {
            AmazonOrderId: "903-1713775-3598252",
            PickupSlotList: {
              PickupSlot: [
                {
                  SlotId: "Xyt123bbdg=",
                  PickupTimeStart: "2018-11-05T14:00:00.50+05:30",
                  PickupTimeEnd: "2018-11-05T16:00:00.50+05:30"
                },
                {
                  SlotId: "Byvjdhsdb=",
                  PickupTimeStart: "2018-11-05T10:00:00.50+05:30",
                  PickupTimeEnd:b"2018-11-05T13:59:00.50+05:30"
                }
              ]
            }
          },
          ResponseMetadata: {
            RequestId: "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  createScheduledPackage (opt) {
    opt.Action = 'CreateScheduledPackage'
    if (parent.mockUp) {
      return {
        CreateScheduledPackageResponse: {
          xmlns: "http://mws.amazonaws.in/EasyShip/2018-09-01",
          CreateScheduledPackageResult: {
            ScheduledPackage: {
              ScheduledPackageId: {
                AmazonOrderId:"903-1713775-3598252",
                PackageId: "1ab0f06a-9149-87e0-aba9-7098117872d6"
              },
              PackageDimensions: {
                Length: 12.00,
                Width: 12.00,
                Height: 12.00,
                Unit: "cm"
              },
              PackageWeight: {
                Unit: "g",
                Value: 23.00
              },
              PackagePickupSlot: {
                SlotId: "Xyt123bbdg=",
                PickupTimeStart: "2018-02-19T14:00:00.50+05:30",
                PickupTimeEnd: "2018-02-19T16:00:00.50+05:30"
              },
              PackageStatus: "ReadyForPickup"
            }
          },
          ResponseMetadata: {
            RequestId: "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  updateScheduledPackages (opt) {
    opt.Action = 'UpdateScheduledPackages'
    if (parent.mockUp) {
      return {
        UpdateScheduledPackagesResponse: {
          xmlns: "http://mws.amazonaws.in/Scheduling/2018-09-01",
          UpdateScheduledPackagesResult: {
            ScheduledPackageList: {
              Package: {
                ScheduledPackageId: {
                  AmazonOrderId: "903-1713775-3598252",
                  PackageId: "1ab0f06a-9149-87e0-aba9-7098117872d6"
                },
                PackageDimensions: {
                  Length: 12.00,
                  Width: 12.00,
                  Height: 12.00,
                  Unit: "cm"
                },
                PackageWeight: {
                  Unit:"g",
                  Value:23.00
                },
                PackagePickupSlot: {
                  SlotId: "Xyt123bbdg=",
                  PickupTimeStart: "2018-11-05T14:00:00.50+05:30",
                  PickupTimeEnd: "2018-11-05T16:00:00.50+05:30"
                },
                PackageStatus: "Scheduled"
              }
            }
          },
          ResponseMetadata: {
            RequestId: "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
          }
        }
      }
    } else {
      return this.request(opt)
    }
  }
  getScheduledPackage (opt) {
    opt.Action = 'GetScheduledPackage'
    if (parent.mockUp) {
      return {
        GetScheduledPackageResponse: {
          xmlns: "http://mws.amazonaws.in/EasyShip/2018-09-01",
          GetScheduledPackageResult: {
            ScheduledPackage: {
              ScheduledPackageId: {
                AmazonOrderId: "903-1713775-3598252",
                PackageId: "1ab0f06a-9149-87e0-aba9-7098117872d6"
              },
              PackageDimensions: {
                Length: 12.00,
                Width: 12.00,
                Height: 12.00,
                Unit:"cm"
              },
              PackageWeight: {
                Unit: "g",
                Value: 23.00
              },
              PackagePickupSlot: {
                SlotId: "Xyt123bbdg=",
                PickupTimeStart: "2018-02-19T14:00:00.50+05:30",
                PickupTimeEnd: "2018-02-19T16:00:00.50+05:30"
              },
              PackageStatus: "Scheduled"
            }
          },
          ResponseMetadata: {
            RequestId: "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
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
module.exports = parent => new EasyShip(parent)
