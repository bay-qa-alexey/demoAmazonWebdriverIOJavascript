class SearchResultElement {
	constructor(index) {
		this.resultElement = $$('//ul[@id=\'s-results-list-atf\']/li')[index];
	}

	get name()	{return this.resultElement.$$('.//h2')[0].getText(0);}
	get price()	{return this.resultElement.$$('./div/div[@class=\'a-row a-spacing-mini\'][2]//span[@class=\'a-offscreen\']')[0].getAttribute("innerHTML").replace("$","");}
	get score()	{return this.resultElement.$$('./div/div[@class=\'a-row a-spacing-none\']//span[@class=\'a-icon-alt\']')[0].getAttribute("innerHTML").split(" ")[0];}
}

module.exports = SearchResultElement;