import { routes } from '@routes'

// ** Dashboard
export const dashboardBreadCrumb = [{ path: routes.dashboard, title: 'Dashboard' }]

// ** Customer
export const customersBreadCrumb = [{ path: routes.customers, title: 'Customers' }]

// ** vendors
export const vendorsBreadCrumb = [{ path: routes.vendors, title: 'Vendors' }]

// ** repairing
export const repairingBreadCrumb = [{ path: routes.repairing, title: 'Repairing' }]

// ** parts
export const partsBreadCrumb = [{ path: routes.parts, title: 'Parts' }]

// ** machines
export const machinesBreadCrumb = [{ path: routes.machines, title: 'Machines' }]

// ** Admin
export const adminsBreadCrumb = [{ path: '/admins', title: 'Admins' }]

// ** Users
export const usersBreadCrumb = [{ path: routes.users, title: 'Users' }]

export const userViewBreadCrumb = title => {
  return [
    { path: routes.users, title: 'Users' },
    { path: routes.users, title }
  ]
}

export const userEditBreadCrumb = title => {
  return [
    { path: routes.users, title: 'Users' },
    { path: routes.users, title },
    { path: routes.users, title: 'Edit' }
  ]
}

// ** Basic
export const basicBreadCrumb = [{ path: '/basic', title: 'Basic' }]

// ** Role
export const rolesBreadCrumb = [{ path: '/role', title: 'Roles' }]

// ** Permission
export const permissionBreadCrumb = [{ path: routes.permission, title: 'Permissions' }]

// ** Profile
export const profileBreadCrumb = title => {
  return [{ path: routes.userProfile, title }]
}
