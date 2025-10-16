import { test, describe } from 'node:test';
import assert from 'node:assert';
import { twoSum, twoSumBruteForce } from '../challenges/two-sum.js';

describe('Two Sum - Solución óptima (Hash Map)', () => {
  test('caso básico - ejemplo 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('caso básico - ejemplo 2', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('dos elementos solamente', () => {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('números negativos', () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    const expected = [0, 2];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('números grandes', () => {
    const nums = [1000000000, 2000000000, 3000000000];
    const target = 3000000000;
    const expected = [0, 1];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('solución al final del array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 19;
    const expected = [8, 9];
    
    const result = twoSum(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });
});

describe('Two Sum - Solución bruta (referencia)', () => {
  test('caso básico', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    
    const result = twoSumBruteForce(nums, target);
    
    assert.deepStrictEqual(result, expected);
  });

  test('debe dar mismo resultado que solución óptima', () => {
    const nums = [3, 2, 4];
    const target = 6;
    
    const resultOptimal = twoSum(nums, target);
    const resultBrute = twoSumBruteForce(nums, target);
    
    assert.deepStrictEqual(resultOptimal, resultBrute);
  });
});

