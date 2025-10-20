/**
 * chinese-zodiac
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
export function ChineseZodiac(input) {
    let animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
    let elements = ["Wood", "Fire", "Earth", "Metal", "Water"]
    let elementIndex = 0
    let animalIndex = 0

    if (input !== 1924) {
        for (let i = 1925; i <= input; i++) {
            elementIndex = elementIndex + 0.5
            if (elementIndex === elements.length) {
                elementIndex = 0
            }
            animalIndex = animalIndex + 1
            if (animalIndex === animals.length) {
                animalIndex = 0
            }
        }
    }

    if (elementIndex % 1 != 0) {
        elementIndex = Math.floor(elementIndex)
    }

    return `${elements[elementIndex]} ${animals[animalIndex]}`




}

/**
 * Complejidad:
 * - Tiempo: O(?)
 * - Espacio: O(?)
 */

