# Generador de Códigos QR

Script en Node.js para generar códigos QR a partir de URLs. Al escanear el código QR generado, podrás acceder directamente a la página web.

## Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## Uso

### Sintaxis básica

```bash
node generate-qr.js <URL>
```

### Ejemplos

```bash
# Generar QR para Google
node generate-qr.js https://google.com

# Generar QR para tu sitio web
node generate-qr.js https://misitio.com

# Generar QR para la carta del restaurante
node generate-qr.js https://carta-restaurante.com
```

## Características

- Validación automática de URLs
- Código QR de alta calidad (500x500px)
- Nivel de corrección de errores: Alto (H)
- Formato de salida: PNG
- Nombre de archivo con timestamp para evitar sobrescrituras

## Salida

Los códigos QR se guardan en el mismo directorio con el formato:
```
qr-YYYY-MM-DDTHH-MM-SS-mmmZ.png
```

## Notas

- Asegúrate de incluir el protocolo en el URL (http:// o https://)
- El código QR se puede escanear con cualquier aplicación de cámara o lector QR
- La calidad es óptima para impresión
