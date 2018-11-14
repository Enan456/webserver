# pouchdb-doc-api

> PouchDB plugin for a document-bound API

[![Build Status](https://travis-ci.org/gr2m/pouchdb-doc-api.svg?branch=master)](https://travis-ci.org/gr2m/pouchdb-doc-api)
[![Coverage Status](https://coveralls.io/repos/gr2m/pouchdb-doc-api/badge.svg?branch=master)](https://coveralls.io/r/gr2m/pouchdb-doc-api?branch=master)
[![Dependency Status](https://david-dm.org/gr2m/pouchdb-doc-api.svg)](https://david-dm.org/gr2m/pouchdb-doc-api)
[![devDependency Status](https://david-dm.org/gr2m/pouchdb-doc-api/dev-status.svg)](https://david-dm.org/gr2m/pouchdb-doc-api#info=devDependencies)

## Usage

```js
var db = new PouchDB('mydb')

var docId = 'mydocid' // can be any valid do id
var api = db.doc(docId)

// creates or replaces existing document with _id: mydocid
api.set({foo: 'bar'})

.then(() => {
  // loads document with _id: mydocid
  return api.get()
})

.then((doc) => {
  // removes document with _id: mydocid
  return api.unset()
})
```

## 🔏📃 Security notice

In case you want to store sensitive data, be aware that PouchDB does not remove
data but creates new revisions. The older revisions remain accessible.

The only exception to this are [local documents](http://docs.couchdb.org/en/2.0.0/api/local.html)
with an docId prefixed by `_local/`. So say you want to store an API key or
session ID using `pouchdb-doc-api`, I strongly recommend to us a docId like
`_local/session`. Full usage example

```js
var db = new PouchDB('mydb')
var api = db.doc('_local/session')
```

`api.set` and `api.unset` will no remove previously stored data without leaving
revisions that could be recovered.

## API

- [Factory](#factory)
- [store.get()](#storeget)
- [store.set()](#storeset)
- [store.unset](#storeunset)

### Factory

Returns the store API bound to the document with the passed id

```js
db.doc(id)
```

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tr>
    <th align="left"><code>id</code></th>
    <td>String</td>
    <td>ID of the document the store API should be bound to.</td>
    <td>Yes</td>
  </tr>
</table>

Example

```js
var db = new PouchDB('mydb')
var store = db.doc('mydocid')
```

### store.get()

Resolves with the document properties, without the `_id` and `_rev` properties.

```js
store.get().then((properties) => {})
```

### store.set()

Replaces all current document properties with the once passed. `_id` and `_rev`
properties are ignored. Resolves with the document properties.

```js
store.set({foo: 'bar'}).then((properties) => {})
```

### store.unset()

Removes document from the database using PouchDB’s [`db.remove()`](https://pouchdb.com/api.html#delete_document)
method. Resolves without arguments.

```js
store.unset().then(() => {})
```

## Similar projects

- [PouchDB Upsert](https://github.com/pouchdb/upsert)

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
