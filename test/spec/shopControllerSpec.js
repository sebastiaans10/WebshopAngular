describe('Test the shopController', function() {
    beforeEach(angular.mock.module('shopApp'));


    var $controller, scope;

    beforeEach(inject(function($rootScope, _$controller_) {
        scope = $rootScope.$new();
        $controller = _$controller_('shopController', {
            $scope: scope
        });

    }));

    it('should add shopping cart item', function() {
        //var controller = $controller('shopController', {$scope:$scope});
        //scope.items = productService.getProducten();
        scope.winkelitems = [];
        scope.item = null;
        var item = null;
        expect(scope.winkelitems.length).toBe(0);
        scope.item = {
            id: 1,
            name: 'Piano',
            price: '1500',
            description: 'oke',
            image: '',
            voorraad: '5',
            enoughStock: true
        };
        item = scope.item;
        scope.addItemToCart(item);
        expect(scope.winkelitems.length).toBe(1);
        expect(scope.item.voorraad).toBe(4);
        //expect(true).toBeTruthy();
    });

});
