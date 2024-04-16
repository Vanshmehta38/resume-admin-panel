import { defaults } from './defaults'

export const roles = {
  roleList: {
    ...defaults.methods.GET,
    uri: '/api/role'
  },

  addRole: {
    ...defaults.methods.POST,
    uri: '/api/role'
  },

  viewRole: {
    ...defaults.methods.GET,
    uri: '/api/role/:id'
  },

  viewEmployeeByRoles: {
    ...defaults.methods.GET,
    uri: '/api/role-employee/:id'
  },

  updateRole: {
    ...defaults.methods.PUT,
    uri: '/api/role/:id'
  },

  deleteRole: {
    ...defaults.methods.DELETE,
    uri: '/api/role/:id'
  }
}
