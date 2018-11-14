var simple = require('simple-mock')
var test = require('tape')

var unset = require('../../lib/unset')

test('unset() with state.rev set', function (t) {
  var state = {
    id: '_local/foo',
    rev: '0-2',
    db: {
      remove: simple.stub().resolveWith()
    }
  }

  unset(state)

  .then(function () {
    t.is(state.rev, undefined, 'unsets state.rev')
    t.end()
  })
})
