# hoodie-zuul-config

> shared zuul configuration for Hoodie modules

[![Build Status](https://travis-ci.org/hoodiehq/hoodie-zuul-config.svg?branch=master)](https://travis-ci.org/hoodiehq/hoodie-zuul-config)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-zuul-config.svg)](https://david-dm.org/hoodiehq/hoodie-zuul-config)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-zuul-config/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-zuul-config#info=devDependencies)

## Usage

Add `hoodie-zuul-config` as dependency

```bash
npm install --save hoodie-zuul-config
```

Create a `zuul.config.js` file in the project root

```js
module.exports = require('hoodie-zuul-config')
```

Set custom settings or overwrite defaults:

```js
var zuulConfig = module.exports = require('hoodie-zuul-config')
zuulConfig.scripts = [
  './node_modules/pouchdb/dist/pouchdb.js'
]
```

## Local setup

```bash
git clone git@github.com:hoodiehq/hoodie-zuul-config.git
cd hoodie-zuul-config
npm install
npm test
```

## Contributing

Have a look at the Hoodie project's [contribution guidelines](https://github.com/hoodiehq/hoodie-dotfiles/blob/master/static/CONTRIBUTING.md).
For any questions, come to our [Hoodie chat](http://hood.ie/chat/), or ping us on Twitter [@hoodiehq](https://twitter.com/hoodiehq)

## License

[Apache-2.0](https://github.com/hoodiehq/hoodie/blob/master/LICENSE)
