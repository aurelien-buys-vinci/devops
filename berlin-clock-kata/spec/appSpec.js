import { Main } from '../app.js';

describe('Main', function() {
    let main = new Main();

    it('should return "" for 0 hours', function() {
        const resultat = main.simpleHours();
        expect(resultat).toBe("");
    });
});