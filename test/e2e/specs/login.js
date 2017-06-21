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
      // 等待页面渲染
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.container')
      .assert.containsText('h1', 'Welcome to CrowdSourcing Platform')
      // 输入错误的用户名密码
      .setValue('input[type=text]', 'Wang')
      .setValue('input[type=password]', 'testtest')
      .pause(5000)
      .click('input[type=submit]')
      // 清空输入
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'Wang')
      // 输入正确的用户名密码
      .clearValue('input[type=password]')
      .setValue('input[type=password]', 'test')
      .pause(5000)
      .click('input[type=submit]')
      .pause(5000)
      // 点击登出
      .click('.user-info .el-dropdown')
      .pause(5000)
      .click('.el-dropdown-menu .el-dropdown-menu__item')
      .pause(3000)
      .end()
  }
}
