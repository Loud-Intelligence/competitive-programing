/**
 * oldest-youngest
 * 
 * Descripción:
 * At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
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
export function OldestYoungest(input) {

  const orderedArray = input.sort(function(a, b){return a - b})
  return [orderedArray[0], orderedArray[orderedArray.length - 1], orderedArray[orderedArray.length - 1] - orderedArray[0]]
  
}
