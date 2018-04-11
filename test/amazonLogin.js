// Amazon.com Login test scenario

var Homepage = require('./Homepage.page.js');
var homepage = new Homepage();

var Signin = require('./Signin.page.js');
var signin = new Signin();

var invalidEmail='qwerty @ rw';
var invalidPassword = 'qwerty';
var validEmail = process.env.EMAIL;
var validPassword = process.env.PASSWORD;

describe('Amazon login page', function(){

	beforeEach(function(){
		browser.url('./');
	})

	it('should error invalid email', function(){
		homepage.signin.click();
		expect(browser.getTitle()).to.equal('Amazon Sign In');
		expect(browser.getUrl()).to.contains('signin');

		signin.email.setValue(invalidEmail);
		signin.continue.click();
		expect(signin.error.isExisting()).to.be.true;
	})

		it('should error invalid password', function(){
		homepage.signin.click();
		expect(browser.getTitle()).to.equal('Amazon Sign In');
		expect(browser.getUrl()).to.contains('signin');

		signin.email.setValue(validEmail);
		signin.continue.click();
		expect(signin.error.isExisting()).to.be.false;

		signin.password.setValue(invalidPassword);
		signin.signin.click();
		expect(signin.error.isExisting()).to.be.true;
	})

		it('should Create your Amazon Account works', function(){
		homepage.signin.click();
		expect(browser.getTitle()).to.equal('Amazon Sign In');
		expect(browser.getUrl()).to.contains('signin');
		signin.createAccount.click();
		expect(browser.getTitle()).to.equals('Amazon Registration');
	})

})