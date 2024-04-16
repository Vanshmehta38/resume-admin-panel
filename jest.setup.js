import '@testing-library/jest-dom'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

global.console.warn = jest.fn(() => {})
