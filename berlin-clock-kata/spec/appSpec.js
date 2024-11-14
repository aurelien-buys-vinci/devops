import { Main } from '../app.js';

describe("SimpleMinute should return the minutes in the bottom row", function() {
    it("should return '' for 0 minutes", function() {
        let main = new Main();

        let result = main.SimpleMinute(0);
        
        expect(result).toBe("");
    });
  
});