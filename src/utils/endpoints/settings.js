import { defaults } from './defaults'

export const settings = {
  settingView: {
    ...defaults.methods.GET,
    uri: '/api/settings'
  },

  settingEdit: {
    ...defaults.methods.PUT,
    uri: '/api/settings/',
    headerProps: {
      'Content-Type': 'multipart/form-data'
    }
  }
}
