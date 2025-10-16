/**
 * Two Sum
 * 
 * Descripción:
 * Dado un array de enteros 'nums' y un entero 'target', devuelve los índices
 * de los dos números que suman el target.
 * 
 * Puedes asumir que cada input tiene exactamente una solución, y no puedes
 * usar el mismo elemento dos veces.
 * 
 * Ejemplo 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explicación: nums[0] + nums[1] == 9, retornamos [0, 1]
 * 
 * Ejemplo 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Restricciones:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Solo existe una solución válida
 */

/**
 * Solución usando Hash Map (óptima)
 * @param {number[]} nums - Array de números
 * @param {number} target - Suma objetivo
 * @return {number[]} - Índices de los dos números
 */
export function twoSum(nums, target) {
  const seen = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    
    seen.set(nums[i], i);
  }
  
  return []; // No debería llegar aquí según las restricciones
}

/**
 * Complejidad:
 * - Tiempo: O(n) - Una sola pasada por el array
 * - Espacio: O(n) - Hash map puede almacenar hasta n elementos
 */

/**
 * Solución alternativa usando fuerza bruta (no óptima)
 * Solo para referencia educativa
 */
export function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * Complejidad de la solución bruta:
 * - Tiempo: O(n²) - Dos loops anidados
 * - Espacio: O(1) - No usa espacio adicional
 */

