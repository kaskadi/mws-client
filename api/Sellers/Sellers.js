const Section = require('../section.js')
class Sellers extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Sellers'
    this.Version = '2011-07-01'
    require('../attach-methods.js').bind(this)(['listMarketplaceParticipations', 'getServiceStatus'])
  }
}

module.exports = parent => new Sellers(parent)
