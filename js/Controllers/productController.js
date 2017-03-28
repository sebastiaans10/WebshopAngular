shopApp.controller('productController', ['productService', '$scope', '$location',
    function (productService, $scope, $location) {
        $scope.producten = productService.getProducten();

        $scope.redirect = function(){
          $location.path('/productList');
};


        $scope.saveNewProduct = function () {
          var enoughStock1 = true;
            var newProduct = {
                name: $scope.newProductItem.name,
                price: $scope.newProductItem.price,
                description: $scope.newProductItem.description,
                image: $scope.newProductItem.image,
                voorraad: $scope.newProductItem.voorraad,
                enoughStock: enoughStock1
            };

            productService.addProduct(newProduct, function callback(data) {
                $scope.producten = data;
                $scope.newProductItem = {};
            });

            this.redirect();
        };

        $scope.deleteProduct = function (productItem) {
            productService.deleteProduct(productItem, function callback(data) {
                $scope.producten = data;
            });
        };

        $scope.updateProduct = function (productItem) {
            productItem.updating = false;
            productService.updateProduct(productItem, function callback(data) {
                $scope.producten = data;
            });
        };


    }]);
