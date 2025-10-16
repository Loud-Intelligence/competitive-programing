# Competitive Programming 🚀

Repositorio de problemas de programación competitiva resueltos en JavaScript usando Node.js.

## 📋 Características

- ✅ **Sin dependencias externas** - Solo Node.js nativo (v18+)
- ⚡ **Test runner nativo** - Extremadamente rápido
- 🎯 **Generación automática** - Crea nuevos challenges en segundos
- 📁 **Estructura organizada** - Código y tests separados
- 🧪 **Testing robusto** - Node.js test runner con assertions

## 🚀 Inicio Rápido

### Requisitos
- Node.js >= 18.0.0

### Instalación
```bash
# No hay dependencias que instalar!
# Solo clona y comienza a usar
```

## 📝 Uso

### Crear un nuevo challenge
```bash
npm run new nombre-del-challenge
```

Ejemplo:
```bash
npm run new binary-search
```

Esto creará automáticamente:
- `challenges/binary-search.js` - Tu solución
- `tests/binary-search.test.js` - Tests del challenge

### Ejecutar tests
```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch (se re-ejecutan al guardar)
npm run test:watch
```

### Ejecutar un test específico
```bash
node --test tests/two-sum.test.js
```

## 📂 Estructura del Proyecto

```
competitive-programming/
├── challenges/          # Soluciones de los problemas
│   ├── two-sum.js
│   └── ...
├── tests/              # Tests para cada challenge
│   ├── two-sum.test.js
│   └── ...
├── templates/          # Templates para nuevos challenges
│   ├── challenge.template.js
│   └── test.template.js
├── bin/                # Scripts de utilidad
│   └── new-challenge.js
├── package.json
└── README.md
```

## 🎯 Ejemplo: Two Sum

### Challenge (`challenges/two-sum.js`)
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
  
  return [];
}
```

### Test (`tests/two-sum.test.js`)
```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import { twoSum } from '../challenges/two-sum.js';

test('two-sum - caso básico', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];
  
  const result = twoSum(nums, target);
  
  assert.deepStrictEqual(result, expected);
});
```

## 💡 Mejores Prácticas

### Al escribir soluciones:
1. **Documenta bien** - Incluye descripción, ejemplos y restricciones
2. **Analiza complejidad** - Especifica tiempo y espacio (Big O)
3. **Código limpio** - Usa nombres descriptivos y comentarios cuando sea necesario
4. **Múltiples soluciones** - Implementa diferentes enfoques cuando sea útil

### Al escribir tests:
1. **Casos básicos** - Los ejemplos principales del problema
2. **Edge cases** - Arrays vacíos, elementos únicos, límites
3. **Casos extremos** - Números grandes/pequeños, longitudes máximas
4. **Nombres descriptivos** - Cada test debe explicar qué valida

## 🎓 Workflow Recomendado

1. **Crear el challenge**
   ```bash
   npm run new problema-name
   ```

2. **Entender el problema**
   - Lee y comprende la descripción en el template generado
   - Identifica inputs, outputs y restricciones

3. **Escribir tests primero** (TDD)
   - Comienza con casos básicos
   - Agrega edge cases
   - Ejecuta: `npm run test:watch`

4. **Implementar la solución**
   - Comienza con la solución más simple (aunque no sea óptima)
   - Haz que pasen los tests
   - Refactoriza y optimiza

5. **Documentar**
   - Completa la documentación
   - Agrega análisis de complejidad
   - Considera soluciones alternativas

## 🔥 Comandos Útiles

```bash
# Crear nuevo challenge
npm run new <nombre>

# Ejecutar todos los tests
npm test

# Tests en modo watch (recomendado durante desarrollo)
npm run test:watch

# Ejecutar test específico
node --test tests/<nombre>.test.js

# Ver cobertura (Node.js 20+)
node --test --experimental-test-coverage tests/**/*.test.js
```

## 📚 Recursos

- [Node.js Test Runner](https://nodejs.org/api/test.html)
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Codeforces](https://codeforces.com/)
- [AtCoder](https://atcoder.jp/)

## 📄 Licencia

MIT

---

**Happy Coding! 🎉**
