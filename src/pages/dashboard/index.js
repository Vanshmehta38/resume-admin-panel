// ** React import
// import React, { useState, useEffect, forwardRef } from 'react'

// ** Next Imports
// import Router from 'next/router'

// ** MUI Import
import Grid from '@mui/material/Grid'

// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import FormControl from '@mui/material/FormControl'
// import TextField from '@mui/material/TextField'
// import CardHeader from '@mui/material/CardHeader'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
// import { useTheme } from '@mui/material/styles'

// ** Moment imports
// import moment from 'moment'

// ** i18 Imports
// import { useTranslation } from 'react-i18next'

// ** Context
// import { useAuth } from 'src/hooks/useAuth'

// ** React DatePicker
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
// import DatePicker from 'react-datepicker'
// import format from 'date-fns/format'

// ** Custom Components
import { dashboardBreadCrumb } from '@breadcrumbs/index'
import BreadcrumbComponent from '@components/bread-crumb'

// import CustomAvatar from 'src/@core/components/mui/avatar'
// import CustomChip from 'src/@core/components/mui/chip'

// ** Constant Imports
// import { routes } from '@routes'

// ** Api imports
// import { dashboardDetails } from '@api/dashboard'

// ** Default AuthConfig
// import authConfig from 'src/configs/auth'

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Styles  Imports
// import * as Styled from '@styles-page/dashboard/styled-components'
// import * as styles from '@styles-page/dashboard/styles'

// const res = {
//   data: {
//     u_id: 'DAS000000001',
//     tripOverview: {
//       all_trip: {
//         u_id: '01',
//         stats: '6792',
//         title: 'All trip'
//       },
//       completed: {
//         u_id: '02',
//         stats: '5890',
//         title: 'Completed'
//       },
//       accepted: {
//         u_id: '03',
//         stats: '5890',
//         title: 'Accepted'
//       },
//       cancelled: {
//         u_id: '04',
//         stats: '902',
//         title: 'Cancelled'
//       }
//     },
//     revenueData: {
//       new_customers: {
//         u_id: '01',
//         stats: '8,458',
//         trend: 'negative',
//         trendNumber: '8.1%',
//         title: 'New Customers'
//       },
//       total_profit: {
//         u_id: '02',
//         stats: '28.5k',
//         trend: 'positive',
//         trendNumber: '18.2%',
//         title: 'Total Profit'
//       },
//       new_transactions: {
//         u_id: '03',
//         stats: '2,450k',
//         trend: 'negative',
//         trendNumber: '24.6%',
//         title: 'New Transactions'
//       },
//       total_revenue: {
//         u_id: '04',
//         stats: '48.2K',
//         trend: 'positive',
//         trendNumber: '22.5%',
//         title: 'Total Revenue'
//       }
//     },
//     basicData: {
//       ratings: {
//         u_id: '01',
//         stats: '8,458',
//         trend: 'positive',
//         trendNumber: '+15.6%',
//         title: 'Ratings'
//       },
//       sessions: {
//         u_id: '02',
//         stats: '28.5k',
//         trend: 'negative',
//         trendNumber: '-25.5%',
//         title: 'Sessions'
//       },
//       customers: {
//         u_id: '03',
//         stats: '2,450k',
//         trend: 'positive',
//         trendNumber: '+9.2%',
//         title: 'Customers'
//       },
//       total_orders: {
//         u_id: '04',
//         stats: '48.2K',
//         trend: 'positive',
//         trendNumber: '+10.8%',
//         title: 'Total Orders'
//       }
//     }
//   }
// }

