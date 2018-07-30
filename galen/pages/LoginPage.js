this.LoginPage = $page('Login page', {
  username: "input[name='usernameOrEmail']",
  loginButton: '.button.form-button.is-primary'
}, {

  errorMessage: '.form-input-validation.is-error',

  loginAs: loggedFunction('Log in as ${_1.username}', function (user) {
    this.username.typeText(user.username)
    this.loginButton.click()
  })
})
