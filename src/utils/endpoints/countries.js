import { defaults } from './defaults'

export const country = {
  countryList: {
    ...defaults.methods.GET,
    uri: '/api/country'
  },

  addOnBoardCountry: {
    ...defaults.methods.PUT,
    uri: '/api/country/:id'
  },

  updateCountryStatus: {
    ...defaults.methods.PATCH,
    uri: '/api/country/:id'
  },

  updateCountry: {
    ...defaults.methods.PUT,
    uri: '/api/country/:id'
  }
}
