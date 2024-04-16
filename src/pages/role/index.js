/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PageHeader from '@components/page-header'

// ** Demo Components Imports
import RolesCards from '@components/role/role-cards'
import UserList from '@components/role/user-list'

// ** API Imports
import { viewEmployeeByRoles } from '@api/role'

// ** Styles  Imports
import * as styles from '@styles-page/role/styles'

const RolesList = () => {
  // ** Vars
  const { t } = useTranslation()

  // ** States
  const [roleDetails, setRoleDetails] = useState(false)
  const [usersData, setUsersData] = useState([])
  const [roleData, setRoleData] = useState()

  // **  view employee by roles
  const getAdminData = async roleId => {
    await viewEmployeeByRoles(roleId).then(res => {
      if (res?.data?.length !== 0) {
        setRoleDetails(true)
        setUsersData(res?.data ?? [])
      } else {
        setRoleDetails(true)
        setUsersData([])
      }
    })
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={styles.grid()}>
        <RolesCards
          viewCard={async data => {
            setRoleData(data)
            getAdminData(data?.u_id)
          }}
        />
      </Grid>

      {roleDetails && (
        <>
          <PageHeader
            title={
              <Typography variant='h5'>
                {t('totalUsersOf')} <strong style={styles.capitalizeFont()}>{roleData?.name}</strong> {t('role')}
              </Typography>
            }
          />
          <Grid item xs={12}>
            <UserList usersData={usersData} role={roleData} updateStatus={id => getAdminData(id)} />
          </Grid>
        </>
      )}
    </Grid>
  )
}

RolesList.acl = {
  action: 'read',
  subject: 'roles-permissions'
}

export default RolesList
