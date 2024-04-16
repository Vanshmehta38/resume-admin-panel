import { defaults } from './defaults'

export const authentication = {
  login: {
    ...defaults.methods.POST,
    uri: '/api/login'
  },

  verifyToken: {
    ...defaults.methods.GET,
    uri: '/api/verify-token'
  },

  refreshToken: {
    ...defaults.methods.POST,
    uri: '/api/get-refresh-token'
  },

  mobileNumberVerification: {
    ...defaults.methods.POST,
    uri: '/api/mobile-number-verification'
  },

  otpVerification: {
    ...defaults.methods.POST,
    uri: '/api/verify-otp'
  },

  emailVerification: {
    ...defaults.methods.POST,
    uri: '/api/forgot-password'
  },

  resendOtp: {
    ...defaults.methods.POST,
    uri: '/api/resend-otp'
  },

  resetPassword: {
    ...defaults.methods.PATCH,
    uri: '/api/update-password'
  },

  logout: {
    ...defaults.methods.PATCH,
    uri: '/api/logout/:u_id'
  },

  clearCookies: {
    ...defaults.methods.GET,
    uri: '/api/clear-cookies'
  }
}
