module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of paths to directories that Jest should use to search for files
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // An array of regexp pattern strings that are matched against all test paths
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};