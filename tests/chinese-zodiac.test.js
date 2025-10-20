import { test } from 'node:test';
import assert from 'node:assert';
import { ChineseZodiac } from '../challenges/chinese-zodiac.js';

test('chinese-zodiac - año base 1984 es Wood Rat', () => {
  // Arrange
  const year = 1984;
  const expected = "Wood Rat";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - ejemplo de la descripción 1998', () => {
  // Arrange
  const year = 1998;
  const expected = "Earth Tiger";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1924 al inicio del epoch', () => {
  // Arrange
  const year = 1924;
  const expected = "Wood Rat";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1985 es Wood Ox', () => {
  // Arrange
  const year = 1985;
  const expected = "Wood Ox";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1986 es Fire Tiger', () => {
  // Arrange
  const year = 1986;
  const expected = "Fire Tiger";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1987 es Fire Rabbit', () => {
  // Arrange
  const year = 1987;
  const expected = "Fire Rabbit";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1988 es Earth Dragon', () => {
  // Arrange
  const year = 1988;
  const expected = "Earth Dragon";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1989 es Earth Snake', () => {
  // Arrange
  const year = 1989;
  const expected = "Earth Snake";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1990 es Metal Horse', () => {
  // Arrange
  const year = 1990;
  const expected = "Metal Horse";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1991 es Metal Goat', () => {
  // Arrange
  const year = 1991;
  const expected = "Metal Goat";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1992 es Water Monkey', () => {
  // Arrange
  const year = 1992;
  const expected = "Water Monkey";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1993 es Water Rooster', () => {
  // Arrange
  const year = 1993;
  const expected = "Water Rooster";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1994 es Wood Dog', () => {
  // Arrange
  const year = 1994;
  const expected = "Wood Dog";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1995 es Wood Pig', () => {
  // Arrange
  const year = 1995;
  const expected = "Wood Pig";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1996 completa el ciclo con Fire Rat', () => {
  // Arrange
  const year = 1996;
  const expected = "Fire Rat";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 2000 es Metal Dragon', () => {
  // Arrange
  const year = 2000;
  const expected = "Metal Dragon";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 2020 es Metal Rat', () => {
  // Arrange
  const year = 2020;
  const expected = "Metal Rat";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 2024 es Wood Dragon', () => {
  // Arrange
  const year = 2024;
  const expected = "Wood Dragon";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - verifica ciclo completo de 60 años desde 1984 a 2044', () => {
  // Arrange
  const year = 2044;
  const expected = "Wood Rat"; // Mismo que 1984
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 2010 es Metal Tiger', () => {
  // Arrange
  const year = 2010;
  const expected = "Metal Tiger";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

test('chinese-zodiac - año 1925 es Wood Ox', () => {
  // Arrange
  const year = 1925;
  const expected = "Wood Ox";
  
  // Act
  const result = ChineseZodiac(year);
  
  // Assert
  assert.strictEqual(result, expected);
});

