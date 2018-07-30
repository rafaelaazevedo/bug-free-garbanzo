load('init.js')
load('pages/LoginPage.js')

testOnAllDevices('Login page', '/', function (driver, device) {
  var loginPage = null

  logged('Checking error box', function () {
    loginPage = new LoginPage(driver).waitForIt()

    loginPage.username.typeText('djtfdtfd')
    loginPage.loginButton.click()
    loginPage.errorMessage.waitToBeShown()

    checkLayout(driver, 'specs/loginErrorPage.gspec', device.tags)
  })
})
