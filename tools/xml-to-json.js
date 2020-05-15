const parser = require('xml2json')

const xmlToJson = function (xml) {
  console.log(parser.toJson(xml))
}
// use the command line argument as input XML
xmlToJson(process.argv[2])
