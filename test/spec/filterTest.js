  describe('length filter', function() {
    beforeEach(angular.mock.module('shopApp'));

var $filter;

beforeEach(inject(function(_$filter_){
  $filter = _$filter_('priceGreaterThan');
}));

it('returns all products with price greater than', function() {
    var input =
    [
      {id: 1, name: 'Voetbal', price: '30', description:'mooi', image: 'img/voetbal.png', voorraad: '4'},
      {id: 2, name: 'Tennis racket', price: '75', description: 'beter', image:'img/tennis.png', voorraad:'3'},
      {id: 3, name: 'Piano', price: '1500', description: 'vleugel', image:'img/piano.png', voorraad:'3'}];

      var output = $filter(input, 75);
      expect(output.length).toBe(2);
      expect(output[0].name).toEqual('Tennis racket');
      expect(output[1].name).toEqual('Piano');
});

it('returns all products when price is undefined', function() {
  var input =
  [
    {id: 1, name: 'Voetbal', price: '30', description:'mooi', image: 'img/voetbal.png', voorraad: '4'},
    {id: 2, name: 'Tennis racket', price: '75', description: 'beter', image:'img/tennis.png', voorraad:'3'},
    {id: 3, name: 'Piano', price: '1500', description: 'vleugel', image:'img/piano.png', voorraad:'3'}];

    var output = $filter(input, undefined);
    expect(output.length).toBe(3);
});

it('returns all products when price is empty', function() {
  var input =
  [
    {id: 1, name: 'Voetbal', price: '30', description:'mooi', image: 'img/voetbal.png', voorraad: '4'},
    {id: 2, name: 'Tennis racket', price: '75', description: 'beter', image:'img/tennis.png', voorraad:'3'},
    {id: 3, name: 'Piano', price: '1500', description: 'vleugel', image:'img/piano.png', voorraad:'3'}];

    var output = $filter(input, "");
    expect(output.length).toBe(3);
});
});
