describe('Test the productController', function() {
    beforeEach(angular.mock.module('shopApp'));


    var $controller, scope;

    beforeEach(inject(function($rootScope, _$controller_) {
        scope = $rootScope.$new();
        $controller = _$controller_('productController', {
            $scope: scope
        });

    }));

    it('should add product item', function() {
      expect(scope.producten.length).toBe(0);
      scope.newProductItem= {name: 'Voetbal', price: '30', description:'mooi', image: 'img/voetbal.png', voorraad: '4'};
      scope.saveNewProduct();
      expect(scope.producten.length).toBe(1);
      expect(scope.producten[0].name).toEqual('Voetbal');

    });

    it('should update a product item', function() {
        var product = scope.producten[0];
        product.name = 'Voetballetje';
        scope.updateProduct(product);
        expect(scope.producten[0].name).toEqual('Voetballetje');

    });

    it('should delete a product item', function() {
        expect(scope.producten.length).toBe(1);
        var product = scope.producten[0];
        scope.deleteProduct(product);
        expect(scope.producten.length).toBe(0);
    });

});
