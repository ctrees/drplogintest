class Login {
  get email () { return $('#username'); }
  get password () { return $('#password'); }
  get submit () { return $('input.btn.btn-primary.submitButton-customizable'); }
  
  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isCurrentUser (email) {
    var currentUser;

    // Wait around for Fancy Floaty iconly jasony fetchy poo to settle down
    browser.waitUntil(function() {
      return browser.getText('#header > div:nth-child(3) > div > div > div.text') === email
    }, 5000, 'expect text to be currentUser after 5s');
    
    currentUser = browser.getText('#header > div:nth-child(3) > div > div > div.text');
    return currentUser == email;
  }

  isLoggedIn () {
    var url = browser.getUrl();
    var sburl = 'https://rackn.github.io/provision-ux/#/user/login';
    return url == sburl;
  }

}

module.exports = Login;

