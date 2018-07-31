load('init.js')
load('pages/LoginPage.js')

testOnAllDevices('Login page', '/', function (driver, device) {
  var loginPage = null

  logged('Checking error box', function () {
    loginPage = new LoginPage(driver)

    loginPage.loginAs('asdfghuygfc')

    checkLayout(driver, 'galen/specs/loginPage.gspec', device.tags)
  })
})