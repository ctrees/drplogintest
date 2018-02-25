const Login = require('./Login.page.js');
const login = new Login();

//-BEGIN promise rejection hacks
//-via http://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html
//const obj = { fn: () => {} };

//-via https://github.com/mochajs/mocha/issues/2640
let unhandledRejectionExitCode = 0;

process.on("unhandledRejection", (reason) => {
	console.log("unhandled rejection:", reason);
	unhandledRejectionExitCode = 1;
	throw reason;
});

process.prependListener("exit", (code) => {
	if (code === 0) {
		process.exit(unhandledRejectionExitCode);
	}
});
//-END promise rejection hacks

describe('Login Page', function () {
  const validEmail = 'test@horseoff.com';
  const validPass = 'GoodUser1';
  const loginText = 'RackN Portal Login'
  const logoutText = 'Logout & Support';

  beforeEach(function() {

    var racknloginbutton = '#header > div:nth-child(4) > a > a > div.visible.content';
    var expectedLoginText = 'RackN Portal Login';
    // Go to baseurl from wdio.conf.js
    browser.url('./');
    //login.gotoRackNPortal(expectedLoginText);
    // Click the racknlogin button to pick up a token
    browser.click(racknloginbutton);
    // Now we can use login page object Login.page.js
    //- Some debugging aids
    //browser.debug();
    //browser.pause(10000);
  });

  afterEach(function() {

    var currentUserText = login.getCurrentUser();
    console.log('afterEach');
    console.log(currentUserText);
    //expect(login.isCurrentUser(validEmail), 'Valid User logged on').to.be.true;
    //login.logout(validEmail, logoutText);
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
