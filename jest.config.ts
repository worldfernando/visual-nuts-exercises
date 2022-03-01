
export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'cobertura'],
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
