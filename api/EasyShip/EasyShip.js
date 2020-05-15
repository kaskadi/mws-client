const Section = require('../section.js')
class EasyShip extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'EasyShip'
    this.Version = '2018-09-01'
    require('../attach-methods.js').bind(this)(['listPickupSlots', 'createScheduledPackage', 'updateScheduledPackages', 'getScheduledPackage', 'getServiceStatus'])
  }
}

module.exports = parent => new EasyShip(parent)
