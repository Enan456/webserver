var test = require('tape')
var zuulConfig = require('../')

test('zuul config keys', function (t) {
  t.deepEqual(Object.keys(zuulConfig).sort(), [
    'browser_open_timeout',
    'browser_output_timeout',
    'browser_retries',
    'browsers',
    'concurrency',
    'ui'
  ], 'no new keys added')
  t.end()
})

test('zuul config values', function (t) {
  t.is(zuulConfig.ui, 'tape', 'zuul.ui is "tape"')
  t.is(zuulConfig.browser_output_timeout, 60000, 'zuulConfig.browser_output_timeout is 60000')
  t.is(zuulConfig.browser_open_timeout, 240000, 'zuulConfig.browser_open_timeout is 240000')
  t.is(zuulConfig.browser_retries, 0, 'zuulConfig.browser_retries is 0')
  t.is(zuulConfig.concurrency, 5, 'zuulConfig.concurrency is 5')
  t.end()
})

test('zuul browsers', function (t) {
  t.is(zuulConfig.browsers.length, 1, 'settings for 7 browsers')

  var chrome = browserSettingFor(zuulConfig, 'chrome')
  t.is(Object.keys(chrome).length, 1, '1 setting for browsers.chrome')
  t.is(chrome.version, 'latest', 'Test in latest two versions')

  // TODO: https://github.com/hoodiehq/hoodie-zuul-config/issues/1
  // var chrome = browserSettingFor(zuulConfig, 'chrome')
  // t.is(Object.keys(chrome).length, 2, '2 settings for browsers.chrome')
  // t.is(chrome.version, '-1..latest', 'Test in latest two versions')
  // t.is(chrome.platform, 'Windows 10', 'Test in Windows 10')
  //
  // var firefox = browserSettingFor(zuulConfig, 'firefox')
  // t.is(Object.keys(firefox).length, 2, '2 settings for browsers.firefox')
  // t.is(firefox.version, '-1..latest', 'Test in latest two versions')
  // t.is(firefox.platform, 'Windows 10', 'Test in Windows 10')
  //
  // var edge = browserSettingFor(zuulConfig, 'microsoftedge')
  // t.is(Object.keys(edge).length, 1, '1 setting for browsers.microsoftedge')
  // t.is(edge.version, 'latest', 'Test in latest version')
  //
  // var ie = browserSettingFor(zuulConfig, 'internet explorer')
  // t.is(Object.keys(ie).length, 1, '1 setting for browsers["internet explorer"]')
  // t.is(ie.version, '11', 'Test in Version 11')
  //
  // var safari = browserSettingFor(zuulConfig, 'safari')
  // t.is(Object.keys(safari).length, 1, '1 setting for browsers.safari')
  // t.is(safari.version, '-2..latest', 'Test in latest three versions')
  //
  // var iPhone = browserSettingFor(zuulConfig, 'iphone')
  // t.is(Object.keys(iPhone).length, 1, '1 setting for browsers.iphone')
  // t.is(iPhone.version, '-2..latest', 'Test in latest three versions')
  //
  // var android = browserSettingFor(zuulConfig, 'android')
  // t.is(Object.keys(android).length, 1, '1 setting for browsers.android')
  // t.deepEqual(android.version, ['4.4', '-1..latest'], 'Test in 4.4 and latest two versions')

  t.end()
})

function browserSettingFor (config, browserName) {
  return config.browsers.filter(function (settings) {
    if (settings.name !== browserName) return

    delete settings.name
    return settings
  }).filter(Boolean)[0]
}
