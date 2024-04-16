import { defaults } from './defaults'

export const permissions = {
  permissionsList: {
    ...defaults.methods.GET,
    uri: '/api/permission'
  }
}
