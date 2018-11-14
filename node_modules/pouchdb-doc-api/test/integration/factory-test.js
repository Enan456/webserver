var PouchDB = require('pouchdb-core')
  .plugin(require('pouchdb-adapter-memory'))
var test = require('tape')

PouchDB.plugin(require('../..'))

test('db.doc(id)', function (t) {
  var db = new PouchDB('mydb')
  var store = db.doc('mydocid')

  t.is(typeof store.get, 'function', 'returns store.get API')
  t.is(typeof store.set, 'function', 'returns store.set API')
  t.is(typeof store.unset, 'function', 'returns store.unset API')
  t.end()
})

test('db.doc() without id', function (t) {
  var db = new PouchDB('mydb')

  t.throws(function () {
    db.doc()
  })

  t.end()
})
