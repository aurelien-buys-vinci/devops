import { Main } from '../app.js';

describe('list of test for simpleHours function', function() {
    let main = new Main();

    it('should return "" for 0 hours', function() {
        const resultat = main.simpleHours();
        expect(resultat).toBe("");
    });

    it('should return "R" for 1 hours', function() {
        const resultat = main.simpleHours(1);
        expect(resultat).toBe("R");
    });

    it('should return "RRRR" for 4 hours', function() {
        const resultat = main.simpleHours(4);
        expect(resultat).toBe("RRRR");
    });

    it('should return "" for 5 hours', function() {
        const resultat = main.simpleHours(5);
        expect(resultat).toBe("");
    });

    it('should return "R" for 6 hours', function() {
        const resultat = main.simpleHours(6);
        expect(resultat).toBe("R");
    });

    it('should return "RRRR" for 9 hours', function() {
        const resultat = main.simpleHours(9);
        expect(resultat).toBe("RRRR");
    });

    it('should return "" for 10 hours', function() {
        const resultat = main.simpleHours(10);
        expect(resultat).toBe("");
    });

    it('should return "R" for 11 hours', function() {
        const resultat = main.simpleHours(11);
        expect(resultat).toBe("R");
    });

    it('should return "RRRR" for 14 hours', function() {
        const resultat = main.simpleHours(14);
        expect(resultat).toBe("RRRR");
    });

    it('should return "" for 15 hours', function() {
        const resultat = main.simpleHours(15);
        expect(resultat).toBe("");
    });

    it('should return "R" for 16 hours', function() {
        const resultat = main.simpleHours(16);
        expect(resultat).toBe("R");
    });

    it('should return "RRRR" for 19 hours', function() {
        const resultat = main.simpleHours(19);
        expect(resultat).toBe("RRRR");
    });
});

describe('list of test for blockOfFiveHours function', function() {
    let main = new Main();

    it('should return "" for 0 hours', function() {
        const resultat = main.blockOfFiveHours();
        expect(resultat).toBe("");
    });

    it('should return "" for 1 hours', function() {
        const resultat = main.blockOfFiveHours(1);
        expect(resultat).toBe("");
    });

    it('should return "" for 4 hours', function() {
        const resultat = main.blockOfFiveHours(4);
        expect(resultat).toBe("");
    });

    it('should return "R" for 5 hours', function() {
        const resultat = main.blockOfFiveHours(5);
        expect(resultat).toBe("R");
    });

    it('should return "R" for 6 hours', function() {
        const resultat = main.blockOfFiveHours(6);
        expect(resultat).toBe("R");
    });

    it('should return "R" for 9 hours', function() {
        const resultat = main.blockOfFiveHours(9);
        expect(resultat).toBe("R");
    });

    it('should return "RR" for 10 hours', function() {
        const resultat = main.blockOfFiveHours(10);
        expect(resultat).toBe("RR");
    });

    it('should return "RR" for 11 hours', function() {
        const resultat = main.blockOfFiveHours(11);
        expect(resultat).toBe("RR");
    });

    it('should return "RR" for 14 hours', function() {
        const resultat = main.blockOfFiveHours(14);
        expect(resultat).toBe("RR");
    });

    it('should return "RRR" for 15 hours', function() {
        const resultat = main.blockOfFiveHours(15);
        expect(resultat).toBe("RRR");
    });

    it('should return "RRR" for 16 hours', function() {
        const resultat = main.blockOfFiveHours(16);
        expect(resultat).toBe("RRR");
    });

    it('should return "RRR" for 19 hours', function() {
        const resultat = main.blockOfFiveHours(19);
        expect(resultat).toBe("RRR");
    });

    it('should return "RRRR" for 20 hours', function() {
        const resultat = main.blockOfFiveHours(20);
        expect(resultat).toBe("RRRR");
    });

    it('should return "RRRR" for 21 hours', function() {
        const resultat = main.blockOfFiveHours(21);
        expect(resultat).toBe("RRRR");
    });

    it('should return "RRRR" for 24 hours', function() {
        const resultat = main.blockOfFiveHours(24);
        expect(resultat).toBe("RRRR");
    });
});

describe('list of test for secondLamp function', function() {
    let main = new Main();

    it('should return "R" for 0 seconds', function() {
        const resultat = main.secondsLamp(0);
        expect(resultat).toBe("R");
    });

    it('should return "" for 1 seconds', function() {
        const resultat = main.secondsLamp(1);
        expect(resultat).toBe("");
    });

    it('should return "R" for 2 seconds', function() {
        const resultat = main.secondsLamp(2);
        expect(resultat).toBe("R");
    });

    it('should return "" for 3 seconds', function() {
        const resultat = main.secondsLamp(3);
        expect(resultat).toBe("");
    });
});


describe('list of test for function BlockOfFiveMinute', function() {
    let main = new Main();

    it('should return "" for 0 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(0);
        expect(resultat).toBe("");
    });

    it('should return "" for 1 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(1);
        expect(resultat).toBe("");
    });

    it('should return "" for 4 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(4);
        expect(resultat).toBe("");
    });
    it('should return "Y" for 5 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(5);
        expect(resultat).toBe("Y");
    });

    it('should return "Y" for 6 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(6);
        expect(resultat).toBe("Y");
    });

    it('should return "Y" for 9 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(9);
        expect(resultat).toBe("Y");
    });

    it('should return "YY" for 10 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(10);
        expect(resultat).toBe("YY");
    });

    it('should return "YY" for 12 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(12);
        expect(resultat).toBe("YY");
    });
    
    it('should return "YY" for 14 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(14);
        expect(resultat).toBe("YY");
    });

    it('should return "YY" for 15 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(15);
        expect(resultat).toBe("YYY");
    });

    it('should return "YY" for 16 Minute(s)', function() {
        const resultat = main.BlockOfFiveMinute(16);
        expect(resultat).toBe("YYY");
    });

});