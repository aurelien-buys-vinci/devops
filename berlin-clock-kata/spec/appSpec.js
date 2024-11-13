import { Main } from '../app.js';

describe('Main', function() {
    let main = new Main();

    it('should return "" for 0 hours', function() {
        const resultat = main.simpleHours();
        expect(resultat).toBe("");
    });

    it('should return "R" for 1 hours', function() {
        const resultat = main.simpleHours(1);
        expect(resultat).toBe("R");
    });

    it('should return "RR" for 2 hours', function() {
        const resultat = main.simpleHours(2);
        expect(resultat).toBe("RR");
    });


    it('should return "RRRR" for 4 hours', function() {
        const resultat = main.simpleHours(4);
        expect(resultat).toBe("RRRR");
    });
});