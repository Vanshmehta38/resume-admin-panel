import { defaults } from './defaults'

export const admins = {
  adminsList: {
    ...defaults.methods.GET,
    uri: '/api/admin'
  },

  addAdmins: {
    ...defaults.methods.POST,
    uri: '/api/admin'
  },

  viewAdmins: {
    ...defaults.methods.GET,
    uri: '/api/admin/:adminsId'
  },

  updateAdmins: {
    ...defaults.methods.PUT,
    uri: '/api/admin/:adminsId'
  },

  deleteAdmins: {
    ...defaults.methods.DELETE,
    uri: '/api/admin/:adminsId'
  },

  updateAdminsStatus: {
    ...defaults.methods.PATCH,
    uri: '/api/admin-update-status/:adminsId'
  },

  updateAdminsPassword: {
    ...defaults.methods.PATCH,
    uri: '/api/admin-update-password/:adminsId'
  }
}
