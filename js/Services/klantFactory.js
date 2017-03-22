(function() {
    'use strict';

    angular.module('shopApp')
        .factory('klantFactory', klantFactory);

    function klantFactory() {
        var factory = {};


    var klanten = [{
            id: 0,
            'name': 'Robert',
            'adres': 'Lindelaan 5',
            'email': 'rob@gmail.com'
        },
        {
            id: 1,
            'name': 'Jan',
            'adres': 'Kleiweg 5',
            'email': 'jan@gmail.com'
        }
    ];

    factory.getKlanten = function(){
      return klanten;
    };

    factory.getKlant = function(id){
      return klanten[id -1]; //-1 omdat de array zero-based is.

    };
      return factory;
    }
})();
