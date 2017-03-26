var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.filter('priceGreaterThan', function () {

    return function (input, price) {
      if(price===undefined||price===""){
        return input;
      }
      var resultItems=[];
      for(var x in input){
        var item = input[x];
        if(item.price >= price) {
          resultItems.push(item);
        }

      }
        return resultItems;
    };
});

shopApp.directive('myClock', myClock);

function myClock(){
  var directive = {
    template: '<div>{{vm.time | date:"HH:mm:ss"}}</div>',
    controller: clockController,
    controllerAs: 'vm'
      };
      return directive;
}

clockController.$inject=['$interval'];
function clockController($interval){
  var vm = this;
  var update = $interval(function(){
      vm.time = new Date();
  }, 1000);

}



shopApp.config(['$routeProvider', function($routeProvider) {


    $routeProvider.when('/home', {
            templateUrl: '/views/home.html',
            controller: 'shopController'
        })
        .when('/productList', {
            templateUrl: '/views/productList.view.html',
            controller: 'productController'
        })
        .when('/addProduct', {
            templateUrl: '/views/addProduct.html',
            controller: 'productController'
        })
        .when('/klantLijst', {
            templateUrl: '/views/klantLijst.html',
            controller: 'klantController'
        })
        .when('/addKlant', {
            templateUrl: '/views/addKlant.html',
            controller: 'klantController'
        })
        .when('/winkelwagen',{
            templateUrl: '/views/winkelwagen.html',
            controller: 'winkelwagenController'
        })
        .otherwise({
            redirectTo: '/home'
        });



}]);
