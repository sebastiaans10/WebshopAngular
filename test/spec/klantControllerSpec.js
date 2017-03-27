describe('Test the klantController', function() {
    beforeEach(angular.mock.module('shopApp'));


    var $controller, scope;

    beforeEach(inject(function($rootScope, _$controller_) {
        scope = $rootScope.$new();
        $controller = _$controller_('klantController', {
            $scope: scope
        });

    }));

    it('should add klant item', function() {
      expect(scope.klanten.length).toBe(0);
      scope.newKlantItem = {name: 'Sebas', adres: 'Lindeweg 5', email: 'sebas@gmail.com'};
      scope.saveNewKlant();
      expect(scope.klanten.length).toBe(1);
    });

    it('should update a klant item', function() {
        var klant = scope.klanten[0];
        klant.name = 'Dominic';
        scope.updateKlant(klant);
        expect(scope.klanten[0].name).toEqual('Dominic');
    });

    it('should delete a klant item', function() {
        expect(scope.klanten.length).toBe(1);
        var klant = scope.klanten[0];
        scope.deleteKlant(klant);
        expect(scope.klanten.length).toBe(0);
    });

});
