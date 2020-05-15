module.exports = function (methods) {
  const mockupData = require(`./${this._section}/mockup-data.js`)
  for (const method of methods) {
    this[method] = function (opt) {
      opt.Action = method.charAt(0).toUpperCase() + method.slice(1)
      return this.parent.mockUp ? mockupData[method] : this.request(opt)
    }
  }
}
