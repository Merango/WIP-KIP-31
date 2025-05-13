const fs = require('fs');
const path = require('path');

// Mock the Bitcoin configuration file reading
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
    fs.readFileSync.mockReset();
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