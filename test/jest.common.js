/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/pages/'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^~(.*)$': '<rootDir>/src$1',
  },
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',
  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: true,
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'svg', 'png', 'jpg', 'css'],
  // Activates notifications for test results
  notify: true,
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/.next/', 'server'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
  // Indicates whether each individual test should be reported during the run
  // verbose: true,
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'test', // a utility folder
    __dirname, // the root directory
  ],
};
