// no need this line, jest know to include these commands like describe automatic
import { describe } from 'node:test';

describe('init', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });
});
