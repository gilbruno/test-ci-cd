// Copie du TP1 — code de base pour le TP5

export function calculateDiscount(
  price: number,              // prix HT en euros
  discountPercentage: number  // remise en % (0-100)
): number {
  //test price < 0
  if (price < 0) {
    throw new Error('Price must be non-negative')
  }
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Discount must be between 0 and 100')
  }
  return Math.round(price * (1 - discountPercentage / 100) * 100) / 100
}