const Dashboard = () => {
  // ** Hook
  // const theme = useTheme()
  // const { user } = useAuth()
  // const { t } = useTranslation()

  // ** State
  // const [reCallApi, setReCallApi] = useState('')
  // const [dashboardData, setDashboardDate] = useState({})
  // const [startDateRange, setStartDateRange] = useState(null)
  // const [endDateRange, setEndDateRange] = useState(null)

  // const callApi = () => {
  //   const loginId = localStorage.getItem(authConfig.storageUId)
  //   setDashboardDate(res?.data)

  //   return
  //   dashboardDetails({
  //     login_id: loginId,
  //     start_date: startDateRange ?? null,
  //     end_date: endDateRange ?? null
  //   }).then(res => {
  //     setDashboardDate(res?.data)
  //   })
  // }

  // const cardStatsData = {
  //   tripOverview: [
  //     {
  //       stats: dashboardData?.tripOverview?.all_trip?.stats || null,
  //       color: 'info',
  //       title: t('dashboardAllTripLabel'),
  //       icon: <Icon icon='mdi:car' />
  //     },
  //     {
  //       stats: dashboardData?.tripOverview?.completed?.stats || null,
  //       color: 'warning',
  //       title: t('dashboardCompletedLabel'),
  //       icon: <Icon icon='wpf:security-checked' />
  //     },
  //     {
  //       stats: dashboardData?.tripOverview?.accepted?.stats || null,
  //       color: 'success',
  //       title: t('dashboardAcceptedLabel'),
  //       icon: <Icon icon='mdi:creation' />
  //     },
  //     {
  //       stats: dashboardData?.tripOverview?.cancelled?.stats || null,
  //       color: 'error',
  //       title: t('dashboardCancelledLabel'),
  //       icon: <Icon icon='ic:baseline-car-crash' />
  //     }
  //   ],
  //   statsHorizontal: [
  //     {
  //       stats: dashboardData?.revenueData?.new_customers?.stats || null,
  //       trend: dashboardData?.revenueData?.new_customers?.trend || null,
  //       trendNumber: dashboardData?.revenueData?.new_customers?.trendNumber || null,
  //       color: 'info',
  //       title: t('dashboardNewCustomersLabel'),
  //       icon: 'mdi:account-outline'
  //     },
  //     {
  //       stats: dashboardData?.revenueData?.total_profit?.stats || null,
  //       trend: dashboardData?.revenueData?.total_profit?.trend || null,
  //       trendNumber: dashboardData?.revenueData?.total_profit?.trendNumber || null,
  //       color: 'error',
  //       title: t('dashboardTotalProfitLabel'),
  //       icon: 'mdi:poll'
  //     },
  //     {
  //       stats: dashboardData?.revenueData?.new_transactions?.stats || null,
  //       trend: dashboardData?.revenueData?.new_transactions?.trend || null,
  //       trendNumber: dashboardData?.revenueData?.new_transactions?.trendNumber || null,
  //       color: 'warning',
  //       title: t('dashboardNewTransactionsLabel'),
  //       icon: 'mdi:trending-up'
  //     },
  //     {
  //       stats: dashboardData?.revenueData?.total_revenue?.stats || null,
  //       trend: dashboardData?.revenueData?.total_revenue?.trend || null,
  //       trendNumber: dashboardData?.revenueData?.total_revenue?.trendNumber || null,
  //       color: 'success',
  //       title: t('dashboardTotalRevenueLabel'),
  //       icon: 'mdi:currency-usd'
  //     }
  //   ],
  //   statsCharacter: [
  //     {
  //       stats: dashboardData?.basicData?.ratings?.stats || null,
  //       trend: dashboardData?.basicData?.ratings?.trend || null,
  //       trendNumber: dashboardData?.basicData?.ratings?.trendNumber || null,
  //       chipText: 'Year of 2022',
  //       chipColor: 'info',
  //       title: t('dashboardRatingsLabel'),
  //       src: '/images/cards/card-stats-img-1.png'
  //     },
  //     {
  //       stats: dashboardData?.basicData?.sessions?.stats || null,
  //       trend: dashboardData?.basicData?.sessions?.trend || null,
  //       trendNumber: dashboardData?.basicData?.sessions?.trendNumber || null,
  //       chipText: 'Last Month',
  //       chipColor: 'success',
  //       title: t('dashboardSessionsLabel'),
  //       src: '/images/cards/card-stats-img-2.png'
  //     },
  //     {
  //       stats: dashboardData?.basicData?.customers?.stats || null,
  //       trend: dashboardData?.basicData?.customers?.trend || null,
  //       trendNumber: dashboardData?.basicData?.customers?.trendNumber || null,
  //       chipText: 'Daily Customers',
  //       chipColor: 'warning',
  //       title: t('dashboardCustomersLabel'),
  //       src: '/images/cards/card-stats-img-3.png'
  //     },
  //     {
  //       stats: dashboardData?.basicData?.total_orders?.stats || null,
  //       trend: dashboardData?.basicData?.total_orders?.trend || null,
  //       trendNumber: dashboardData?.basicData?.total_orders?.trendNumber || null,
  //       chipText: 'Last Week',
  //       chipColor: 'secondary',
  //       title: t('dashboardTotalOrdersLabel'),
  //       src: '/images/cards/card-stats-img-4.png'
  //     }
  //   ]
  // }

  // const handleOnChangeRange = dates => {
  //   const [start, end] = dates
  //   setStartDateRange(start)
  //   setEndDateRange(end)
  //   if (start && end) {
  //     setReCallApi(Math.floor(Math.random() * 20).toString())
  //   }
  // }

  // const CustomInput = forwardRef((props, ref) => {
  //   const startDate = props.end !== null ? ` ${format(props.start, 'dd MMM,yyyy')}` : null
  //   const endDate = props.end !== null ? ` ${format(props.end, 'dd MMM,yyyy')}` : null

  //   const value =
  //     startDate !== null && endDate !== null
  //       ? `${startDate !== null ? startDate : ''} - ${endDate !== null ? endDate : ''}`
  //       : ''

  //   return (
  //     <Box>
  //       {startDateRange && endDateRange ? (
  //         <TextField
  //           className='date-range'
  //           sx={styles.datePickerTextFieldWidth()}
  //           size='small'
  //           fullWidth
  //           inputRef={ref}
  //           value={value}
  //           InputProps={{
  //             endAdornment: (
  //               <IconButton
  //                 size='small'
  //                 title='Clear'
  //                 aria-label='Clear'
  //                 id={'clear-date-icon'}
  //                 onMouseDown={() => {
  //                   setStartDateRange(null)
  //                   setEndDateRange(null)
  //                 }}
  //               >
  //                 <Icon icon='mdi:close' fontSize={20} />
  //               </IconButton>
  //             )
  //           }}
  //         />
  //       ) : (
  //         <Box sx={styles.datePickerClearIcon()} id={'date-icon-button'}>
  //           <Icon icon='fluent-mdl2:date-time' inputRef={ref} {...props} value={value} id={'date-icon-button'} />
  //         </Box>
  //       )}
  //     </Box>
  //   )
  // })

  // useEffect(() => {
  //   callApi()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [reCallApi])

  return (
    <>
      <BreadcrumbComponent data={dashboardBreadCrumb} />
      {/* <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card sx={styles.userCardStyle()}>
            <CardContent sx={styles.userCardContentStyle()}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='h5' mb={1.5}>
                    {t('dashboardMessage')}{' '}
                    <Box component='span' fontWeight={'bold'} textTransform={'capitalize'}>
                      {user?.name ?? ' '}{' '}
                    </Box>
                    ! 🎉
                  </Typography>
                  <Typography variant='body2' mb={1.5}>
                    {t('dashboardDescription')}
                  </Typography>
                  <Button variant='contained' id='view-profile' onClick={() => Router.push(routes.userProfile)}>
                    {t('dashboardViewProfileButton')}
                  </Button>
                </Grid>
                <Styled.StyledGrid item xs={12} sm={6}>
                  <Styled.Img
                    alt='Congratulations John'
                    src={`/images/cards/illustration-john-${theme.palette.mode}.png`}
                  />
                </Styled.StyledGrid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={styles.tripOverviewStyle()}>
            <CardHeader
              sx={styles.tripOverviewCardHeaderStyle()}
              title={t('dashboardTripsOverviewLabel')}
              titleTypographyProps={{ variant: 'h6' }}
              action={
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <DatePickerWrapper>
                      <DatePicker
                        fullWidth
                        selectsRange
                        showYearDropdown
                        showMonthDropdown
                        autoComplete='off'
                        monthsShown={1}
                        endDate={endDateRange}
                        selected={startDateRange}
                        startDate={startDateRange}
                        shouldCloseOnSelect={true}
                        id={'appointments-select-date-range'}
                        onChange={handleOnChangeRange}
                        customInput={
                          <CustomInput fullWidth label={t('Date Range')} end={endDateRange} start={startDateRange} />
                        }
                      />
                    </DatePickerWrapper>
                  </FormControl>
                </Grid>
              }
            />
            <CardContent>
              <Grid container spacing={6}>
                {cardStatsData?.tripOverview.map((item, index) => {
                  return (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box key={index} display={'flex'} alignItems={'center'} gap={5}>
                        <CustomAvatar skin='light' variant='rounded' color={item?.color}>
                          {item?.icon ?? '-'}
                        </CustomAvatar>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Typography variant='h6' fontWeight={600}>
                            {item?.stats ?? '-'}
                          </Typography>
                          <Typography variant='caption'>{item?.title ?? '-'}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container spacing={6}>
            {cardStatsData?.statsHorizontal?.map((item, index) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <Card>
                    <CardContent sx={styles.cardContentStyle()}>
                      <Box display={'flex'} alignItems={'center'}>
                        <Styled.Avatar skin='light' color={item?.color} variant='rounded'>
                          <Icon icon={item.icon} />
                        </Styled.Avatar>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                            <Typography variant='h6'>{item?.stats ?? '-'}</Typography>
                            <Box display={'flex'} alignItems={'center'}>
                              <Box
                                display={'inline-flex'}
                                color={
                                  item?.trend ? (item?.trend === 'positive' ? 'success.main' : 'error.main') : null
                                }
                              >
                                <Icon
                                  icon={
                                    item?.trend
                                      ? item?.trend === 'positive'
                                        ? 'mdi:chevron-up'
                                        : 'mdi:chevron-down'
                                      : null
                                  }
                                />
                              </Box>
                              <Typography
                                variant='caption'
                                color={
                                  item?.trend ? (item?.trend === 'positive' ? 'success.main' : 'error.main') : null
                                }
                              >
                                {item?.trendNumber ?? '-'}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography variant='caption'>{item?.title ?? '-'}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container spacing={6}>
            {cardStatsData?.statsCharacter?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Card sx={styles.characterCardStyle()}>
                    <CardContent sx={styles.characterCardContentStyle()}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography sx={styles.characterCardTypographyStyle()}>{item?.title ?? '-'}</Typography>
                          <CustomChip
                            skin='light'
                            size='small'
                            label={item?.chipText ?? '-'}
                            color={item?.chipColor}
                            sx={styles.characterCardCustomChipStyle()}
                          />
                          <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
                            <Typography variant='h5' mr={1.5}>
                              {item?.stats ?? '-'}
                            </Typography>
                            <Typography
                              variant='caption'
                              color={item?.trend ? (item?.trend === 'positive' ? 'success.main' : 'error.main') : null}
                            >
                              {item?.trendNumber ?? '-'}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                          <img src={item?.src} alt={item?.title} height={134} />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid> */}
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          Coming soon
        </Grid>
      </Grid>
    </>
  )
}

Dashboard.acl = {
  subject: 'dashboard',
  action: 'read'
}

export default Dashboard
