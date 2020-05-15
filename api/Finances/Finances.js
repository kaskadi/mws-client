const Section = require('../section.js')
class Finances extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Finances'
    this.Version = '2015-05-01'
    require('../attach-methods.js').bind(this)(['listFinancialEventGroups', 'listFinancialEvents', 'getServiceStatus'])
  }
}

module.exports = parent => new Finances(parent)
