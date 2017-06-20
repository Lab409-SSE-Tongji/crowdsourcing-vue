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
      .setValue('input[type=text]', 'Wang')
      .setValue('input[type=password]', 'testtest')
      .click('input[type=submit]')
      .pause(1000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'Wang')
      .clearValue('input[type=password]')
      .setValue('input[type=password]', 'test')
      .click('input[type=submit]')
      .pause(2000)
      .click('.user-info .el-dropdown')
      .pause(2000)
      .click('.el-dropdown-menu .el-dropdown-menu__item')
      .pause(2000)
      .end()
  }
}
