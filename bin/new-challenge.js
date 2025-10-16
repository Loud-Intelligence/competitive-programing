#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Obtener el nombre del challenge de los argumentos
const challengeName = process.argv[2];

if (!challengeName) {
  console.error('❌ Error: Debes proporcionar un nombre para el challenge');
  console.log('📝 Uso: npm run new <nombre-del-challenge>');
  console.log('📝 Ejemplo: npm run new two-sum');
  process.exit(1);
}

// Normalizar el nombre (kebab-case)
const normalizedName = challengeName.toLowerCase().replace(/\s+/g, '-');

// Convertir a PascalCase para el nombre de la función
const functionName = normalizedName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// Rutas de archivos
const challengePath = join(projectRoot, 'challenges', `${normalizedName}.js`);
const testPath = join(projectRoot, 'tests', `${normalizedName}.test.js`);

// Verificar si ya existe
if (existsSync(challengePath)) {
  console.error(`❌ Error: El challenge "${normalizedName}" ya existe`);
  process.exit(1);
}

// Crear directorios si no existen
await mkdir(join(projectRoot, 'challenges'), { recursive: true });
await mkdir(join(projectRoot, 'tests'), { recursive: true });

// Leer templates
const challengeTemplate = await readFile(
  join(projectRoot, 'templates', 'challenge.template.js'),
  'utf-8'
);
const testTemplate = await readFile(
  join(projectRoot, 'templates', 'test.template.js'),
  'utf-8'
);

// Reemplazar placeholders
const challengeContent = challengeTemplate
  .replace(/CHALLENGE_NAME/g, normalizedName)
  .replace(/FUNCTION_NAME/g, functionName);

const testContent = testTemplate
  .replace(/CHALLENGE_NAME/g, normalizedName)
  .replace(/FUNCTION_NAME/g, functionName);

// Escribir archivos
await writeFile(challengePath, challengeContent);
await writeFile(testPath, testContent);

console.log('✅ Challenge creado exitosamente!');
console.log('');
console.log(`📁 Challenge: challenges/${normalizedName}.js`);
console.log(`📁 Test: tests/${normalizedName}.test.js`);
console.log('');
console.log('🚀 Siguiente paso:');
console.log(`   1. Implementa la solución en challenges/${normalizedName}.js`);
console.log(`   2. Agrega casos de prueba en tests/${normalizedName}.test.js`);
console.log('   3. Ejecuta: npm test');

