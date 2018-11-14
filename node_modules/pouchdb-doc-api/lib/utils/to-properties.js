module.exports = toProperties

var isntProtectedProperty = require('./isnt-protected-property')

function toProperties (doc) {
  return Object.keys(doc)
    .filter(isntProtectedProperty)
    .reduce(function (properties, key) {
      properties[key] = doc[key]
      return properties
    }, {})
}
