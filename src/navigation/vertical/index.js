/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import { AuthContext } from 'src/context/auth-context'

const navigation = () => {
  // ** Hook
  const userPermissions = useContext(AuthContext)

  // ** Subject Arrays
  let userSectionTitleArr = ['dashboard', 'users', 'basic']

  // ** Filter section title data
  const filterSectionTitle = (arr1, arr2) => {
    let res = []
    res = arr1.filter(el => {
      return arr2.find(element => {
        return element === el
      })
    })

    return res
  }

  // ** Filter modules subject
  let filterModules = userPermissions?.permissionData?.filter(item => {
    if (item?.view === true) {
      return item?.module?.alias_name
    }
  })

  let filterModuleName = filterModules.map(item => item?.module?.alias_name)
  let userSectionTitle = filterSectionTitle(filterModuleName, userSectionTitleArr)

  return [
    {
      title: 'Dashboard',
      icon: 'mdi:home-outline',
      path: '/dashboard',
      id: 'dashboard',
      subject: 'dashboard',
      action: 'read'
    },
    {
      sectionTitle: 'Main',
      action: 'read',
      subject: userSectionTitle[0]
    },
    {
      title: 'User',
      icon: 'material-symbols:person',
      path: '/user',
      subject: 'users',
      action: 'read'
    },
    {
      title: 'Contact Us',
      icon: 'ic:sharp-supervisor-account',
      path: '/contact-us',
      subject: 'contact-us',
      action: 'read'
    },
    {
      title: 'Basic',
      icon: 'ic:baseline-laptop-chromebook',
      path: '/basic',
      subject: 'basic',
      action: 'read'
    }
  ]
}

export default navigation
