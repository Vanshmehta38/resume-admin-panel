/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Constant Strings and Routes Imports
import { routes } from '@routes'
import { strings } from '@strings'

// ** Context and API Imports
import { AbilityContext } from 'src/layouts/components/acl/can'
import { updateAdminsStatus } from '@api/admins'

// ** Styles Imports
import * as styles from '@styles-page/role/styles'

const addUser = roleViewData => {
  if (roleViewData.usersData === undefined) {
    return null
  } else {
    roleViewData.router.push({
      pathname: routes.admin,
      query: roleViewData?.role?._id
    })
  }
}

const TableHeader = props => {
  // eslint-disable-next-line no-unused-vars
  const ability = useContext(AbilityContext)

  // ** Hooks
  const { t } = useTranslation()

  return (
    <Box sx={styles.mainBox()}>
      <Box></Box>
      <Box sx={styles.box()}>
        <Box>
          <Button
            sx={styles.addButton()}
            variant='contained'
            id={'add-user'}
            onClick={() => addUser(props)}
            disabled={props?.role?.name === t('admin') ? true : false}
          >
            {t('Add')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const UserList = ({ usersData, role, updateStatus }) => {
  // ** Hooks
  const router = useRouter()
  const ability = useContext(AbilityContext)

  const { t } = useTranslation()

  // ** State
  const [pageSize, setPageSize] = useState(7)

  const ChangeStatusValue = async (roleId, id, status) => {
    await updateAdminsStatus({ id, status }).then(res => {
      if (res?.status) {
        updateStatus(roleId)
      }
    })
  }

  const columns = [
    {
      flex: 0.16,
      minWidth: 150,
      field: strings.fullNameFieldText,
      headerName: t('fullNameHeaderText'),
      renderCell: ({ row }) => {
        return (
          <Typography variant='subtitle2' sx={styles.capitalize()}>
            {row?.first_name ? row?.first_name : '-'} {row?.last_name ? row?.last_name : '-'}
          </Typography>
        )
      }
    },

    {
      flex: 0.16,
      minWidth: 150,
      field: strings.emailIdFieldText,
      headerName: t('emailIdHeaderText'),
      renderCell: ({ row }) => {
        return <Typography variant='body2'>{row?.email || '-'}</Typography>
      }
    },
    {
      flex: 0.14,
      minWidth: 150,
      field: strings.phoneNoFieldText,
      headerName: t('phoneNoHeaderText'),
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row?.mobile_no || '-'}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'status',
      filterable: false,
      headerName: t('status'),
      renderCell: ({ row }) => {
        return (
          <FormControlLabel
            control={
              <Switch
                defaultChecked={row?.activity_status}
                id='role-status'
                disabled={!ability?.can('update', 'roles-permissions') || row.is_super_admin ? true : false}
                onChange={e => ChangeStatusValue(row.role_u_id, row.u_id, e.target.checked)}
              />
            }
          />
        )
      }
    }
  ]

  const NoRowsOverlay = () => {
    return (
      <Stack height='100%' alignItems='center' justifyContent='center'>
        {t('noDataFound')}
      </Stack>
    )
  }

  useEffect(() => {}, [usersData])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            columns={columns}
            pagination
            initialState={{
              pagination: { paginationModel: { pageSize: pageSize } }
            }}
            disableRowSelectionOnClick
            getRowId={row => row?.u_id}
            components={{ Toolbar: TableHeader, NoRowsOverlay }}
            rows={usersData ?? []}
            onPaginationModelChange={newPageSize => setPageSize(newPageSize)}
            paginationMode='client'
            componentsProps={{
              toolbar: {
                usersData,
                router,
                role
              }
            }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

UserList.acl = {
  action: 'read',
  subject: 'roles-permissions'
}

export default UserList
