var Homepage = require('./Homepage.page.js');
var SearchResultElement = require('./Homepage.SearchResultElement.page.js');
var homepage = new Homepage();

describe('Amazon homepage', function() {

	beforeEach(function(){
		browser.url('./');
	})

	it('should have correct title', function() {
        homepage.browserTitle.should.equal('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
	})

    it('should do search', function() {
		homepage.search.setValue('ipad air 2 case');
		homepage.searchGo.click();

    	browser.waitUntil(function () {
    	  return homepage.plastic.isVisible() && homepage.min.isVisible() && homepage.max.isVisible() && homepage.but.isVisible()
    	}, 5000, 'Error: waitUntil 1');

		homepage.plastic.click();

    	browser.waitUntil(function () {
    	  return homepage.plastic.isVisible() && homepage.min.isVisible() && homepage.max.isVisible() && homepage.but.isVisible()
    	}, 5000, 'Error: waitUntil 1');

		homepage.min.setValue(20);
		homepage.max.setValue(100);
		homepage.but.click();

		var resultData = [];

		for(var i=0;i<5;i++) {
			var searchResultElement = new SearchResultElement(i);
			var tmpData = [];
			tmpData.push(i);
			tmpData.push(searchResultElement.name);
			tmpData.push(searchResultElement.price);
			tmpData.push(searchResultElement.score);
			resultData.push(tmpData);
		}


		// 5
		console.log("\n5 (Raw data):");
		resultData.forEach(function(elem){
			console.log("%s|%s|%s", elem[2],elem[3],elem[1]);
		});

		// 6
		resultData.forEach(function(elem){
				assert.equal(elem[2] >=20 && elem[2]<=100 , true);
			});


		// 7
		console.log("\n7 (Sort by Price):");
		resultData.sort(function(elem1, elem2){
			return (elem1[2] <= elem2[2])? -1:1;
		});
		resultData.forEach(function(elem){
			console.log("%s|%s|%s", elem[2],elem[3],elem[1]);
		});

		// 8
		console.log("\n8 (Sort by Score):");
		resultData.sort(function(elem1, elem2){
			return (elem1[3] <= elem2[3])? -1:1;
		});
		resultData.forEach(function(elem){
			console.log("%s|%s|%s", elem[2],elem[3],elem[1]);
		});

		// 9
		resultData.sort(function(elem1, elem2){
			return (elem1[2] <= elem2[2])? -1:1;
		});
		for(var i=0;i<resultData.length-1;i++){
			assert.equal( resultData[i][2] <= resultData[i+1][2], true);
		};


    });
});