/**
 * Core module for KIP-31 project
 * Provides basic utility functions for testing
 */
export default class CoreModule {
  /**
   * Validates input data
   * @param {*} input - Input to validate
   * @returns {boolean} Whether input is valid
   */
  static validateInput(input) {
    if (input === null || input === undefined) {
      return false;
    }
    
    if (typeof input === 'string' && input.trim() === '') {
      return false;
    }
    
    return true;
  }
  
  /**
   * Processes input data
   * @param {*} input - Input to process
   * @returns {*} Processed input
   * @throws {Error} If input is invalid
   */
  static processInput(input) {
    if (!this.validateInput(input)) {
      throw new Error('Invalid input');
    }
    
    return input;
  }
}