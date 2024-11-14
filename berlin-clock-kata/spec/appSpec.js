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

describe("SimpleMinute should return the minutes in the bottom row", function() {
    it("should return '' for 0 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(0);
        
        expect(result).toBe("");
    });
  
    it("should return 'Y' for 1 minute", function() {
        let main = new Main();

        let result = main.SimpleMinute(1);
        
        expect(result).toBe("Y");
    });

    it("should return 'YY' for 7 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(7);
        
        expect(result).toBe("YY");
    });

    it("should return 'YYY' for 18 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(18);
        
        expect(result).toBe("YYY");
    });
    it("should return 'YYYY' for 49 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(49);
        
        expect(result).toBe("YYYY");
    });
    it("should return '' for 50 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(50);
        
        expect(result).toBe("");
    });
    it("should return 'Y' for 51 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(51);
        
        expect(result).toBe("Y");
    });
    it("should return 'YY' for 22 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(22);
        
        expect(result).toBe("YY");
    });

    it("should return 'YYY' for 33 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(33);
        
        expect(result).toBe("YYY");
    });

    it("should return 'YYYY' for 44 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(44);
        
        expect(result).toBe("YYYY");
    });
});