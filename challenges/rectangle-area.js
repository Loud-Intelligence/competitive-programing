/**
 * rectangle-area
 * 
 * Descripción:
 * TODO: Describe el problema aquí
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
export function RectangleArea(diagonal, side) {
  
  if(diagonal <= side) return "Not a rectangle"

  let area = Math.sqrt((diagonal ** 2) - (side ** 2)) * side

  return parseFloat(area.toFixed(2))
  
}


/**
 * Complejidad:
 * - Tiempo: O(?)
 * - Espacio: O(?)
 */
