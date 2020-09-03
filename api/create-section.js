const Section = require('./section.js')

module.exports = function ({ name, version, methods }, parent) {
  const section = new Section(parent)
  section._section = name
  section.Version = version
  const mockupData = require(`./${name}/mockup-data.json`)
  for (const method of methods) {
    section[method] = function (opt) {
      opt.Action = method.charAt(0).toUpperCase() + method.slice(1)
      return section.parent.mockUp ? mockupData[method] : section.request(opt)
    }
  }
  return section
}
