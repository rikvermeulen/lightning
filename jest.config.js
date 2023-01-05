const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'app'],
  setupFilesAfterEnv: ['<rootDir>/app/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
};

module.exports = createJestConfig(customJestConfig);
