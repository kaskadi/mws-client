const Section = require('../section.js')
class Feeds extends Section {
  constructor (parent) {
    super(parent)
    this._section = 'Feeds'
    this.Version = '2009-01-01'
    require('../attach-methods.js').bind(this)(['submitFeed', 'getFeedSubmissionList', 'getFeedSubmissionCount', 'cancelFeedSubmissions', 'getFeedSubmissionResult'])
  }
}

module.exports = parent => new Feeds(parent)
