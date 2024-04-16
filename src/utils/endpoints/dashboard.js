import { defaults } from './defaults'

export const dashboard = {
  dashboardDetails: {
    ...defaults.methods.GET,
    uri: '/api/dashboard'
  }
}
