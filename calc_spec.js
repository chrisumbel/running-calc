var calc = require('./calc');

describe("calc", function() {
    it("should pad", function() {
        expect(calc.pad('1', 2)).toBe('01');
    });
});
