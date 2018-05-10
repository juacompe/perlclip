module.exports = {
  'about page tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .useCss()
      .click('.mdl-layout__drawer-button i')
      .click('.mdl-layout__drawer a:nth-child(2)')
      .waitForElementVisible('.about', 5000)
      .assert.elementCount('img', 1)
      .end()
  }
}
