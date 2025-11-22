/**
 * Script para actualizar automáticamente todos los archivos de datos
 * agregando precio_efectivo y precio_transferencia
 *
 * Uso: node scripts/update-prices.js
 */

const fs = require('fs');
const path = require('path');

// Directorio de categorías
const categoriesDir = path.join(__dirname, '../src/data/categories');

// Archivos a procesar
const categoryFiles = [
  'aperitivos.ts',
  'cervezas.ts',
  'champan.ts',
  'gin.ts',
  'promociones.ts',
  'sin-alcohol.ts',
  'vodkas.ts',
  'vinos.ts',
  'whiskys.ts'
];

function updateCategoryFile(filePath) {
  console.log(`Procesando: ${path.basename(filePath)}`);

  let content = fs.readFileSync(filePath, 'utf-8');

  // Patrón para encontrar objetos de bebidas
  const drinkPattern = /({[\s\S]*?precioVenta:\s*"([\d.]+)"[\s\S]*?})/g;

  let matches = [];
  let match;
  while ((match = drinkPattern.exec(content)) !== null) {
    matches.push({
      fullMatch: match[1],
      precio: match[2],
      index: match.index
    });
  }

  // Procesar de atrás hacia adelante para no afectar los índices
  matches.reverse().forEach(matchInfo => {
    const { fullMatch, precio } = matchInfo;

    // Verificar si ya tiene precio_efectivo
    if (fullMatch.includes('precio_efectivo')) {
      return; // Ya procesado
    }

    // Calcular precio transferencia (aproximadamente 5% de descuento)
    const precioNum = parseFloat(precio.replace(/\./g, ''));
    const precioTransferencia = Math.round(precioNum * 0.95);
    const precioTransferenciaStr = precioTransferencia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Reemplazar el precioVenta con precioVenta + precio_efectivo + precio_transferencia
    const updated = fullMatch.replace(
      /precioVenta:\s*"([\d.]+)"/,
      `precioVenta: "$1",\n    precio_efectivo: "$1",\n    precio_transferencia: "${precioTransferenciaStr}"`
    );

    content = content.replace(fullMatch, updated);
  });

  // Guardar archivo actualizado
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Actualizado: ${path.basename(filePath)}`);
}

// Procesar todos los archivos
console.log('Iniciando actualización de precios...\n');

categoryFiles.forEach(file => {
  const filePath = path.join(categoriesDir, file);
  if (fs.existsSync(filePath)) {
    updateCategoryFile(filePath);
  } else {
    console.log(`⚠ No encontrado: ${file}`);
  }
});

console.log('\n✓ Actualización completada!');
