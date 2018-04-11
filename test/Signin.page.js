class Signin {
	get email() {return $('input#ap_email');}
	get continue() {return $('input#continue');}
	get createAccount() {return $('span#auth-create-account-link');}
	get password() {return $('input#ap_password');}
	get signin() {return $('input#signInSubmit');}
	get error() {return $('div#auth-error-message-box');}
	get signoutlink() {return $('a#nav-item-signout-sa');}

	signout() {
		browser.moveToObject('a#nav-link-accountList');
		this.signoutlink.click();
	}
}

module.exports = Signin;