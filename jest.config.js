/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.js'],
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  // Ensure proper handling of ES modules
  transformIgnorePatterns: [
    'node_modules/(?!js-yaml)/'
  ]
};