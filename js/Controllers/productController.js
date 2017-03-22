shopApp.controller('productController', ['productService', '$scope', '$location',
    function (productService, $scope, $location) {
        $scope.producten = productService.getProducten();

        $scope.saveNewProduct = function () {
            var newProduct = {
                name: $scope.newProductItem.name,
                price: $scope.newProductItem.price,
                description: $scope.newProductItem.description,
                image: $scope.newProductItem.image
            };

            productService.addProduct(newProduct, (data) => {
                $scope.producten = data;
                $scope.newProductItem = {};
            });

            $location.path('/productList.view');
        };

        $scope.deleteProduct = function (productItem) {
            productService.deleteProduct(productItem, (data) => {
                $scope.producten = data;
            });
        };

        $scope.updateProduct = function (productItem) {
            productItem.updating = false;
            productService.updateProduct(productItem, (data) => {
                $scope.producten = data;
            });
        };

        $scope.redirect = function(){
          $location.path('/productList.view');
};

    }]);
