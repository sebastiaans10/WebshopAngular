//var module = angular.module('klant', []);



  shopApp.controller('klantController', ['klantService', '$scope', '$location',
  function (klantService, $scope, $location){
  //  $scope.vm = {};

  //  var localItems = JSON.parse(localStorage.getItem("klanten"));

    $scope.klanten = klantService.getKlanten();


  /*  if(localItems != undefined && localItems.length>0){
    $scope.vm = localItems;
    }
    else{
      $scope.vm.klanten = klantService.getKlanten();

    }*/

    $scope.saveNewKlant = function(){

      var newPerson = {
        name:   $scope.newKlantItem.name,
        adres:  $scope.newKlantItem.adres,
        email:  $scope.newKlantItem.email
      };
      //  klantService.addKlant(newPerson);
    //  var klantenList = $scope.klanten;
      klantService.addKlant(newPerson);
      //  $scope.klanten.push(newPerson);
      $scope.newKlantItem = {};
    	//localStorage.setItem("klanten", JSON.stringify($scope.klanten));
       $location.path('/klantLijst');

    };

    $scope.deleteItem = function(klantItem) {

      klantService.deleteKlant(klantItem);


  		//$scope.klanten.splice(deleteIndex, 1);

    //  $scope.klanten.splice(deleteIndex, 1);
    //  localStorage.setItem("klanten", JSON.stringify($scope.klanten));

    		};
    //console.log($scope.vm);
    $scope.updateItem = function(klantItem) {
      klantItem.updating=false;
      klantService.updateKlant(klantItem);

  //    localStorage.setItem("klanten", JSON.stringify($scope.klanten));
    };
  }]);
  //klantController.$inject = ['klantService', '$location'];




/*angular.module('shopApp').controller('klantController', function($scope, klantFactory){

var localKlantItems = JSON.parse(localStorage.getItem("klantItems"));

if(localKlantItems != undefined && localKlantItems.length>0){
$scope.klantItems = localKlantItems;
}

//else{
  $scope.klantItems = klantFactory.getKlanten();
  /*[
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
//}

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
      id: $scope.newKlantItem.id,
			name: $scope.newKlantItem.name,
      adress: $scope.newKlantItem.adress,
      email: $scope.newKlantItem.email
		});

		$scope.newKlantItem = {};

		localStorage.setItem("klantItems", JSON.stringify($scope.klantItems));
    window.location.href = '#!/klantLijst';

	};

	$scope.updateItem = function(klantItem) {
		klantItem.updating=false;

		localStorage.setItem("klantItems", JSON.stringify($scope.klantItems));
	};

});
*/
