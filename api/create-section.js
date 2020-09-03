module.exports = function (sectionData) {
  this._section = sectionData.name
  this.Version = sectionData.version
  require('./attach-methods.js').bind(this)(sectionData.methods)
}
