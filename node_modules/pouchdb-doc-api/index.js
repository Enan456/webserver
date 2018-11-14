module.exports = {
  doc: docApi
}

var get = require('./lib/get')
var set = require('./lib/set')
var unset = require('./lib/unset')

function docApi (id) {
  if (!id) {
    throw new Error('id must be set for db.doc(id)')
  }

  var state = {
    db: this,
    id: id,
    rev: undefined
  }

  return {
    get: get.bind(null, state),
    set: set.bind(null, state),
    unset: unset.bind(null, state)
  }
}
