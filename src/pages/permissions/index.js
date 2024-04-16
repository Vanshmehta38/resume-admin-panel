// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Custom Components Imports
import CustomChip from '@components/mui/chip'
import BreadcrumbComponent from '@components/bread-crumb'
import { permissionBreadCrumb } from '@breadcrumbs/index'
import FallbackSpinner from '@components/spinner'
import Error500 from '@pages/500'

// ** Strings Imports
import { strings } from '@strings'

// ** Custom Functions
import { generateRandom } from '@functions/generate-random-id'

// ** Third Party Imports
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

// ** API Imports
import { fetchPermissionsList } from '@api/permission'

// ** Styles and Styled Components Imports
import * as styles from '@styles-page/permission/styles'

const colorCode = ['error', 'info', 'success', 'warning', 'secondary']

let colorCount = 0

const rolesList = []

const PermissionsList = () => {
  // ** Hooks
  const { t } = useTranslation()

  // ** State
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  })

  // ** permission list
  const { isLoading, isError, data, isFetched } = useQuery('permissions', fetchPermissionsList, { retry: false })

  const columns = [
    {
      flex: 0.5,
      field: strings.permissionModuleDataField,
      minWidth: 240,
      headerName: t(strings.permissionModuleNameHeaderName),
      renderCell: ({ row }) => (
        <Typography variant='body1' sx={styles.subtitleTypographyStyle()}>
          {row.moduleData.name}
        </Typography>
      )
    },
    {
      flex: 0.5,
      minWidth: 280,
      field: strings.permissionAssignedToField,
      headerName: t(strings.permissionAssignedToHeaderName),
      renderCell: ({ row }) => {
        return row.roleData.map((assignee, index) => {
          if (colorCount > 4) {
            colorCount = 0
          }

          if (rolesList.some(item => item.name === assignee.name)) {
          } else {
            rolesList.push({ name: assignee.name, color: colorCode[colorCount] })
            colorCount++
          }

          const variant = rolesList.filter(item => {
            if (item.name === assignee.name) {
              return item.color
            } else {
              return
            }
          })

          return (
            <CustomChip
              size='small'
              key={index}
              skin='light'
              color={variant[0].color}
              label={assignee.name.replace('-', ' ')}
              sx={styles.customChip()}
            />
          )
        })
      }
    }
  ]

  if (isLoading) return <FallbackSpinner sx={styles.spinnerHeight()} />
  if (isError) return <Error500 />
  if (isFetched)
    return (
      <>
        <BreadcrumbComponent data={permissionBreadCrumb} />
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <DataGrid
                autoHeight
                rows={data ?? []}
                columns={columns}
                getRowId={generateRandom}
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                sx={styles.dataGrid()}
              />
            </Card>
          </Grid>
        </Grid>
      </>
    )
}

PermissionsList.acl = {
  action: 'read',
  subject: 'roles-permissions'
}

export default PermissionsList
