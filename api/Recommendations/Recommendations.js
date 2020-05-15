const Section = require('../section.js')
class Recommendations extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Recommendations'
    this.Version = '2013-04-01'
    require('../attach-methods.js').bind(this)(['getLastUpdatedTimeForRecommendations', 'listRecommendations', 'getServiceStatus'])
  }
}

module.exports = parent => new Recommendations(parent)
