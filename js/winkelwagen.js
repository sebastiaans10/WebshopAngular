//var module = angular.module('winkelwagen', []);

module.controller('winkelwagenController', function($scope){

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
