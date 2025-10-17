# Sistema de Auto-Generación de IDs

Este sistema elimina la necesidad de asignar manualmente IDs a cada bebida. Las IDs se generan automáticamente cuando se cargan los datos.

## Cómo funciona

### 1. Agregar nuevas bebidas

Para agregar una nueva bebida, simplemente añádela al archivo de su categoría **sin especificar el campo `id`**:

```typescript
// src/data/categories/combos.ts
export const combosData: DrinkWithoutId[] = [
  {
    // NO incluyas 'id' aquí
    name: 'NUEVO COMBO',
    description: 'Descripción del combo',
    precioVenta: "30.000",
    category: 'Combos',
    image: '/img/nuevo.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  // Con descuento (opcional)
  {
    name: 'COMBO EN OFERTA',
    description: 'Combo con descuento especial',
    precioVenta: "25.000",
    precioAnterior: "35.000",  // Precio antes del descuento
    porcentajeDescuento: 30,   // % de descuento
    category: 'Combos',
    image: '/img/oferta.png',
    isPopular: true,
    alcoholContent: '100%'
  }
];
```

### 2. Las IDs se asignan automáticamente

El sistema asigna IDs secuenciales comenzando desde 1:
- Combos: IDs 1-9
- Aperitivos: IDs 10-11
- Sin alcohol: IDs 12-16
- Vinos: IDs 17-18
- Vodkas: IDs 19-21
- Cervezas: IDs 22-25
- Gin: IDs 26+
- Champán: IDs según cantidad de bebidas

Cuando agregues o elimines bebidas, las IDs se reajustan automáticamente.

### 3. Orden de las bebidas

El orden de las bebidas en el array determina su ID:
- Primera bebida en `combosData` → ID: "1"
- Segunda bebida en `combosData` → ID: "2"
- Y así sucesivamente...

## Ventajas

1. **No más IDs inconsistentes**: Olvídate de IDs como '444444', '27', etc.
2. **Sin conflictos**: Las IDs nunca se duplican
3. **Mantenimiento simple**: Solo agrega/elimina bebidas sin preocuparte por las IDs
4. **Escalable**: Funciona sin importar cuántas bebidas agregues

## Sistema de precios y descuentos

### Campos de precio

Cada bebida tiene los siguientes campos relacionados con el precio:

- **precioVenta** (requerido): Precio actual de venta
- **precioAnterior** (opcional): Precio antes del descuento
- **porcentajeDescuento** (opcional): Porcentaje de descuento

### Cómo mostrar descuentos

Si un producto tiene **precioAnterior** Y **porcentajeDescuento > 0**, se mostrará:

1. Badge verde neón con el porcentaje: "30% OFF"
2. Precio anterior tachado en rojo
3. Precio de venta destacado

Ejemplo de producto en oferta:
```typescript
{
  name: 'VODKA EN OFERTA',
  description: 'Vodka con descuento especial',
  precioVenta: "20.000",
  precioAnterior: "28.000",
  porcentajeDescuento: 30,
  category: 'Vodkas',
  image: '/img/vodka-oferta.png',
  isPopular: true
}
```

## Archivos del sistema

- `utils.ts`: Contiene las funciones de auto-generación de IDs
- `index.ts`: Combina todas las categorías y aplica las IDs
- `[categoria].ts`: Archivos de cada categoría sin IDs manuales
