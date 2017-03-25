/*describe('Filter: puntjesfilter', function() {

	var filter;

	beforeEach(function() {
		module('testApp.filters');
		inject(function($filter) {
			filter = $filter('puntjesFilter');
		});
	});

	it("should add dots if the length is less than 20", function() {
		var input = "Hallo Wereld!"; //13 chars
		var output = "Hallo Wereld!.......";

		expect(filter(input)).toBe(output);
	});

	it("should not add dots when the length is 20", function() {
		var input = "Goedemorgen Wereld!!"; //20 chars
		var output = "Goedemorgen Wereld!!";

		expect(filter(input)).toBe(output);
	});

	it("should return 20 dots when the string is undefined", function() {
		var input = undefined;
		var output = "....................";

		expect(filter(input)).toBe(output);
	});

});*/
