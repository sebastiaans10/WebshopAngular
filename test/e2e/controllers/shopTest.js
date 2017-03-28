describe('Test Product Toevoegen | ', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/addProduct');

    });

    it('Product toevoegen', function() {

        element(by.model('newProductItem.name')).sendKeys("Piano");
        element(by.model('newProductItem.price')).sendKeys("1500");
        element(by.model('newProductItem.description')).sendKeys("Mooie vleugel");
        element(by.model('newProductItem.image')).sendKeys("img/piano.png");
        element(by.model('newProductItem.voorraad')).sendKeys("2");

        element(by.id('addP')).click();

        var expectedData = [{
            id: 1,
            name: 'Piano',
            price: '1500',
            description: 'Mooie vleugel',
            image: 'img/piano.png',
            voorraad: '2',
            enoughStock: true
        }];

        browser.executeScript('return localStorage.getItem("producten");').then(function(data) {
            expect(JSON.parse(data)).toEqual(expectedData);

        });
    });



});

describe('Klant toevoegen', function() {
    beforeEach(function() {
        browser.get('http://localhost:8080/#/addKlant');
    });

    it('Klant toevoegen', function() {
        element(by.model('newKlantItem.name')).sendKeys("Sebas");
        element(by.model('newKlantItem.adres')).sendKeys("Bosweg 5");
        element(by.model('newKlantItem.email')).sendKeys("sebas@gmail.com");

        element(by.id('addK')).click();

        var expectedData = [{
            id: 1,
            name: 'Sebas',
            adres: 'Bosweg 5',
            email: 'sebas@gmail.com'
        }];

        browser.executeScript('return localStorage.getItem("klanten");').then(function(data) {
            expect(JSON.parse(data)).toEqual(expectedData);

        });
    });

});
