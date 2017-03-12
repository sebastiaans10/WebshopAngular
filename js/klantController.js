//var module = angular.module('klant', []);

angular.module('shopApp').controller('klantController', function($scope){

var localKlantItems = JSON.parse(localStorage.getItem("klantItems"));

if(localKlantItems != undefined && localKlantItems.length>0){
$scope.klantItems = localKlantItems;
}

else{
  $scope.klantItems = [
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

$scope.deleteItem = function(klantItem) {

		var deleteIndex = -1;
		$scope.klantItems.forEach(function(e, i) {
			if(e.id === klantItem.id) {
				deleteIndex = i;
			}
		});

		$scope.klantItems.splice(deleteIndex, 1);

		localStorage.setItem("klantItems", JSON.stringify($scope.klantItems));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newKlantItem);

		$scope.klantItems.push({
			name: $scope.newKlantItem.name,
      adress: $scope.newKlantItem.adress,
      email: $scope.newKlantItem.email
		});

		$scope.newKlantItem = {};

		localStorage.setItem("klantItems", JSON.stringify($scope.klantItems));
	};

	$scope.updateItem = function(klantItem) {
		klantItem.updating=false;

		localStorage.setItem("klantItems", JSON.stringify($scope.klantItems));
	};

});
