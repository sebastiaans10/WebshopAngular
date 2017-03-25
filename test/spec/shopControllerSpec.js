describe('Test the shopController', function() {
  beforeEach(function() {
    module('shopApp');
    inject(function($controller) {
      controller = $controller('shopController');
    });
  });

it('should add shopping cart item', function() {
expect(true).toBeTruthy();
});

it('should fail', function(){

  expect(true).not.toBe(true);
});

});
