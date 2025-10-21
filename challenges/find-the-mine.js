/**
 * find-the-mine
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
export function FindTheMine(input) {
  
  for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
      if(input[i][j] === 1){
        return [i, j];
      }
    }
  }

}

/**
 * Complejidad:
 * - Tiempo: O(?)
 * - Espacio: O(?)
 */

