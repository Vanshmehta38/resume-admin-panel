// ** Axios imports
import axios from 'axios'

const getLocationData = async () => {
  const getBackupLocationData = async () => {
    try {
      const response = await axios.get('https://api.ipapi.is/')

      return {
        ip: response?.data?.ip,
        country: response?.data?.location?.country_code,
        city: response?.data?.location?.city,
        region: response?.data?.location?.state,
        timezone: response?.data?.location?.timezone,
        loc: `${response?.data?.location?.latitude},${response?.data?.location?.longitude}`
      }
    } catch (error) {
      console.error('Failed to get location data from backup API:', error)

      return null
    }
  }

  const getLocationData = async () => {
    try {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
      const response = await axios.get(`https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`, config)

      return response.data
    } catch (error) {
      console.error('Failed to get location data:', error)

      return null
    }
  }

  const data = await getLocationData()

  if (!data) {
    // If first API call fails, call the backup method
    const backupData = await getBackupLocationData()

    return backupData
  }

  return data
}

export default getLocationData
