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

    it("should return 'YY' for 2 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(2);
        
        expect(result).toBe("YY");
    });

    it("should return 'Y' for 3 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(3);
        
        expect(result).toBe("YYY");
    });
    it("should return 'YYYY' for 4 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(4);
        
        expect(result).toBe("YYYY");
    });
});