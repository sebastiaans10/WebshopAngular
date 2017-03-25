describe('Test the shopController', function() {
  beforeEach(angular.module('shopApp'));


var $controller, scope;

beforeEach(inject(function($rootScope, _$controller_)
{
scope = $rootScope.$new();
$controller = _$controller_('shopController',{
  $scope: scope
});

}));



it('should add shopping cart item', function() {
  //var controller = $controller('shopController', {$scope:$scope});

//expect(true).toBeTruthy();
});

it('should fail', function(){
//  var controller = $controller('shopController', {$scope:$scope});


//  expect(true).not.toBe(true);
});

});
