// This script automates the creation of a new section extended class
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const fs = require('fs')
const path = require('path')

rl.question('Enter the section name: ', function (section) {
  rl.question('Enter the section version: ', function (version) {
    rl.question('Enter all the endpoints (separated by space): ', function (endpoints) {
      processInputs(section, version, endpoints)
      rl.close()
    })
  })
})

function processInputs (section, version, endpoints) {
  const dirPath = getDirPath(section)
  fs.mkdirSync(dirPath)
  endpoints = endpoints.split(' ').map(endpoint => endpoint.charAt(0).toLowerCase() + endpoint.slice(1))
  const { sectionData, mockupData } = getData(section, version, endpoints)
  fs.writeFileSync(path.join(dirPath, 'mockup-data.json'), JSON.stringify(mockupData, null, 2), 'utf8')
  fs.writeFileSync(path.join(dirPath, 'section-data.json'), JSON.stringify(sectionData, null, 2), 'utf8')
}

function getDirPath (section) {
  let pathParts = []
  if (path.basename === 'tools') {
    pathParts.push('..')
  }
  pathParts = [...pathParts, ...['api', section]]
  return path.join(...pathParts)
}

function getData (section, version, endpoints) {
  const sectionData = {
    name: section,
    version,
    methods: endpoints
  }
  const mockupData = Object.fromEntries(endpoints.map(endpoint => [endpoint, {}]))
  return { sectionData, mockupData }
}
