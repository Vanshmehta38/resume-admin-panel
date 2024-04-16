/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** MUI Imports
import { Autocomplete } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'
import Cleave from 'cleave.js/react'

// ** Constant Imports
import { strings } from '@strings'

// ** API Imports
import { updateSetting, viewBasic } from '@api/basic'

// ** Context imports
import { AbilityContext } from 'src/layouts/components/acl/can'

// ** Styles and Styled Components Imports
import * as styles from '@styles-page/basic/styles'

// ** Custom Component
import { basicBreadCrumb } from '@breadcrumbs/index'
import BreadcrumbComponent from '@components/bread-crumb'
import FallbackSpinner from '@components/spinner'
import { capitalizeText } from '@functions/capitalize-text'
import { basicRules } from '@validations/basic'
import { useTranslation } from 'react-i18next'

const Basic = () => {
  // ** Hooks
  const { t } = useTranslation()

  const basicValidationRule = basicRules()
  const ability = useContext(AbilityContext)
  const canEdit = ability.can('add', 'basic') || ability.can('update', 'basic')

  let country = [
    {
      activity_status: 'enabled',
      alpha2: 'FK',
      alpha3: 'FLK',
      city_count: 0,
      is_on_board: true,
      name: 'falkland islands',
      prefix: '+500',
      u_id: 'CUT1000000070'
    }
  ]

  // ** States
  const [wait, setWait] = useState(true)
  const [basicResData, setBasicResData] = useState([])
  const [reCallApi, setReCallApi] = useState('')

  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: basicRules.defaultValues })

  const errorMessage = errors => {
    return <FormHelperText sx={styles.errorMessage()}>{errors}</FormHelperText>
  }

  const onSubmit = async data => {
    data.country = data?.country?.u_id

    const body = []

    if (basicResData?.length !== 0) {
      basicResData?.map(item => {
        if (item.value !== data[item.key]) {
          body.push({
            u_id: item.u_id,
            key: item?.key,
            value: data[item.key]
          })
        }
      })
    }

    if (body.length !== 0) {
      await updateSetting({ body, type: 'basic' })?.then(res => {
        if (res?.status === true) {
          setReCallApi(Math.floor(Math.random() * 20).toString())
        }
      })
    }
  }

  const callApi = async () => {
    await viewBasic()?.then(res => {
      if (res) {
        const resData = []

        res?.map(item => {
          if (item?.type === 'basic') {
            resData?.push(item)
            setValue(item.key, item.value)
            if (item.key === 'country' && item.value) {
              const countryData = country?.find(i => i?.u_id === item?.value)
              setValue('country', countryData)
            }
          }
        })

        setBasicResData(resData)
        setWait(false)
      } else {
        setWait(false)
      }
    })
  }

  useEffect(() => {
    callApi()
  }, [reCallApi])
  if (wait) {
    return <FallbackSpinner />
  } else {
    return (
      <>
        <BreadcrumbComponent data={basicBreadCrumb} />
        <Card>
          <CardHeader sx={styles.adminTitle()} titleTypographyProps={{ variant: 'h6' }} />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={5}>
                {/* company Name */}
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicCompanyName}
                      control={control}
                      rules={basicValidationRule.company_name}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          id={'basic-company-name'}
                          value={value}
                          label={t('optilabBasicCompanyNameLabel')}
                          autoComplete='off'
                          inputProps={{ maxLength: 100, readOnly: !canEdit, 'data-testid': 'basic-company-name' }}
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicCompanyName)
                          }}
                          placeholder={t('optilabBasicCompanyNamePlaceHolder')}
                          error={Boolean(errors.company_name)}
                        />
                      )}
                    />
                    {errorMessage(errors.company_name?.message)}
                  </FormControl>
                </Grid>
                {/* GST number */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicGstNumber}
                      control={control}
                      rules={basicValidationRule.gst_number}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          type='text'
                          value={value}
                          label={t('optilabBasicGstNumberLabel')}
                          autoComplete='off'
                          onInput={e => (e.target.value = e.target.value.slice(0, 15))}
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicGstNumber)
                          }}
                          inputProps={{ 'data-testid': 'basic-gst-number', readOnly: !canEdit }}
                          placeholder={t('optilabBasicGstNumberPlaceHolder')}
                          error={Boolean(errors.gst_number)}
                          id={'basic-gst-number'}
                        />
                      )}
                    />
                    {errorMessage(errors.gst_number?.message)}
                  </FormControl>
                </Grid>

                {/* Address  line 1*/}
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicAddressOneKey}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          rows={1}
                          multiline
                          value={value}
                          label={t('optilabBasicAddressOneLabel')}
                          inputProps={{ 'data-testid': 'basic-address-one', maxLength: 150, readOnly: !canEdit }}
                          autoComplete='off'
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicAddressOneKey)
                          }}
                          placeholder={t('optilabBasicAddressOnePlaceholder')}
                          id={'basic-address-one'}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                {/* Pan number */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicPanKey}
                      control={control}
                      rules={basicValidationRule.pan_number}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          type='text'
                          value={value}
                          label={t('optilabBasicPanNumberLabel')}
                          autoComplete='off'
                          inputProps={{ 'data-testid': 'basic-pan-no', readOnly: !canEdit }}
                          onInput={e => (e.target.value = e.target.value.slice(0, 10))}
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicPanKey)
                          }}
                          placeholder={t('optilabBasicPanNumberPlaceHolder')}
                          error={Boolean(errors.pan_number)}
                          id={'basic-pan-no'}
                        />
                      )}
                    />
                    {errorMessage(errors.pan_number?.message)}
                  </FormControl>
                </Grid>

                {/* Address line 2*/}
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicAddressTwoKey}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          rows={1}
                          multiline
                          value={value}
                          label={t('optilabBasicAddressTwoLabel')}
                          inputProps={{ 'data-testid': 'basic-address-two', maxLength: 150, readOnly: !canEdit }}
                          autoComplete='off'
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicAddressTwoKey)
                          }}
                          placeholder={t('optilabBasicAddressTwoPlaceholder')}
                          id={'basic-address-two'}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                {/* Phone number */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicMobileNumberKey}
                      control={control}
                      rules={basicValidationRule.mobile_number}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <TextField
                            type='text'
                            value={value}
                            label={t('optilabBasicMobileNumberLabel')}
                            autoComplete='off'
                            onChange={e => {
                              onChange(e)
                              trigger(strings.optilabBasicMobileNumberKey)
                            }}
                            InputProps={{
                              inputComponent: Cleave,
                              inputProps: {
                                options: {
                                  blocks: [3, 3, 3, 4],
                                  delimiters: ['-', '-', '-', '-'],
                                  numericOnly: false
                                },
                                readOnly: !canEdit,
                                'data-testid': 'basic-phone-no'
                              }
                            }}
                            placeholder={t('optilabBasicMobileNumberPlaceHolder')}
                            error={Boolean(errors.mobile_number)}
                            id={'basic-phone-no'}
                          />
                        )
                      }}
                    />
                    {errorMessage(errors.mobile_number?.message)}
                  </FormControl>
                </Grid>
                {/* country  */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicCountryKey}
                      control={control}
                      rules={basicValidationRule.country}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <Autocomplete
                            disabled={!canEdit}
                            value={value}
                            error={Boolean(errors.country)}
                            id={'basic-country'}
                            data-testid={'basic-country'}
                            options={country || []}
                            onChange={(event, value) => {
                              onChange(value)
                            }}
                            getOptionLabel={option => {
                              return capitalizeText(option.name) || ''
                            }}
                            renderOption={(props, option) => {
                              return <li {...props}>{capitalizeText(option?.name ?? '')}</li>
                            }}
                            renderInput={params => (
                              <TextField
                                error={Boolean(errors.country)}
                                {...params}
                                label={t('optilabBasicCountryLabel')}
                              />
                            )}
                          />
                        )
                      }}
                    />
                    {errorMessage(errors?.country)}
                  </FormControl>
                </Grid>
                {/* Alternate number */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicMobileAlternateNumberKey}
                      control={control}
                      rules={basicValidationRule.alternate_mobile_number}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <TextField
                            type='text'
                            value={value}
                            label={t('optilabBasicMobileNumberAlternateLabel')}
                            autoComplete='off'
                            onChange={e => {
                              onChange(e)
                              trigger(strings.optilabBasicMobileAlternateNumberKey)
                            }}
                            InputProps={{
                              inputComponent: Cleave,
                              inputProps: {
                                options: {
                                  blocks: [3, 3, 3, 4],
                                  delimiters: ['-', '-', '-', '-'],
                                  numericOnly: false
                                },
                                readOnly: !canEdit,
                                'data-testid': 'basic-alternate-phone-no'
                              }
                            }}
                            error={Boolean(errors.alternate_mobile_number)}
                            placeholder={t('optilabBasicMobileNumberAlternatePlaceHolder')}
                            id={'basic-alternate-phone-no'}
                          />
                        )
                      }}
                    />
                    {errorMessage(errors.alternate_mobile_number?.message)}
                  </FormControl>
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicEmailKey}
                      control={control}
                      rules={basicValidationRule.email}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          value={value}
                          label={t('optilabBasicEmailLabel')}
                          autoComplete='off'
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicEmailKey)
                          }}
                          inputProps={{ maxLength: 60, readOnly: !canEdit, 'data-testid': 'basic-email-id' }}
                          placeholder={t('optilabBasicEmailPlaceHolder')}
                          error={Boolean(errors.email)}
                          id={'basic-email-id'}
                        />
                      )}
                    />
                    {errorMessage(errors.email?.message)}
                  </FormControl>
                </Grid>

                {/* Website Name */}
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name={strings.optilabBasicWebsiteKey}
                      control={control}
                      rules={basicValidationRule.website}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          value={value}
                          label={t('optilabBasicWebsiteLabel')}
                          autoComplete='off'
                          inputProps={{ 'data-testid': 'basic-website-name', maxLength: 255, readOnly: !canEdit }}
                          onChange={e => {
                            onChange(e)
                            trigger(strings.optilabBasicWebsiteKey)
                          }}
                          placeholder={t('optilabBasicWebsitePlaceHolder')}
                          error={Boolean(errors.website)}
                          id={'basic-website-name'}
                        />
                      )}
                    />
                    {errorMessage(errors.website?.message)}
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={12} sx={styles.buttonsGrid()}>
                  {canEdit && (
                    <Button
                      size='large'
                      type='submit'
                      variant='contained'
                      sx={styles.submitButton()}
                      color='primary'
                      id={'basic-submit'}
                      data-testid={'basic-submit'}
                    >
                      {t(strings.saveChangesButton)}
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </>
    )
  }
}

Basic.acl = {
  action: 'read',
  subject: 'basic'
}

export default Basic
