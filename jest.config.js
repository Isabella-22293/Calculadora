export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Descomenta si creas setupTests.js
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: [
    '**/src/tests/**/*.[jt]s?(x)',  
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ]
};


