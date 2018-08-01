this.LoginPage = $page('Login page', {
  username: "input[name='usernameOrEmail']",
  loginButton: '.button.form-button.is-primary'
}, {
  errorMessage: '.form-input-validation.is-error',

  loginAs: function (user) {
    this.username.typeText(user)
    this.loginButton.click()
    this.errorMessage.waitToBeShown()
  }
})
