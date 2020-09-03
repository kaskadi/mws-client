const Section = require('../section.js')
class Finances extends Section {
  constructor (parent) {
    super(parent)
    require('../create-section.js').bind(this)(require('./section-data.json'))
  }
}

module.exports = parent => new Finances(parent)
