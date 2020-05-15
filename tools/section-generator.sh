#!/bin/bash
# This script automates the creation of a new section extended class
# await user input and store it to variables
read -p "Enter the section name: " sectionName
read -p "Enter the section version: " sectionVersion
read -p "Enter all the endpoints (separated by space): " -a endpoints
touch ../api/$sectionName.js
echo "const Section = require('./section.js')" >> ../api/$sectionName.js
echo "class $sectionName extends Section{" >> ../api/$sectionName.js
echo "  constructor(parent){
    super(parent)
    this._section = '$sectionName'
    this.Version = '$sectionVersion'
  }" >> ../api/$sectionName.js
# loop on endpoints to write their method into the class
for i in "${endpoints[@]}"
do
  # convert the endpoint name to its method name with 1st character being in lower case
  methodName=$i
  methodName="$(tr '[:upper:]' '[:lower:]' <<< ${methodName:0:1})${methodName:1}"
  if [ $methodName = "getServiceStatus" ]; then
    echo "  $methodName(opt){
    opt.Action  = '$i'
    return this.request(opt)
  }" >> ../api/$sectionName.js
  else
    echo "  $methodName(opt){
    opt.Action  = '$i'
    if (parent.mockUp) {
      // PLACE HERE INSTEAD OF UNDEFINED THE HARD CODED EXAMPLE RESPONSE AS JSON
      return undefined
    } else {
      return this.request(opt)
    }
  }" >> ../api/$sectionName.js
  fi
done
echo "}" >> ../api/$sectionName.js
echo "module.exports = parent => new $sectionName(parent)" >> ../api/$sectionName.js
