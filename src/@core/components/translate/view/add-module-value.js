// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Third Party Imports
import { Controller, useFieldArray, useForm } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Api imports
import { updateComponentKeys } from '@api/translate'

// ** constants Imports
import { strings } from '@strings'
import { errorMessage } from '@functions/error-message'

// ** Third party components
import { useTranslation } from 'react-i18next'

// ** Style Import
import * as Styled from '@styles-page/translate/styled-components'
import * as styles from '@styles-page/translate/styles'

const defaultValues = {
  module_keys_data: [{ key: '', value: '', error: '' }]
}

const SidebarAddModuleValue = props => {
  // ** Hooks
  const { t } = useTranslation()

  // ** Props
  const { open, toggle, title, languageId, componentId, refetch } = props

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: defaultValues
  })

  const {
    fields: moduleFields,
    append: moduleKeyAppend,
    remove: moduleKeyRemove
  } = useFieldArray({
    control: control,
    name: 'module_keys_data'
  })

  const handleClose = () => {
    toggle()
    reset()
  }

  const onSubmit = async () => {
    const validData = moduleFields?.some(item => item.error !== '')
    if (!validData) {
      let arr = []
      moduleFields?.forEach(item => {
        arr.push({
          key: item?.key,
          value: item?.value
        })
      })

      const body = {
        update_data: arr,
        language_u_id: languageId,
        component_u_id: componentId
      }

      await updateComponentKeys(body)?.then(res => {
        if (res?.status) {
          refetch()
          toggle()
          reset()
        }
      })
    }
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={styles.drawerMain()}
    >
      <Styled.Header>
        <Typography variant='h6'>{title}</Typography>
        <IconButton size='small' onClick={handleClose} sx={styles.drawerCloseIcon()}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Styled.Header>
      <Box p={5}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {moduleFields.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  key={index}
                  sx={styles.grid()}
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Grid item xs={index === moduleFields.length - 1 ? 10.5 : 12}>
                    <FormControl fullWidth>
                      <Controller
                        name={`module_keys_data.${index}.key`}
                        control={control}
                        rules={{ required: t('valueErrorMessage') }}
                        render={({ field: { onChange } }) => (
                          <TextField
                            autoComplete='off'
                            value={moduleFields[index]?.key ?? null}
                            label={strings.translateTypeValueFieldTitle}
                            onChange={e => {
                              moduleFields[index].key = e.target.value
                              moduleFields[index].value = e.target.value
                              setValue(`module_keys_data.${index}.key`, e.target.value)
                              setValue(`module_keys_data.${index}.value`, e.target.value)
                              onChange(moduleFields[index].key)
                              onChange(moduleFields[index].value)
                              moduleFields[index].error = ''
                            }}
                            id='update-type'
                            error={Boolean(errors?.module_keys_data ? errors?.module_keys_data?.[index]?.key : false)}
                            inputProps={{ maxLength: 80 }}
                          />
                        )}
                      />
                      {errorMessage(errors?.module_keys_data?.[index]?.key)}
                    </FormControl>
                  </Grid>

                  {index === moduleFields.length - 1 ? (
                    <Grid item xs={1.5}>
                      <IconButton
                        color='primary'
                        style={styles.addButton()}
                        onClick={() => {
                          moduleKeyAppend({
                            key: '',
                            value: '',
                            error: ''
                          })
                        }}
                      >
                        <Icon icon='mdi:plus' fontSize={'1.3rem'} />
                      </IconButton>
                    </Grid>
                  ) : null}

                  {index !== 0 ? (
                    <IconButton
                      size='medium'
                      sx={styles.removeButton(index === moduleFields.length - 1)}
                      onClick={() => {
                        moduleKeyRemove(index)
                      }}
                    >
                      <Icon icon='zondicons:close-solid' fontSize='1.20rem' color='red' />
                    </IconButton>
                  ) : null}
                </Grid>
              )
            })}
          </Grid>

          <Box sx={styles.drawerformButton()}>
            <Button
              size='large'
              type='submit'
              variant='contained'
              sx={styles.drawerformButtonMargin()}
              id={'submit-button'}
            >
              {t(strings.submitButton)}
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose} id={'cancel-button'}>
              {t(strings.cancelButton)}
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

SidebarAddModuleValue.acl = {
  subject: 'language-translate-management',
  action: 'read'
}

export default SidebarAddModuleValue
