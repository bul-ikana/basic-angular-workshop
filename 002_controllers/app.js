(function(){
	var app = angular.module("store", []);

	app.controller("StoreController", function(){
		this.product = article;
	});

	var article = {
		name: 'shoes',
		price: 499.99,
		description: "Zapato deportivo",
	}

})();