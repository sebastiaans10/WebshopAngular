angular.module('shopApp').controller('klantController', ['klantService', '$scope', '$location',
    function(klantService, $scope, $location) {
        $scope.klanten = klantService.getKlanten();


        $scope.redirect = function() {
            $location.path('/klantLijst');
        };

        $scope.saveNewKlant = function() {
            var newPerson = {
                name: $scope.newKlantItem.name,
                adres: $scope.newKlantItem.adres,
                email: $scope.newKlantItem.email
            };

            klantService.addKlant(newPerson, function callback(data) {
                $scope.klanten = data;
                $scope.newKlantItem = {};
            });

            this.redirect();
        };

        $scope.deleteKlant = function(klantItem) {
            klantService.deleteKlant(klantItem, function callback(data) {
                $scope.klanten = data;
            });
        };

        $scope.updateKlant = function(klantItem) {
            klantItem.updating = false;
            klantService.updateKlant(klantItem, function callback(data) {
                $scope.klanten = data;
            });
        };


    }
]);
