import { test } from 'node:test';
import assert from 'node:assert';
import { OldestYoungest } from '../challenges/oldest-youngest.js';

test('oldest-youngest - ejemplo básico', () => {
  // Arrange
  const ages = [35, 82, 6, 15, 38];
  const expected = [6, 82, 76]; // [youngest, oldest, difference]
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - familia con bebé (edad 0)', () => {
  // Arrange
  const ages = [45, 0, 60, 25, 30];
  const expected = [0, 60, 60];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - una sola persona', () => {
  // Arrange
  const ages = [25];
  const expected = [25, 25, 0];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - dos personas', () => {
  // Arrange
  const ages = [50, 30];
  const expected = [30, 50, 20];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - edades iguales', () => {
  // Arrange
  const ages = [25, 25, 25, 25];
  const expected = [25, 25, 0];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - edades desordenadas', () => {
  // Arrange
  const ages = [40, 0, 80, 20, 60];
  const expected = [0, 80, 80];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - edades desordenadas 2', () => {
  // Arrange
  const ages = [60, 0, 40, 80, 20];
  const expected = [0, 80, 80];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - familia grande con edades variadas', () => {
  // Arrange
  const ages = [45, 0, 75, 12, 90, 5, 65, 18, 85, 25, 35, 55];
  const expected = [0, 90, 90];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - edades con números grandes', () => {
  // Arrange
  const ages = [115, 100, 120, 105, 110];
  const expected = [100, 120, 20];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('oldest-youngest - solo bebés (edad 0)', () => {
  // Arrange
  const ages = [0, 0, 0];
  const expected = [0, 0, 0];
  
  // Act
  const result = OldestYoungest(ages);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

