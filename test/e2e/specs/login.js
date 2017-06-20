// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'login e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    console.log(devServer)

    browser
      .url('http://localhost:8000/#/login')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.container')
      .assert.containsText('h1', 'Welcome to CrowdSourcing Platform')
      // .assert.elementCount('img', 1)
      .end()
  }
}
