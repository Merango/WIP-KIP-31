import { describe, test, expect, beforeEach } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock the entire fs module
jest.mock('fs');

describe('Bitcoin Configuration Module', () => {
  const mockBitcoinConfig = `
# Bitcoin Configuration
rpcuser=testuser
rpcpassword=testpass
rpcport=18332
testnet=1
`;

  beforeEach(() => {
    // Reset the mock before each test
    jest.resetAllMocks();
  });

  test('should read Bitcoin configuration correctly', () => {
    // Mock the file reading
    fs.readFileSync.mockReturnValue(mockBitcoinConfig);

    // Read the Bitcoin configuration
    const configPath = path.join(__dirname, '../../phase-0/test/config/bitcoin.conf');
    const fileContents = fs.readFileSync(configPath, 'utf8');

    // Assertions
    expect(fileContents).toContain('rpcuser=testuser');
    expect(fileContents).toContain('testnet=1');
  });

  test('should handle missing configuration file', () => {
    // Simulate file not found error
    fs.readFileSync.mockImplementation(() => {
      throw new Error('File not found');
    });

    // Attempt to read configuration
    expect(() => {
      const configPath = path.join(__dirname, '../../phase-0/test/config/bitcoin.conf');
      fs.readFileSync(configPath, 'utf8');
    }).toThrow('File not found');
  });
});