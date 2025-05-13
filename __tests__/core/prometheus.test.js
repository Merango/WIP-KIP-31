const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Mock the Prometheus configuration file reading
jest.mock('fs');
jest.mock('js-yaml');

describe('Prometheus Configuration Module', () => {
  const mockPrometheusConfig = `
global:
  scrape_interval: 15s
scrapes:
  - job_name: 'bitcoin_node'
    static_configs:
      - targets: ['localhost:9090']
`;

  beforeEach(() => {
    // Reset the mocks before each test
    fs.readFileSync.mockReset();
    yaml.load.mockReset();
  });

  test('should parse Prometheus configuration correctly', () => {
    // Mock the file reading and YAML parsing
    fs.readFileSync.mockReturnValue(mockPrometheusConfig);
    yaml.load.mockReturnValue(yaml.load(mockPrometheusConfig));

    // Read the Prometheus configuration
    const configPath = path.join(__dirname, '../../phase-0/test/config/prometheus.yml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const parsedConfig = yaml.load(fileContents);

    // Assertions
    expect(parsedConfig.global.scrape_interval).toBe('15s');
    expect(parsedConfig.scrapes[0].job_name).toBe('bitcoin_node');
  });

  test('should handle invalid YAML configuration', () => {
    // Simulate invalid YAML error
    fs.readFileSync.mockReturnValue('invalid: yaml: config');
    yaml.load.mockImplementation(() => {
      throw new Error('Invalid YAML');
    });

    // Attempt to parse configuration
    expect(() => {
      const configPath = path.join(__dirname, '../../phase-0/test/config/prometheus.yml');
      const fileContents = fs.readFileSync(configPath, 'utf8');
      yaml.load(fileContents);
    }).toThrow('Invalid YAML');
  });
});