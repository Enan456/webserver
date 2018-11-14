var PouchDB = require('pouchdb-core')
  .plugin(require('pouchdb-adapter-memory'))
var test = require('tape')

PouchDB.plugin(require('../..'))

test('store api', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('mydocid')

  store.get()

  .then(function (doc) {
    t.deepEqual(doc, {}, 'returns empty object if document does not exist')

    return store.set({foo: 'bar'})
  })

  .then(function (result) {
    t.deepEqual(result, {foo: 'bar'}, 'store.set resolves with properties')

    return store.get()
  })

  .then(function (doc) {
    t.deepEqual(doc, {foo: 'bar'}, 'store.get resolves with properties')

    return store.set({otherfoo: 'bar'})
  })

  .then(function () {
    return store.get()
  })

  .then(function (doc) {
    t.deepEqual(doc, {otherfoo: 'bar'}, 'store.set replaces properties')

    return store.unset()
  })

  .then(function (result) {
    t.is(result, undefined, 'store.unset resolves without arguments')

    return store.get()
  })

  .then(function (doc) {
    t.deepEqual(doc, {})
    t.end()
  })

  .catch(t.error)
})

test('find existing', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('existing')

  db.put({
    _id: 'existing',
    foo: 'bar'
  })

  .then(function () {
    return store.get()
  })

  .then(function (properties) {
    t.deepEqual(properties, {foo: 'bar'})
    t.end()
  })

  .catch(t.error)
})

test('handle set conflict', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('setconflictid')

  db.put({
    _id: 'setconflictid',
    foo: 'bar'
  })

  .then(function () {
    return store.set({newfoo: 'bar'})
  })

  .then(function (properties) {
    t.deepEqual(properties, {newfoo: 'bar'})
    t.end()
  })

  .catch(t.error)
})

test('handle unset not found', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('unsetunknown')

  return store.unset()

  .then(function (result) {
    t.is(result, undefined)
    t.end()
  })

  .then(function () {
    store.set({foo: 'bar'})
  })

  .then(function () {
    return db.get('unsetunknown')
  })

  .then(function (doc) {
    return db.remove('unsetunknown', doc._rev)
  })

  .then(function () {
    return store.unset()
  })

  .catch(t.error)
})

test('handle unset conflict', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('unsetconflictid')

  store.set({foo: 'bar'})

  .then(function () {
    return db.get('unsetconflictid')
  })

  .then(function (doc) {
    return db.put(doc)
  })

  .then(function () {
    return store.unset()
  })

  .then(function (result) {
    t.is(result, undefined)
    t.end()
  })

  .catch(t.error)
})
