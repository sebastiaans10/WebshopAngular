shopApp.controller('klantController', ['klantService', '$scope', '$location',
    function (klantService, $scope, $location) {
        $scope.klanten = klantService.getKlanten();

        $scope.saveNewKlant = function () {
            var newPerson = {
                name: $scope.newKlantItem.name,
                adres: $scope.newKlantItem.adres,
                email: $scope.newKlantItem.email
            };

            klantService.addKlant(newPerson, (data) => {
                $scope.klanten = data;
                $scope.newKlantItem = {};
            });

            $location.path('/klantLijst');
        };

        $scope.deleteKlant = function (klantItem) {
            klantService.deleteKlant(klantItem, (data) => {
                $scope.klanten = data;
            });
        };

        $scope.updateKlant = function (klantItem) {
            klantItem.updating = false;
            klantService.updateKlant(klantItem, (data) => {
                $scope.klanten = data;
            });
        };

    }]);
