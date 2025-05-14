import CoreModule from '../src/core-module.js';

describe('CoreModule', () => {
  describe('validateInput', () => {
    test('returns false for null input', () => {
      expect(CoreModule.validateInput(null)).toBe(false);
    });
    
    test('returns false for undefined input', () => {
      expect(CoreModule.validateInput(undefined)).toBe(false);
    });
    
    test('returns false for empty string', () => {
      expect(CoreModule.validateInput('')).toBe(false);
      expect(CoreModule.validateInput('   ')).toBe(false);
    });
    
    test('returns true for valid inputs', () => {
      expect(CoreModule.validateInput('test')).toBe(true);
      expect(CoreModule.validateInput(123)).toBe(true);
      expect(CoreModule.validateInput({})).toBe(true);
    });
  });
  
  describe('processInput', () => {
    test('throws error for invalid input', () => {
      expect(() => CoreModule.processInput(null)).toThrow('Invalid input');
      expect(() => CoreModule.processInput('')).toThrow('Invalid input');
    });
    
    test('returns input for valid input', () => {
      expect(CoreModule.processInput('test')).toBe('test');
      expect(CoreModule.processInput(123)).toBe(123);
    });
  });
});