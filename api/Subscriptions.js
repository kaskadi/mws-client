const Section = require('./section.js')
class Subscriptions extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Subscriptions'
    this.Version = '2013-07-01'
  }
  registerDestination (opt) {
    opt.Action = 'RegisterDestination'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  deregisterDestination (opt) {
    opt.Action = 'DeregisterDestination'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  listRegisteredDestinations (opt) {
    opt.Action = 'ListRegisteredDestinations'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  sendTestNotificationToDestination (opt) {
    opt.Action = 'SendTestNotificationToDestination'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  createSubscription (opt) {
    opt.Action = 'CreateSubscription'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  getSubscription (opt) {
    opt.Action = 'GetSubscription'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  deleteSubscription (opt) {
    opt.Action = 'DeleteSubscription'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  listSubscriptions (opt) {
    opt.Action = 'ListSubscriptions'
    if (parent.mockUp) {
      // placeholder
      return undefined
    } else {
      return this.request(opt)
    }
  }
  updateSubscription (opt) {
    opt.Action = 'UpdateSubscription'
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
module.exports = parent => new Subscriptions(parent)
