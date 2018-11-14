module.exports = set

var toDoc = require('./utils/to-doc')

function set (state, properties) {
  var doc = toDoc(properties, {
    id: state.id,
    rev: state.rev
  })

  return state.db.put(doc)

  .then(function (result) {
    state.rev = result.rev

    return properties
  })

  .catch(function (error) {
    /* istanbul ignore next */
    if (error.status !== 409) {
      throw error
    }

    return state.db.get(state.id)

    .then(function (doc) {
      state.rev = doc._rev

      return set(state, properties)
    })
  })
}
