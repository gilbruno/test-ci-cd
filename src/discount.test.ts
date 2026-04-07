import { describe, it, expect } from 'vitest'
import { calculateDiscount } from './discount'

describe('calculateDiscount()', () => {
  it('calcul avec 20% sur 100 retourne 80', () => {
    expect(calculateDiscount(100, 20)).toBe(80)
  })

  it('remise de 0% retourne le prix original', () => {
    expect(calculateDiscount(150, 0)).toBe(150)
  })

  it('remise de 100% retourne 0', () => {
    expect(calculateDiscount(200, 100)).toBe(0)
  })

  it('prix de 0 retourne 0', () => {
    expect(calculateDiscount(0, 50)).toBe(0)
  })

  it('prix negatif lance une exception', () => {
    expect(() => calculateDiscount(-10, 20)).toThrow('Price must be non-negative')
  })

  it('remise > 100% lance une exception', () => {
    expect(() => calculateDiscount(100, 110)).toThrow('Discount must be between 0 and 100')
  })

  it('remise negative lance une exception', () => {
    expect(() => calculateDiscount(100, -5)).toThrow('Discount must be between 0 and 100')
  })
})
