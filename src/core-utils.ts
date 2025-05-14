/**
 * Core utility functions for the KIP-31 project
 */
export class CoreUtils {
  /**
   * Validates if a value is a positive number
   * @param value Number to validate
   * @returns Boolean indicating if the value is a positive number
   */
  static isPositiveNumber(value: number): boolean {
    return typeof value === 'number' && value > 0;
  }

  /**
   * Safely adds two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of the two numbers
   * @throws Error if inputs are not valid numbers
   */
  static safeAdd(a: number, b: number): number {
    if (!this.isPositiveNumber(a) || !this.isPositiveNumber(b)) {
      throw new Error('Invalid input: both arguments must be positive numbers');
    }
    return a + b;
  }
}