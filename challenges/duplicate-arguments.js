/**
 * duplicate-arguments
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

  
  export function solution(...args){
    for(let i = 0; i < args.length; i++){
      if(args.indexOf(args[i], i +1) !== -1){
        return true
      }
    }
    return false
  }

  


/**
 * Complejidad:
 * - Tiempo: O(?)
 * - Espacio: O(?)
 */

