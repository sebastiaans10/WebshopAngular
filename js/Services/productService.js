angular.module('shopApp')
    .service('productService', function () {
        /**
         * Haalt de klant data uit localStorage op.
         *
         * @return {array} - Lijst met klanten.
         */
        this.getProducten = function () {
            return JSON.parse(localStorage.getItem('producten')) || [];
        };

        /**
         * Houdt de localStorage up-to-date wanneer er wijzigingen plaatsvinden.
         *
         * @param {array} data - De nieuwe array met klanten.
         */
        this.updateProducten = function (data) {
            localStorage.setItem('producten', JSON.stringify(data));
        };

        /**
         * Voegt een nieuwe klant toe aan de array met klanten die uit localStorage komt
         * en genereert een opvolgend id gebaseerd op het laatste item id.
         *
         * @param {object} klant - De nieuwe klant die toegevoegd moet worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.addProduct = function (nieuwProduct, cb) {
            let producten = this.getProducten();
            producten.push(Object.assign({
                id: producten.length > 0 ? producten[producten.length - 1].id + 1 : 1
            }, nieuwProduct));

            // update localStorage
            this.updateProducten(producten);
            cb(producten);
        };

        /**
         * Verwijderd een nieuwe klant uit de array met klanten uit localStorage.
         *
         * @param {object} removedKlant - Klant die verwijderd dient te worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.deleteProduct = function (removedProduct, cb) {
            let producten = this.getProducten();
            let modified = producten.filter(product => removedProduct.id !== product.id);

            // update localStorage
            this.updateProducten(modified);
            cb(modified);
        };

        /**
         * Wijzigt een bestaande klant uit de array met klanten vanuit localStorage.
         *
         * @param {object} updatedKlant - Klant die gewijzigd moet worden.
         * @param {function} cb - De functie die aangeroepen wordt wanneer alles gedaan is.
         */
        this.updateProduct = function (updatedProduct, cb) {
            let producten = this.getProducten();
            let modified = producten.map(product => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });

            // update localStorage
            this.updateProducten(modified);
            cb(modified);
        };
    });
