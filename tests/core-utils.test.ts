import { CoreUtils } from '../src/core-utils';

describe('CoreUtils', () => {
  describe('isPositiveNumber', () => {
    it('should return true for positive numbers', () => {
      expect(CoreUtils.isPositiveNumber(5)).toBe(true);
      expect(CoreUtils.isPositiveNumber(0.1)).toBe(true);
    });

    it('should return false for non-positive numbers', () => {
      expect(CoreUtils.isPositiveNumber(0)).toBe(false);
      expect(CoreUtils.isPositiveNumber(-5)).toBe(false);
    });

    it('should return false for non-finite numbers', () => {
      expect(CoreUtils.isPositiveNumber(NaN)).toBe(false);
      expect(CoreUtils.isPositiveNumber(Infinity)).toBe(false);
    });
  });

  describe('safeAdd', () => {
    it('should correctly add two positive numbers', () => {
      expect(CoreUtils.safeAdd(3, 4)).toBe(7);
      expect(CoreUtils.safeAdd(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should throw error for non-positive numbers', () => {
      expect(() => CoreUtils.safeAdd(0, 5)).toThrow('Both arguments must be positive numbers');
      expect(() => CoreUtils.safeAdd(-3, 4)).toThrow('Both arguments must be positive numbers');
    });
  });
});