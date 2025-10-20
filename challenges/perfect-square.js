/**
 * perfect-square
 * 
 * Descripción:
 * Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
 * 
 * Ejemplo:
 * Input: 
 * Output: 
 * 
 * Restricciones:
 * TODO: Agregar restricciones
 */

/**
 * @param {any} input - Parámetros del problema
 * @return {any} - Resultado del problema
 */
export function PerfectSquare(input) {

  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (ch !== '.' && ch !== '\n') {
      return false;
    }
  }

  const lines = input.split('\n');

  if (lines.length === 0) {
    return false;
  }

  const size = lines[0].length;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length !== size) {
      return false;
    }
  }

  if (lines.length !== size) {
    return false;
  }


  return true;
}

/**
 * Complejidad:
 * - Tiempo: O(?)
 * - Espacio: O(?)
 */

