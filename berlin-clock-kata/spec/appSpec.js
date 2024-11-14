import { Main } from '../app.js';

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
});