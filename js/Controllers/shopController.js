angular.module('shopApp').controller('shopController', ['productService', 'winkelwagenService', 'klantService', '$scope', '$location',
    function(productService, winkelwagenService, klantService, $scope, $location) {
        $scope.items = productService.getProducten();
        //$scope.winkelitems=[];
        $scope.addItemToCart = function(item) {

            console.log(item.voorraad);
            console.log(item.enoughStock);
            if (item.voorraad > 0) {
                item.enoughStock = true;
                var klant = {};
                if (klantService.getKlant(1) === undefined || klantService.getKlant(1) === "") {
                    klant = {
                        id: 1,
                        name: "Sebas",
                        adres: "lindeweg 5",
                        email: "sebas@gmail.com"
                    };

                } else {
                    klant = klantService.getKlant(1);
                }
                var newWinkelItempje = {
                    pID: item.id,
                    pNaam: item.name,
                    kID: klant.id,
                    kNaam: klant.name
                };

                winkelwagenService.addWinkelItem(newWinkelItempje, function callback(data) {
                        $scope.winkelitems = data;
                        $scope.newWinkelItem = {};
                    }

                );
                var newItem = productService.updateVoorraadNegative(item);

                this.updateProduct = function(newItem) {
                    //  console.log(item.voorraad);
                    newItem.updating = false;
                    productService.updateProduct(newItem, function callback(data) {
                        $scope.items = data;
                    });
                };
                this.updateProduct(newItem);

            } else {
                item.enoughStock = false;
            }

        };
    }
]);
