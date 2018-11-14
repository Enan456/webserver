module.exports = LocalStorageStore

var localStorageWrapper = require('humble-localstorage')

function LocalStorageStore (key) {
  return {
    get: function get () {
      return Promise.resolve(localStorageWrapper.getObject(key) || {})
    },
    set: function set (account) {
      localStorageWrapper.setObject(key, account)
      return Promise.resolve()
    },
    unset: function unset () {
      localStorageWrapper.removeItem(key)
      return Promise.resolve()
    }
  }
}
