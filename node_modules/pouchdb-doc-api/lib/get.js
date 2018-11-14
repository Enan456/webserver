module.exports = get

var toProperties = require('./utils/to-properties')

function get (state) {
  return state.db.get(state.id)

  .then(function (doc) {
    state.rev = doc._rev

    return toProperties(doc)
  })

  .catch(function (error) {
    /* istanbul ignore next */
    if (error.status !== 404) {
      throw error
    }

    return {}
  })
}
