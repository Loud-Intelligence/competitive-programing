import { test, describe } from 'node:test';
import assert from 'node:assert';
import { keepHydrated } from '../challenges/keep-hydrated.js';

describe('Keep Hydrated!', () => {
  test('caso básico - ejemplo 1', () => {
    const time = 3;
    const expected = 1;
    
    const result = keepHydrated(time);
    
    assert.strictEqual(result, expected);
  });

  test('caso edge - ejemplo 2', () => {
    const time = 6.7;
    const expected = 3;
    
    const result = keepHydrated(time);
    
    assert.strictEqual(result, expected);
  });

  test('caso edge - ejemplo 3', () => {
    const time = 11.8;
    const expected = 5;
    
    const result = keepHydrated(time);
    
    assert.strictEqual(result, expected);
  });
});

/**
 * Complejidad:
 * - Tiempo: O(1)
 * - Espacio: O(1)
 */


