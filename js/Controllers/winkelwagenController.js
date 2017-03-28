//var module = angular.module('winkelwagen', []);
shopApp.controller('winkelwagenController', ['winkelwagenService', 'productService', 'klantService', '$scope', '$location',
    function(winkelwagenService, productService, klantService, $scope, $location) {
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

        getProduct = function(winkelitem) {
            var id = winkelitem.pID;
            var product = productService.getProduct(id);
            return product;
        };

        $scope.deleteWinkelItem = function(winkelitem) {
            console.log(winkelitem.pID);
            var product = getProduct(winkelitem);

            updateProduct(product);

            winkelwagenService.deleteWinkelItem(winkelitem, function callback(data) {
                $scope.winkelitems = data;
            });
        };

    }
]);
