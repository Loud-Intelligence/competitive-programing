import { test } from 'node:test';
import assert from 'node:assert';
import { FindTheMine } from '../challenges/find-the-mine.js';

test('find-the-mine - ejemplo 1: mina en esquina superior izquierda', () => {
  // Arrange
  const input = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const expected = [0, 0];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - ejemplo 2: mina en el centro', () => {
  // Arrange
  const input = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const expected = [1, 1];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - ejemplo 3: mina en fila 2, columna 1', () => {
  // Arrange
  const input = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0]
  ];
  const expected = [2, 1];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - mina en esquina superior derecha', () => {
  // Arrange
  const input = [
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const expected = [0, 2];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - mina en esquina inferior izquierda', () => {
  // Arrange
  const input = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0]
  ];
  const expected = [2, 0];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - mina en esquina inferior derecha', () => {
  // Arrange
  const input = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
  ];
  const expected = [2, 2];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 1x1 con mina', () => {
  // Arrange
  const input = [[1]];
  const expected = [0, 0];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 2x2 con mina en posición [1, 0]', () => {
  // Arrange
  const input = [
    [0, 0],
    [1, 0]
  ];
  const expected = [1, 0];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 4x4 con mina en posición [2, 3]', () => {
  // Arrange
  const input = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
  ];
  const expected = [2, 3];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 5x5 con mina en el centro exacto', () => {
  // Arrange
  const input = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  const expected = [2, 2];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 6x6 con mina en posición [5, 4]', () => {
  // Arrange
  const input = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0]
  ];
  const expected = [5, 4];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 4x4 con mina en borde superior medio', () => {
  // Arrange
  const input = [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  const expected = [0, 1];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

test('find-the-mine - grid 4x4 con mina en borde izquierdo medio', () => {
  // Arrange
  const input = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  const expected = [2, 0];
  
  // Act
  const result = FindTheMine(input);
  
  // Assert
  assert.deepStrictEqual(result, expected);
});

