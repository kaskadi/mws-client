const Section = require('../section.js')
class Subscriptions extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Subscriptions'
    this.Version = '2013-07-01'
    require('../attach-methods.js').bind(this)(['registerDestination', 'deregisterDestination', 'listRegisteredDestinations', 'sendTestNotificationToDestination', 'createSubscription', 'getSubscription', 'deleteSubscription', 'listSubscriptions', 'updateSubscription', 'getServiceStatus'])
  }
}

module.exports = parent => new Subscriptions(parent)
