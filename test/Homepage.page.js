class Homepage {
	get browserTitle()	{return browser.getTitle();}
	get search() 		{return $('#twotabsearchtextbox');}
	get searchGo()		{return $('.nav-input[value="Go"]');}
	get plastic()		{return $('//div[@id=\'leftNavContainer\']//span[text()=\'Plastic\']');}
	get min()			{return $('#leftNavContainer form[method="get"] input#low-price[type="text"][name="low-price"]');}
	get max()			{return $('#leftNavContainer form[method="get"] input#high-price[type="text"][name="high-price"]');}
	get but()			{return $('#leftNavContainer form[method="get"] .a-button-input');}
	get signin()		{return $('#nav-link-accountList');}
}

module.exports = Homepage;