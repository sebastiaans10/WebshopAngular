var filtersModule = angular.module('testApp.filters', []);

filtersModule.filter('puntjesFilter', function(){

  return function(input){

    while(input.length<20){
      input+=".";

    }

return input;



  };
});
