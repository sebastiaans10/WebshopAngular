var module = angular.module('klant', []);

module.controller('klantController', function($scope){

var localItems = JSON.parse(localStorage.getItem("items"));

if(localItems != undefined && localItems.length>0){
$scope.items = localItems;
}

else{
  $scope.items = [
    { id:"0",
      name:"Robert van Veen",
      adress:"Rietstraat 5",
      email:"robvveen@gmail.com"
    },
    { id:"1",
      name:"Frank Andersen",
      adress:"Molenstraat 3",
      email: "frankandersen@gmail.com"
    }
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
