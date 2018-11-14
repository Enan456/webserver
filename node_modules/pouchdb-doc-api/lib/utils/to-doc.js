module.exports = toDoc

function toDoc (properties, options) {
  var doc = Object.keys(properties).reduce(function (doc, key) {
    doc[key] = properties[key]
    return doc
  }, {})

  doc._id = options.id
  doc._rev = options.rev

  return doc
}
