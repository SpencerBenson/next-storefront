module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts','@testing-library/jest-dom'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
      },
      transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.webp$",
        "^.+\\.jpg$"   
        
      ],
    testMatch: ['**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
  };