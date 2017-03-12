var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/index.html',
            controller: 'winkelwagenController'
        })
        .when('/productList', {
            templateUrl: '/views/productList.html'
        })
        .when('/addProduct', {
            templateUrl: '/views/addProduct.html'
        })
        .when('/klantLijst', {
            templateUrl: '/views/klantLijst',
            controller: 'klantController'
        })
        .when('/addKlant', {
            templateUrl: '/views/addKlant.html',
            controller: 'klantController'
        })
        .otherwise({
            redirectTo: '/index.html'
        });

}]);
