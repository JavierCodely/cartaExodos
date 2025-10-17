const QRCode = require('qrcode');

// Obtener el URL del argumento de línea de comandos
const url = process.argv[2];

if (!url) {
  console.error('❌ Error: Debes proporcionar un URL');
  console.log('\nUso: node generate-qr.js <URL>');
  console.log('Ejemplo: node generate-qr.js https://google.com');
  process.exit(1);
}

// Validar que sea un URL válido
try {
  new URL(url);
} catch (error) {
  console.error('❌ Error: El URL proporcionado no es válido');
  console.log('Asegúrate de incluir el protocolo (http:// o https://)');
  process.exit(1);
}

// Generar nombre del archivo basado en timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const filename = `qr-${timestamp}.png`;
const outputPath = `./${filename}`;

// Opciones para el QR
const options = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.95,
  margin: 1,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  width: 500
};

// Generar el código QR
QRCode.toFile(outputPath, url, options, (err) => {
  if (err) {
    console.error('❌ Error al generar el código QR:', err);
    process.exit(1);
  }

  console.log('✅ Código QR generado exitosamente!');
  console.log(`📱 URL: ${url}`);
  console.log(`💾 Archivo: ${outputPath}`);
  console.log('\nEscanea el código QR para acceder a la página.');
});
