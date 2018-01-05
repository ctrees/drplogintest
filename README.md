# drplogintest
drp ux login test

WebdriverIO test scripts Visual Regression Testing.

## Installation

```
npm install
```

## Usage

```
npm test
```

### Folder Structure

Tests and page objects go in the `test\` folder.

Name tests with a `.spec.js` extension. For example: `login.spec.js`

Name Page Object files with a `.page.js` extention.  For example: `Login.page.js`

Visual regression screenshots will be saved to the `screenshots` folder.

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, allowing you to run [the `debug` command](https://www.youtube.com/watch?v=xWwP-3B_YyE&lc=z12gw1vqpu2sunjeq222hrsxstf3glohh04) without your tests timing out. 

`DEBUG=true npm test`
