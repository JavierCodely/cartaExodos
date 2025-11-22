export type PaymentMethod = 'efectivo' | 'transferencia';

export interface PriceInfo {
  currentPrice: string;
  previousPrice?: string;
  discountPercentage?: number;
}

/**
 * Calcula el precio y descuento basado en el método de pago
 * @param precio_efectivo - Precio en efectivo
 * @param precio_transferencia - Precio por transferencia
 * @param precioAnterior - Precio anterior (opcional)
 * @param paymentMethod - Método de pago seleccionado
 * @returns Información de precio con descuento calculado automáticamente
 */
export function calculatePriceByPaymentMethod(
  precio_efectivo: string,
  precio_transferencia: string,
  precioAnterior: string | undefined,
  paymentMethod: PaymentMethod
): PriceInfo {
  const currentPrice = paymentMethod === 'efectivo' ? precio_efectivo : precio_transferencia;

  // Si no hay precio anterior, no hay descuento
  if (!precioAnterior) {
    return {
      currentPrice,
      previousPrice: undefined,
      discountPercentage: undefined
    };
  }

  // Calcular el porcentaje de descuento automáticamente
  const previousPriceNum = parseFloat(precioAnterior.replace(/[^\d]/g, ''));
  const currentPriceNum = parseFloat(currentPrice.replace(/[^\d]/g, ''));

  const discountPercentage = previousPriceNum > 0
    ? Math.round(((previousPriceNum - currentPriceNum) / previousPriceNum) * 100 * 10) / 10
    : 0;

  return {
    currentPrice,
    previousPrice: precioAnterior,
    discountPercentage: discountPercentage > 0 ? discountPercentage : undefined
  };
}
