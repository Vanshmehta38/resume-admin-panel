// ** React Import
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Stack, TablePagination } from '@mui/material'

// ** Custom Component imports
import { capitalizeText } from '@functions/capitalize-text'

// ** Moment imports
import moment from 'moment'

// ** Styles and Styled Components Imports
import * as styles from './styles'

export default function ProfileLoginHistories({ profileData }) {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // ** Vars
  const { t } = useTranslation()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const transactions = profileData || []
  const paginatedTransactions = transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <>
      <Card>
        <CardHeader title={t('ProfileLoginHistoriesLabel')} />
        <Divider sx={styles.profileLoginHistoriesDivider()} />
        <TableContainer>
          <Table sx={styles.profileLoginHistoriesTable()}>
            <TableHead sx={styles.profileLoginHistoriesTableHeader()}>
              <TableRow>
                <TableCell>{t('IPAddressHeaderLabel')}</TableCell>
                <TableCell>{t('DeviceHeaderLabel')}</TableCell>
                <TableCell>{t('LocationHeaderLabel')}</TableCell>
                <TableCell>{t('RecentActivityHeaderLabel')}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10}>
                    <Stack
                      height='100%'
                      alignItems='center'
                      justifyContent='center'
                      fontWeight={600}
                      fontSize={'0.9rem'}
                    >
                      {t('noLoginHistoriesFound')}
                    </Stack>
                  </TableCell>
                </TableRow>
              ) : (
                paginatedTransactions?.map((item, index) => (
                  <TableRow hover key={index} sx={styles.profileLoginHistoriesTableRow()}>
                    <TableCell variant='body1' sx={styles.subtitleTypographyStyle()}>
                      {item.ip_address || '172.45.33.11'}
                    </TableCell>
                    <TableCell sx={styles.bodyTypographyStyle()}>{item.device || '-'}</TableCell>
                    <TableCell sx={styles.bodyTypographyStyle()}>
                      {item?.city || item?.region || item?.country
                        ? `${item?.city ? `${capitalizeText(item?.city)},` : ''} ${item?.region ? `${capitalizeText(item?.region)},` : ''} ${item?.country ? `${capitalizeText(item?.country)}` : ''}`
                        : '-'}
                    </TableCell>
                    <TableCell sx={styles.bodyTypographyStyle()}>
                      {item.recent_activity ? moment(item.recent_activity).format('DD, MMM yyyy H:mm A') : '-'}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component='div'
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  )
}
