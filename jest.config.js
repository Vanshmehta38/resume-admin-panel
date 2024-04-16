const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@images/(.*)$': '<rootDir>/public/images/$1',
    '^@json/(.*)$': '<rootDir>/json/$1',
    '^@styles-page/(.*)$': '<rootDir>/src/styles-page/$1',
    '^@styles-layout/(.*)$': '<rootDir>/src/styles-layout/$1',
    '^@breadcrumbs/(.*)$': '<rootDir>/src/utils/breadcrumbs/$1',
    '^@validations/(.*)$': '<rootDir>/src/utils/validations/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@functions/(.*)$': '<rootDir>/src/utils/custom-functions/$1',
    '^@api/(.*)$': '<rootDir>/src/utils/api-routes/$1',
    '^@strings$': '<rootDir>/src/constants/strings',
    '^@patterns$': '<rootDir>/src/constants/patterns',
    '^@routes$': '<rootDir>/src/constants/routes',
    '^@currency$': '<rootDir>/src/constants/currency',
    '^@colors$': '<rootDir>/src/constants/color',
    '^@useAuth$': '<rootDir>/src/hooks/use-auth',
    '^@endpoints/(.*)$': '<rootDir>/src/utils/endpoints/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@utils/(.*)$': '<rootDir>/src/@core/utils/$1',
    '^@components/(.*)$': '<rootDir>/src/@core/components/$1',
    '^@config$': '<rootDir>/config'
  },    

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
