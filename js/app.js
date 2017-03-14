var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.config(['$routeProvider', function($routeProvider) {


    $routeProvider.when('/home', {
            templateUrl: '/views/home.html',
            controller: 'shopController'
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
