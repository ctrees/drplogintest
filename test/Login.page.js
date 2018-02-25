class Login {
  get email () { return $('#username'); }
  get password () { return $('#password'); }
  get submit () { return $('input.btn.btn-primary.submitButton-customizable'); }

  get racknSupportLogoutinButton () { return $('#header > div:nth-child(4) > a > a > div > div.visible.content'); } 
  get racknCurrentUserButton () { return $('#header > div:nth-child(3) > div > div > div.text'); }
  get racknUserLogoutButton () { return $('#header > div:nth-child(3) > div > div > div.text'); }

  gotoRackNPortal (portalText) {
    var portalButtonElement = this.racknSupportLogoutinButton;
    var failMessage = "Waited 5s and did not see: " + portalText;
    console.log("Before Check: ", portalButtonElement.getText());
    /*
    browser.waitUntil(function() {
      return portalButtonElement.getText() == portalText
    }, 5000, failMessage );
    */
    console.log("After Check: ", portalButtonElement.getText());
  }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  logout (email, logoutbuttontext) {
    var logoutSupportButtonElement = this.racknSupportLogoutinButton;
    var logoutUserButtonElement = this.racknUserLogoutButton;

    browser.waitUntil(function() {
      return logoutButtonElement.getText() == logoutbuttontext
    }, 5000, 'expect text to be _Support & Logout_ after 5s');

    this.racknloginoutbutton.click();

    browser.waitUntil(function() {
      return logoutButtonElement.getText() == logoutbuttontext
    }, 5000, 'expect text to be _Support & Logout_ after 5s');

  }

  getCurrentUser () {
    var currentUserElement = this.racknCurrentUserButton;
  //  var returnText = currentUserElement.getText();
    var returnText = "Hello-getCurrentUser"
    return returnText;
  }

  isCurrentUser (email) {
    var currentUserElement = this.racknCurrentUserButton;
    console.log("Before Check: ", currentUserElement.getText());
    browser.waitUntil(function() {
      return currentUserElement.getText() == email
    }, 5000, 'expect text to be currentUser after 5s');
    console.log("After Check: ", currentUserElement.getText());
    return currentUserElement.getText() == email;
  }

  isLoggedIn () {
    var url = browser.getUrl();
    var sburl = 'https://rackn.github.io/provision-ux/#/user/login';
    return url == sburl;
  }

}

module.exports = Login;

