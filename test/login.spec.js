const Login = require('./Login.page.js');

const login = new Login();


describe('Login Page', function () {
  const validEmail = 'test@horseoff.com';
  const validPass = 'GoodUser1';

  beforeEach(function() {
    var racknloginbutton = '#header > div:nth-child(4) > a > a > div.visible.content';
    // Go to baseurl from wdio.conf.js
    browser.url('./');
    // Click the racknlogin button to pick up a token
    browser.click(racknloginbutton);
    // Now we can use login page object Login.page.js

    //browser.debug();
  });

  it('should maintain a consistant Login portal', function () {
    // checkDocument is a visual regression test check
    // http://webdriver.io/guide/services/visual-regression.html#Usage
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  })
  
  it('should let you login with valid credentials', function () {
    login.login(validEmail, validPass);

    expect(login.isCurrentUser(validEmail), 'Valid User logged on').to.be.true;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });
  /*
  it('should error on a missing email', function () {
    login.login('', validPass);

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on a invalid email', function () {
    login.login('gobbledegook', validPass);

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on missing password', function () {
    login.login(validEmail, '');

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });
  */
})
