var calc = require('../js/calc');

describe("calc", function() {
    it("should pad", function() {
        expect(calc.pad('1', 2)).toBe('01');
    });

    it("should convert seconds to time", function() {
        expect(calc.secondsToTime(1800)).toBe("30:00.00");
    });

    it("should convert seconds/distance to time", function() {
        expect(calc.secondsPerDistanceToTime(10, 600)).toBe("01:00.00");
    });

    it("should convert human time (hh:mm:ss) to seconds", function() {
        expect(calc.timePartsToSeconds(1, 0, 0)).toBe(3600);
    });

    it("should calculate distance per minute", function() {
        expect(calc.calcDistancePerMinute(10, 1, 0, 0)).toBe("06:00.00");
    });

    it("should calculate the seconds elapsed for a given distance", function() {
        expect(calc.secondsForDistance(2, 360)).toBe(720);
    });

    it("should calculate the human time (hh:mm:ss) elapsed for a given distanc", function() {
        expect(calc.timeForDistance(2, 360)).toBe("12:00.00");
    });

    it("should convert units per hour to units per second", function() {
        expect(calc.uphToUps(7.2)).toBe(0.002);
    });

    it("should convert units per second to seconds per unit", function() {
        expect(calc.upsToSpu(0.002)).toBe(500.0);
    });

    it("should convert seconds per unit to units per second", function() {
        expect(calc.spuToUps(500.0)).toBe(0.002);
    });

    it("should convert units per hour to seconds per unit", function() {
        expect(calc.uphToSpu(7.2)).toBe(500.0);
    });    
});
