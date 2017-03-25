angular.module('shopApp')
    .service('klantService', function () {
        /**
         * Haalt de klant data uit localStorage op.
         *
         * @return {array} - Lijst met klanten.
         */
        this.getKlanten = function () {
            return JSON.parse(localStorage.getItem('klanten')) || [];
        };

        this.getKlant = function(id){
          var klanten = this.getKlanten();
          return klanten[id-1];
        };

        /**
         * Houdt de localStorage up-to-date wanneer er wijzigingen plaatsvinden.
         *
         * @param {array} data - De nieuwe array met klanten.
         */
        this.updateKlanten = function (data) {
            localStorage.setItem('klanten', JSON.stringify(data));
        };

        /**
         * Voegt een nieuwe klant toe aan de array met klanten die uit localStorage komt
         * en genereert een opvolgend id gebaseerd op het laatste item id.
         *
         * @param {object} klant - De nieuwe klant die toegevoegd moet worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.addKlant = function (nieuweKlant, cb) {
            var klanten = this.getKlanten();
            klanten.push(Object.assign({
                id: klanten.length > 0 ? klanten[klanten.length - 1].id + 1 : 1
            }, nieuweKlant));

            // update localStorage
            this.updateKlanten(klanten);
            cb(klanten);
        };

        /**
         * Verwijderd een nieuwe klant uit de array met klanten uit localStorage.
         *
         * @param {object} removedKlant - Klant die verwijderd dient te worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.deleteKlant = function (removedKlant, cb) {
            var klanten = this.getKlanten();
            var modified = klanten.filter(function(klant) {return (removedKlant.id !== klant.id);});

            // update localStorage
            this.updateKlanten(modified);
            cb(modified);
        };

        /**
         * Wijzigt een bestaande klant uit de array met klanten vanuit localStorage.
         *
         * @param {object} updatedKlant - Klant die gewijzigd moet worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.updateKlant = function (updatedKlant, cb) {
            var klanten = this.getKlanten();
            var modified = klanten.map(function(klant) {
                if (klant.id === updatedKlant.id) {
                    return updatedKlant;
                }
                return klant;
            });

            // update localStorage
            this.updateKlanten(modified);
            cb(modified);
        };
    });
