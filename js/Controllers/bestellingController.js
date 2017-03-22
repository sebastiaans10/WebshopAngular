var module = angular.module('bestelling', []);

module.controller('bestellingController', function($scope){

var localItems = JSON.parse(localStorage.getItem("items"));

if(localItems != undefined && localItems.length>0){
$scope.items = localItems;
}

else{
  $scope.items = [
    { bestelId:"0",
      klantId:"6",
      klantNaam:"Piet",
      datum:"7-3-2017"
    },

    ];
}

$scope.deleteItem = function(item) {

		var deleteIndex = -1;
		$scope.items.forEach(function(e, i) {
			if(e.id === item.id) {
				deleteIndex = i;
			}
		});

		$scope.items.splice(deleteIndex, 1);

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newItem);

		$scope.items.push({
			name: $scope.newItem.name,
      adress: $scope.newItem.adress,
      email: $scope.newItem.email
		});

		$scope.newItem = {};

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.updateItem = function(item) {
		item.updating=false;

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

});
