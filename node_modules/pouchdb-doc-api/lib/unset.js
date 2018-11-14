module.exports = unset

function unset (state) {
  if (!state.rev) {
    return state.db.get(state.id)

    .then(function (doc) {
      state.rev = doc._rev

      return unset(state)
    })

    .catch(function (error) {
      /* istanbul ignore next */
      if (error.status !== 404) {
        throw error
      }
    })
  }

  return state.db.remove(state.id, state.rev)

  .then(function () {
    delete state.rev
  })

  .catch(function () {
    delete state.rev

    return unset(state)
  })
}
