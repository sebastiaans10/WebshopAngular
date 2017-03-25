//var module = angular.module('winkelwagen', []);
shopApp.controller('winkelwagenController', ['winkelwagenService', 'productService', 'klantService', '$scope', '$location',
function(winkelwagenService, productService, klantService, $scope, $location){
	$scope.winkelitems = winkelwagenService.getWinkelItems();
	var products = productService.getProducten();

	updateProduct = function(product) {
			console.log(product);
			var newItem = productService.updateVoorraadPositive(product);
			newItem.updating = false;
			productService.updateProduct(newItem, function callback(data) {
					products = data;
			});
	};

	getProduct = function(winkelitem){
		var id = winkelitem.pID;
		var product = productService.getProduct(id);
		return product;
	};

	$scope.deleteWinkelItem = function (winkelitem) {
		console.log(winkelitem.pID);
			var product = getProduct(winkelitem);

			updateProduct(product);

						winkelwagenService.deleteWinkelItem(winkelitem, function callback(data){
					$scope.winkelitems = data;
			});
	};

}]);

/*
angular.module('shopApp').controller('winkelwagenController', function($scope){

var localwinkelitems = JSON.parse(localStorage.getItem("winkelitems"));

$scope.winkelitems = localwinkelitems;


$scope.deleteWinkelItem = function(winkelitem) {

		var deleteIndex = -1;
		$scope.winkelitems.forEach(function(e, i) {
			if(e.id === winkelitem.id) {
				deleteIndex = i;
			}
		});

		$scope.winkelitems.splice(deleteIndex, 1);

		localStorage.setItem("winkelitems", JSON.stringify($scope.winkelitems));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newWinkelItem);

		$scope.winkelitems.push({
      id: $scope.newWinkelItem.id,
      productid: $scope.newWinkelItem.productid,
      productnaam: $scope.newWinkelItem.productnaam,
      price: $scope.newWinkelItem.price
		});

		$scope.newWinkelItem = {};

		localStorage.setItem("winkelitems", JSON.stringify($scope.winkelitems));
	};

	$scope.updateItem = function(winkelitem) {
		winkelitem.updating=false;

		localStorage.setItem("winkelitems", JSON.stringify($scope.winkelitems));
	};

});
*/
