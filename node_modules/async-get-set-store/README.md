# async-get-set-store

> async get/set/unset API for one object using localStorage

[![Build Status](https://travis-ci.org/gr2m/async-get-set-store.svg?branch=master)](https://travis-ci.org/gr2m/async-get-set-store)
[![Coverage Status](https://coveralls.io/repos/gr2m/async-get-set-store/badge.svg?branch=master)](https://coveralls.io/github/gr2m/async-get-set-store?branch=master)
[![Dependency Status](https://david-dm.org/gr2m/async-get-set-store.svg)](https://david-dm.org/gr2m/async-get-set-store)
[![devDependency Status](https://david-dm.org/gr2m/async-get-set-store/dev-status.svg)](https://david-dm.org/gr2m/async-get-set-store#info=devDependencies)

## Usage

```js
const LocalStorageStore = require('async-get-set-store')
const store = new LocalStorageStore('cache')

// load state
store.cache.get().then(function (state) {})
// set state
store.cache.set({username: 'pat'}).then(function () {})
// clear state
store.cache.unset().then(function () {})
```

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
