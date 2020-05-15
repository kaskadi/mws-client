const Section = require('./section.js')
class Reports extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Reports'
    this.Version = '2009-01-01'
  }

  requestReport (opt) {
    opt.Action = 'RequestReport'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportRequestList (opt) {
    opt.Action = 'GetReportRequestList'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportRequestCount (opt) {
    opt.Action = 'GetReportRequestCount'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  cancelReportRequests (opt) {
    opt.Action = 'CancelReportRequests'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportList (opt) {
    opt.Action = 'GetReportList'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportCount (opt) {
    opt.Action = 'GetReportCount'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReport (opt) {
    opt.Action = 'GetReport'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  manageReportSchedule (opt) {
    opt.Action = 'ManageReportSchedule'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportScheduleList (opt) {
    opt.Action = 'GetReportScheduleList'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  getReportScheduleCount (opt) {
    opt.Action = 'GetReportScheduleCount'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }

  updateReportAcknowledgements (opt) {
    opt.Action = 'UpdateReportAcknowledgements'
    if (this.parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
}
module.exports = parent => new Reports(parent)
