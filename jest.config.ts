
export default {
  ...require('./test/jest.common'),
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx,js}'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,tsx,ts}'],
  collectCoverage: false,
};
