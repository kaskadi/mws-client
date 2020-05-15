const Section = require('../section.js')
class Reports extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Reports'
    this.Version = '2009-01-01'
    require('../attach-methods.js').bind(this)(['requestReport', 'getReportRequestList', 'getReportRequestCount', 'cancelReportRequests', 'getReportList', 'getReportCount', 'getReport', 'manageReportSchedule', 'getReportScheduleList', 'getReportScheduleCount', 'updateReportAcknowledgements'])
  }
}

module.exports = parent => new Reports(parent)
