(function(){
	var app = angular.module("store", []);

	app.controller("StoreController", function(){
		this.products = articles;
	});

	var articles = [
		{
			name: 'Shoes',
			price: 499.99,
			description: "Zapato deportivo",
			canPurchase: false,
			soldOut: false,
		},
		{
			name: 'Green Pants',
			price: 199.99,
			description: "Pantalon verde",
			canPurchase: true,
			soldOut: false,
		},
	]

})();