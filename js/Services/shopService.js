angular.module('shopApp').service('shopService', function() {

    this.getItems = function() {
        return JSON.parse(localStorage.getItem('items')) || [];

    };

});
