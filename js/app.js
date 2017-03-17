var shopApp = angular.module('shopApp', ['ngRoute']);

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
            controller: 'shopController',
            directive: 'myClock'
        })
        .when('/productList', {
            templateUrl: '/views/productList.view.html',
            controller: 'shopController'
        })
        .when('/addProduct', {
            templateUrl: '/views/addProduct.html',
            controller: 'shopController'
        })
        .when('/klantLijst', {
            templateUrl: '/views/klantLijst.html',
            controller: 'klantController'
        })
        .when('/addKlant', {
            templateUrl: '/views/addKlant.html',
            controller: 'klantController'
        })
        .otherwise({
            redirectTo: '/home'
        });



}]);
