// find available options at:
// https://github.com/defunctzombie/zuul/blob/6d6c137ded64df5463ff56ba01dca9d6196cbbec/bin/zuul#L42-L58
module.exports = {
  ui: 'tape',

  // number of concurrent browsers to test
  // (only used when run with saucelabs)
  concurrency: 5,

  // how much time to wait between two test results, default to -1 (no timeout)
  browser_output_timeout: 60 * 1000,

  // how much time to wait for browser to start.
  // This config was added because some browsers take a long time on suacelabs
  browser_open_timeout: 60 * 4 * 1000,

  // we want to be notified something is wrong asap, so no retry
  browser_retries: 0,

  browsers: [
    {
      name: 'chrome',
      version: 'latest'
    }

    // TODO: https://github.com/hoodiehq/hoodie-zuul-config/issues/1
    // {
    //   name: 'chrome',
    //   version: '-1..latest',
    //   platform: 'Windows 10'
    // },
    // {
    //   name: 'firefox',
    //   version: '-1..latest',
    //   platform: 'Windows 10'
    // },
    // {
    //   name: 'microsoftedge',
    //   version: 'latest'
    // },
    // {
    //   name: 'internet explorer',
    //   version: '11'
    // },
    // {
    //   name: 'safari',
    //   version: '-2..latest'
    // },
    // {
    //   name: 'iphone',
    //   version: '-2..latest'
    // },
    // {
    //   name: 'android',
    //   version: ['4.4', '-1..latest']
    // }
  ]
}
