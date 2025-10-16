/**
 * Keep Hydrated!
 * 
 * Descripción:
 * Nathan loves cycling.
 * Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
 * You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 * 
 * Ejemplo:
 * Input: time = 3
 * Output: 1
 * 
 * Restricciones:
 * time will be a positive integer.
 * time is in hours.
 * The result will be an integer.
 */

/**
 * @param {any} input - Parámetros del problema
 * @return {any} - Resultado del problema
 */
export function keepHydrated(time) {
  const exact = time * 0.5

  const trash = exact % 1

  return exact - trash
}
  
/**
 * Complejidad:
 * - Tiempo: O(1)
 * - Espacio: O(1)
 */
  