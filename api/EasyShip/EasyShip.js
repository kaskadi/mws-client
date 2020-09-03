const Section = require('../section.js')
class EasyShip extends Section {
  constructor (parent) {
    super(parent)
    require('../create-section.js').bind(this)(require('./section-data.json'))
  }
}

module.exports = parent => new EasyShip(parent)
