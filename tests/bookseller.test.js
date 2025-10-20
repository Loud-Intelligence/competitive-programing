import test from 'node:test';
import assert from 'node:assert';
import { Bookseller } from '../challenges/bookseller.js';

test('bookseller - ejemplo básico de la descripción', () => {
  // Arrange
  const stocklist = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
  const categories = ["A", "B", "C", "W"];
  const expected = "(A : 20) - (B : 114) - (C : 50) - (W : 0)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - stocklist vacía retorna string vacío', () => {
  // Arrange
  const stocklist = [];
  const categories = ["A", "B"];
  const expected = "";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - categorías vacías retorna string vacío', () => {
  // Arrange
  const stocklist = ["ABART 20", "CDXEF 50"];
  const categories = [];
  const expected = "";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - una sola categoría con un libro', () => {
  // Arrange
  const stocklist = ["ABART 20"];
  const categories = ["A"];
  const expected = "(A : 20)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - categoría sin libros muestra 0', () => {
  // Arrange
  const stocklist = ["ABART 20", "BKWRK 25"];
  const categories = ["A", "Z"];
  const expected = "(A : 20) - (Z : 0)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - múltiples libros de la misma categoría se suman', () => {
  // Arrange
  const stocklist = ["BKWRK 25", "BTSQZ 89", "BCOMP 10"];
  const categories = ["B"];
  const expected = "(B : 124)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - todas las categorías sin libros', () => {
  // Arrange
  const stocklist = ["ABART 20"];
  const categories = ["X", "Y", "Z"];
  const expected = "(X : 0) - (Y : 0) - (Z : 0)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('bookseller - múltiples categorías con múltiples libros', () => {
  // Arrange
  const stocklist = ["ABART 100", "AXYZ 50", "BKWRK 25", "CTEST 75", "CMORE 25"];
  const categories = ["A", "B", "C"];
  const expected = "(A : 150) - (B : 25) - (C : 100)";
  
  // Act
  const result = Bookseller(stocklist, categories);
  
  // Assert
  assert.strictEqual(result, expected);
});

