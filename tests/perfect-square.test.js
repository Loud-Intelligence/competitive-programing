import { test } from 'node:test';
import assert from 'node:assert';
import { PerfectSquare } from '../challenges/perfect-square.js';

test('perfect-square - ejemplo básico 3x3 válido', () => {
  // Arrange
  const input = "...\n...\n...";
  const expected = true;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - contiene caracteres inválidos (coma) → false', () => {
  // Arrange
  const input = "..,\n..\n...";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - líneas con longitudes distintas → false', () => {
  // Arrange
  const input = ".\n..\n...";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - 1x1 válido (un solo punto)', () => {
  // Arrange
  const input = ".";
  const expected = true;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - 2x2 válido', () => {
  // Arrange
  const input = "..\n..";
  const expected = true;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - 4x4 válido', () => {
  // Arrange
  const input = "....\n....\n....\n....";
  const expected = true;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - una sola línea con 4 puntos (1x4) → false', () => {
  // Arrange
  const input = "....";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - categorías de caracteres: espacios no permitidos → false', () => {
  // Arrange
  const input = ". .\n..";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - cadena vacía → false', () => {
  // Arrange
  const input = "";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - salto de línea final extra crea fila vacía → false', () => {
  // Arrange
  const input = ".\n.";
  const withTrailing = input + "\n"; // ".\n.\n" → 3 filas (última vacía)
  const expected = false;

  // Act
  const result = PerfectSquare(withTrailing);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - NxN generado dinámicamente (5x5) válido', () => {
  // Arrange
  const n = 5;
  const row = '.'.repeat(n);
  const input = Array.from({ length: n }, () => row).join('\n');
  const expected = true;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});

test('perfect-square - mismo número de filas y columnas pero con una línea rota → false', () => {
  // Arrange
  const input = "...\n..\n...";
  const expected = false;

  // Act
  const result = PerfectSquare(input);

  // Assert
  assert.strictEqual(result, expected);
});