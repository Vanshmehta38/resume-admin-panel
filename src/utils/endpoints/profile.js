import { defaults } from './defaults'

export const profile = {
  viewProfile: {
    ...defaults.methods.GET,
    uri: '/api/admin/:id'
  },

  updatePassword: {
    ...defaults.methods.PATCH,
    uri: '/api/admin-update-password/:id'
  }
}
