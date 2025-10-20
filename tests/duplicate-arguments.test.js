import { test } from 'node:test';
import assert from 'node:assert';
import { solution } from '../challenges/duplicate-arguments.js';

test('duplicate-arguments - sin duplicados con números', () => {
  // Arrange & Act
  const result = solution(1, 2, 3);
  
  // Assert
  assert.strictEqual(result, false);
});

test('duplicate-arguments - con duplicados numéricos', () => {
  // Arrange & Act
  const result = solution(1, 2, 3, 2);
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - con duplicados de strings', () => {
  // Arrange & Act
  const result = solution('1', '2', '3', '2');
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - sin duplicados con strings', () => {
  // Arrange & Act
  const result = solution('a', 'b', 'c', 'd');
  
  // Assert
  assert.strictEqual(result, false);
});

test('duplicate-arguments - un solo argumento', () => {
  // Arrange & Act
  const result = solution(1);
  
  // Assert
  assert.strictEqual(result, false);
});

test('duplicate-arguments - sin argumentos', () => {
  // Arrange & Act
  const result = solution();
  
  // Assert
  assert.strictEqual(result, false);
});

test('duplicate-arguments - dos argumentos iguales', () => {
  // Arrange & Act
  const result = solution(5, 5);
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - múltiples duplicados', () => {
  // Arrange & Act
  const result = solution(1, 2, 3, 1, 2);
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - duplicado al final', () => {
  // Arrange & Act
  const result = solution(1, 2, 3, 4, 5, 1);
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - mix de strings y números sin duplicados', () => {
  // Arrange & Act
  const result = solution(1, '1', 2, '2');
  
  // Assert
  assert.strictEqual(result, false);
});

test('duplicate-arguments - strings idénticos', () => {
  // Arrange & Act
  const result = solution('hello', 'world', 'hello');
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - números negativos duplicados', () => {
  // Arrange & Act
  const result = solution(-1, -2, -3, -1);
  
  // Assert
  assert.strictEqual(result, true);
});

test('duplicate-arguments - cero duplicado', () => {
  // Arrange & Act
  const result = solution(0, 1, 2, 0);
  
  // Assert
  assert.strictEqual(result, true);
});

