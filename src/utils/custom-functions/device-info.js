// ** API Imports
import getLocationData from '@pages/api/location'

export const fetchData = async () => {
  const data = await getLocationData()

  return data
}
