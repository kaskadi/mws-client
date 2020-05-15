// This script automates the creation of a new section extended class
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter the section name: ', function (section) {
  rl.question('Enter the section version: ', function (version) {
    rl.question('Enter all the endpoints (separated by space): ', function (endpoints) {
      processInputs(section, version, endpoints)
      rl.close()
    })
  })
})

function processInputs (section, version, endpoints) {
  const fs = require('fs')
  const path = require('path')
  const dirPath = path.join('..', 'api', section)
  fs.mkdirSync(dirPath)
  fs.writeFileSync(path.join(dirPath, 'mockup-data.js'), getMockupData(endpoints), 'utf8')
  fs.writeFileSync(path.join(dirPath, `${section}.js`), getHandler(section, version, endpoints), 'utf8')
}

function getMockupData (endpoints) {
  return `module.exports = {
${endpoints.split(' ').map((endpoint, i, arr) => i !== arr.length - 1 ? `  ${endpoint}: {},\n` : `  ${endpoint}: {}`).join('')}
}\n`
}

function getHandler (section, version, endpoints) {
  return `const Section = require('../section.js')
class ${section} extends Section {
  constructor (parent) {
    super(parent)
    this._section = '${section}'
    this.Version = '${version}'
    require('../attach-methods.js').bind(this)([${endpoints.split(' ').map(endpoint => `'${endpoint}'`).join(', ')}])
  }
}

module.exports = parent => new ${section}(parent)\n`
}
