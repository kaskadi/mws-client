class Section {
  constructor (parent) {
    this.parent = parent
  }

  request (opt) {
    opt._section = this._section
    opt.Version = this.Version
    return this.parent.request(opt)
  }
}
module.exports = Section
