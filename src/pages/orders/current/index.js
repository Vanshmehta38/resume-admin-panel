const Current = () => {
  return <>Current Page</>
}

Current.acl = {
  action: 'read',
  subject: 'orders-current'
}

export default Current
