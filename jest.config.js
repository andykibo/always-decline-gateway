// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.ts'],
  collectCoverage: false,
  testMatch: ['<rootDir>/__test__/**/*spec.ts'],
}