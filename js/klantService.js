var shopAppFactory = angular.module('shopApp')
  .service('klantService', klantService);

  function klantService(){
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

  var getKlanten = function(){
    return klanten;
  };

this.getKlant = function(id){
  return klanten[id-1];
};

this.addKlant=function(newPerson){
  var id = 0;
  for(var i = 0; i < klanten.length; i++){
    if(klanten[i].id >= id){
      id = klanten[i].id +1;
    }
  }
  newPerson.id = id;
  console.log(newPerson);
  klanten.push(newPerson);

};


return {
  getKlanten: getKlanten
};
}
