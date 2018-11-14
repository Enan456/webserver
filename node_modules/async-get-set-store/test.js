var test = require('tape')
var localstorage = require('humble-localstorage')

var Store = require('./index')

test('constructor', function (t) {
  var store = new Store('cache')

  t.is(typeof store.get, 'function', 'store.get is function')
  t.is(typeof store.set, 'function', 'store.set is function')
  t.is(typeof store.unset, 'function', 'store.unset is function')

  t.end()
})

test('store.get()', function (t) {
  localstorage.setObject('cache', {foo: 'bar'})
  var store = new Store('cache')

  store.get()
    .then(function (state) {
      t.deepEqual(state, {foo: 'bar'})
      t.end()
    })
    .catch(t.error)
})

test('store.get() without state', function (t) {
  localstorage.clear()
  var store = new Store('cache')

  store.get()
    .then(function (state) {
      t.deepEqual(state, {})
      t.end()
    })
    .catch(t.error)
})

test('store.set()', function (t) {
  localstorage.clear()
  var store = new Store('cache')

  store.set({foo: 'bar'})
    .then(function (state) {
      t.deepEqual(localstorage.getObject('cache'), {foo: 'bar'})
      t.end()
    })
    .catch(t.error)
})

test('store.set()', function (t) {
  localstorage.setObject('cache', {foo: 'bar'})
  var store = new Store('cache')

  store.unset()
    .then(function (state) {
      t.is(localstorage.getItem('cache'), null)
      t.end()
    })
    .catch(t.error)
})
