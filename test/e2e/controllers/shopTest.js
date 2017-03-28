describe('Test product toevoegen', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/addProduct');

    });

    it('Product toevoegen', function() {
        var productList = browser.executeScript("return JSON.parse(localStorage.getItem('producten'));");
        expect(productList.length).toBe(undefined);
        element(by.model('newProductItem.name')).sendKeys("Piano");
        element(by.model('newProductItem.price')).sendKeys("1500");
        element(by.model('newProductItem.description')).sendKeys("Mooie vleugel");
        element(by.model('newProductItem.image')).sendKeys("img/piano.png");
        element(by.model('newProductItem.voorraad')).sendKeys("2");

        element(by.id('addP')).click();

        productList = browser.executeScript("return JSON.parse(localStorage.getItem('producten'));");

        expect(productList.length).not.toEqual(0);
    });

});
