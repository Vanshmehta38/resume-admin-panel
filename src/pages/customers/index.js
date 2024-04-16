import BreadcrumbComponent from '@components/bread-crumb'
import { customersBreadCrumb } from '@breadcrumbs/index'

const Customers = () => {
  return (
    <>
      {' '}
      <BreadcrumbComponent data={customersBreadCrumb} />
      Customer Page
    </>
  )
}

Customers.acl = {
  action: 'read',
  subject: 'customers'
}

export default Customers
