import { defaults } from './defaults'

export const basic = {
  viewBasic: {
    ...defaults.methods.GET,
    uri: '/api/settings'
  },

  updateSetting: {
    ...defaults.methods.PUT,
    uri: '/api/settings'
  }
}
