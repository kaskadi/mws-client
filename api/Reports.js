const Section = require('./section.js')
class Reports extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Reports'
    this.Version = '2009-01-01'
  }
  requestReport (opt) {
    opt.Action = 'RequestReport'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportRequestList (opt) {
    opt.Action = 'GetReportRequestList'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportRequestCount (opt) {
    opt.Action = 'GetReportRequestCount'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  cancelReportRequests (opt) {
    opt.Action = 'CancelReportRequests'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportList (opt) {
    opt.Action = 'GetReportList'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportCount (opt) {
    opt.Action = 'GetReportCount'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReport (opt) {
    opt.Action = 'GetReport'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  manageReportSchedule (opt) {
    opt.Action = 'ManageReportSchedule'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportScheduleList (opt) {
    opt.Action = 'GetReportScheduleList'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getReportScheduleCount (opt) {
    opt.Action = 'GetReportScheduleCount'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  updateReportAcknowledgements (opt) {
    opt.Action = 'UpdateReportAcknowledgements'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
}
module.exports = parent => new Reports(parent)
