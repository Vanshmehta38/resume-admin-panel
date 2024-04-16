/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import { AuthContext } from 'src/context/auth-context'

const navigation = () => {
  // ** Hook
  const userPermissions = useContext(AuthContext)

  // ** Subject Arrays
  let userSectionTitleArr = [
    'map-n-trips',
    'admin-management',
    'users',
    'fleet-partner',
    'notification',
    'invoices',
    'advertising',
    'basic',
    'advanced',
    'roles-permissions',
    'cars',
    'documents',
    'templates',
    'languages',
    'geo',
    'static-pages',
    'language-translate-management',
    'support'
  ]

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
      title: 'Inventory',
      icon: 'ic:baseline-inventory',
      children: [
        {
          title: 'Machine',
          path: '/inventory/inventory-machine',
          action: 'read',
          subject: 'inventory-machine'
        },
        {
          title: 'Parts',
          path: '/inventory/inventory-parts',
          action: 'read',
          subject: 'inventory-parts'
        }
      ]
    },
    {
      title: 'Orders',
      icon: 'material-symbols:list-alt',
      children: [
        {
          title: 'Current',
          path: '/orders/current',
          action: 'read',
          subject: 'orders-current'
        },
        {
          title: 'Complete',
          path: '/orders/complete',
          action: 'read',
          subject: 'orders-complete'
        }
      ]
    },
    {
      title: 'Customers',
      icon: 'ic:sharp-supervisor-account',
      path: '/customers',
      subject: 'customers',
      action: 'read'
    },
    {
      title: 'Vendors',
      icon: 'ic:sharp-supervised-user-circle',
      path: '/vendors',
      subject: 'vendors',
      action: 'read'
    },
    {
      title: 'Repairing',
      icon: 'ic:round-home-repair-service',
      path: '/repairing',
      subject: 'repairing',
      action: 'read'
    },

    {
      sectionTitle: 'Settings',
      action: 'read',
      subject: userSectionTitle[0]
    },
    {
      title: 'Basic',
      icon: 'ic:baseline-laptop-chromebook',
      path: '/basic',
      subject: 'basic',
      action: 'read'
    },
    {
      title: 'Parts',
      icon: 'ic:round-build-circle',
      path: '/parts',
      subject: 'parts',
      action: 'read'
    },
    {
      title: 'Machines',
      icon: 'material-symbols:attractions',
      path: '/machines',
      subject: 'machines',
      action: 'read'
    },
    {
      title: 'User',
      icon: 'material-symbols:person',
      path: '/user',
      subject: 'users',
      action: 'read'
    },
    {
      title: 'Roles & Permissions',
      icon: 'ic:baseline-lock-open',
      children: [
        {
          title: 'Roles',
          path: '/role',
          action: 'read',
          subject: 'roles-permissions'
        },
        {
          title: 'Permissions',
          path: '/permissions',
          action: 'read',
          subject: 'roles-permissions'
        }
      ]
    }
  ]
}

export default navigation
