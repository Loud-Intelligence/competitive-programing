import { test } from 'node:test';
import assert from 'node:assert';
import { RectangleArea } from '../challenges/rectangle-area.js';

test('rectangle-area - caso básico válido (diagonal 5, lado 3)', () => {
  // Arrange
  const diagonal = 5;
  const side = 3;
  const expected = 12; // El otro lado es 4 (3-4-5 triángulo), área = 3 * 4 = 12
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - caso básico válido (diagonal 5, lado 4)', () => {
  // Arrange
  const diagonal = 5;
  const side = 4;
  const expected = 12; // El otro lado es 3, área = 4 * 3 = 12
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - diagonal menor que el lado → "Not a rectangle"', () => {
  // Arrange
  const diagonal = 3;
  const side = 5;
  const expected = "Not a rectangle";
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - diagonal igual al lado → "Not a rectangle"', () => {
  // Arrange
  const diagonal = 4;
  const side = 4;
  const expected = "Not a rectangle";
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - área con decimales se redondea a 2 lugares', () => {
  // Arrange
  const diagonal = 10;
  const side = 6;
  // Otro lado = sqrt(10² - 6²) = sqrt(100 - 36) = sqrt(64) = 8
  // Área = 6 * 8 = 48
  const expected = 48;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - área con decimales (diagonal 10, lado 7)', () => {
  // Arrange
  const diagonal = 10;
  const side = 7;
  // Otro lado = sqrt(100 - 49) = sqrt(51) ≈ 7.14142...
  // Área = 7 * 7.14142... ≈ 49.98994... → redondeado a 49.99
  const expected = 49.99;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - área con decimales (diagonal 13, lado 5)', () => {
  // Arrange
  const diagonal = 13;
  const side = 5;
  // Otro lado = sqrt(169 - 25) = sqrt(144) = 12
  // Área = 5 * 12 = 60
  const expected = 60;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - decimales con muchos dígitos se redondean correctamente', () => {
  // Arrange
  const diagonal = 15;
  const side = 9;
  // Otro lado = sqrt(225 - 81) = sqrt(144) = 12
  // Área = 9 * 12 = 108
  const expected = 108;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - valores pequeños con decimales', () => {
  // Arrange
  const diagonal = 5;
  const side = 2;
  // Otro lado = sqrt(25 - 4) = sqrt(21) ≈ 4.58257...
  // Área = 2 * 4.58257... ≈ 9.16515... → redondeado a 9.17
  const expected = 9.17;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - diagonal apenas mayor que el lado', () => {
  // Arrange
  const diagonal = 10.1;
  const side = 10;
  // Otro lado = sqrt(102.01 - 100) = sqrt(2.01) ≈ 1.4177...
  // Área = 10 * 1.4177... ≈ 14.177... → redondeado a 14.18
  const expected = 14.18;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - valores enteros grandes', () => {
  // Arrange
  const diagonal = 25;
  const side = 15;
  // Otro lado = sqrt(625 - 225) = sqrt(400) = 20
  // Área = 15 * 20 = 300
  const expected = 300;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - caso límite: diagonal = 0 y lado = 0', () => {
  // Arrange
  const diagonal = 0;
  const side = 0;
  const expected = "Not a rectangle";
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('rectangle-area - redondeo hacia arriba (.995 → .00)', () => {
  // Arrange
  const diagonal = 10;
  const side = 3;
  // Otro lado = sqrt(100 - 9) = sqrt(91) ≈ 9.53939...
  // Área = 3 * 9.53939... ≈ 28.618... → redondeado a 28.62
  const expected = 28.62;
  
  // Act
  const result = RectangleArea(diagonal, side);
  
  // Assert
  assert.strictEqual(result, expected);
});
