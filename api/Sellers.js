const Section = require('./section.js')
class Sellers extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Sellers'
    this.Version = '2011-07-01'
  }
  listMarketplaceParticipations (opt) {
    opt.Action = 'ListMarketplaceParticipations'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getServiceStatus (opt) {
    opt.Action = 'GetServiceStatus'
    return this.request(opt)
  }
}
module.exports = parent => new Sellers(parent)
