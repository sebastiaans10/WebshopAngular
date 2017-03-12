angular.module('shopApp').controller('shopController', function($scope){

var localItems = JSON.parse(localStorage.getItem("items"));

if(localItems != undefined && localItems.length>0){
$scope.items = localItems;
}

else{
  $scope.items = [
    { id:"0",
      name:"Tennis racket",
      price:"70",
      description:"Tennis description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:"img/tennis.png"
    },
    { id:"1",
      name:"Voetbal",
      price:"30",
      description:"Voetbal description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:"img/voetbal.png"
    },
    { id:"2",
      name:"Piano",
      price:"800",
      description:"Piano description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:"img/piano.png"
    },
    { id:"3",
      name:"Tennis racket",
      price:"70",
      description:"Tennis description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:""
    },
    { id:"4",
      name:"Voetbal",
      price:"30",
      description:"Voetbal description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:""
    },
    { id:"5",
      name:"Piano",
      price:"800",
      description:"Piano description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image:""
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
      price: $scope.newItem.price,
      description: $scope.newItem.description,
      image: $scope.newItem.image
		});

		$scope.newItem = {};

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.updateItem = function(item) {
		item.updating=false;

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

});
