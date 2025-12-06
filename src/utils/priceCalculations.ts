export type PaymentMethod = 'efectivo' | 'transferencia';

export interface PriceInfo {
  currentPrice: string;
  previousPrice?: string;
  discountPercentage?: number;
}

/**
 * Calcula el precio y descuento basado en el método de pago
 * El descuento se calcula desde precio_transferencia a precio_efectivo
 * Solo se muestra cuando el método de pago es 'efectivo'
 * @param precio_efectivo - Precio en efectivo
 * @param precio_transferencia - Precio por transferencia
 * @param paymentMethod - Método de pago seleccionado
 * @returns Información de precio con descuento calculado automáticamente
 */
export function calculatePriceByPaymentMethod(
  precio_efectivo: string,
  precio_transferencia: string,
  paymentMethod: PaymentMethod
): PriceInfo {
  const currentPrice = paymentMethod === 'efectivo' ? precio_efectivo : precio_transferencia;

  // El descuento solo se muestra cuando se paga en efectivo
  if (paymentMethod !== 'efectivo') {
    return {
      currentPrice,
      previousPrice: undefined,
      discountPercentage: undefined
    };
  }

  // Calcular el descuento desde precio_transferencia a precio_efectivo
  const precioTransferenciaNum = parseFloat(precio_transferencia.replace(/[^\d]/g, ''));
  const precioEfectivoNum = parseFloat(precio_efectivo.replace(/[^\d]/g, ''));

  // El descuento solo se muestra cuando el precio de transferencia es mayor al de efectivo
  const hasDiscount = precioTransferenciaNum > precioEfectivoNum;

  if (!hasDiscount) {
    return {
      currentPrice,
      previousPrice: undefined,
      discountPercentage: undefined
    };
  }

  // Calcular el porcentaje de descuento desde transferencia a efectivo
  const discountPercentage = precioTransferenciaNum > 0
    ? Math.round(((precioTransferenciaNum - precioEfectivoNum) / precioTransferenciaNum) * 100 * 10) / 10
    : 0;

  return {
    currentPrice,
    previousPrice: precio_transferencia,
    discountPercentage: discountPercentage > 0 ? discountPercentage : undefined
  };
}
