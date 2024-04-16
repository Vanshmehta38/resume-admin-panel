// ** React imports
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import SidebarProfileEdit from '@components/profile/add-user-drawer'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styles and Styled Components Imports
import * as styles from '@styles-page/profile/styles'

const ProfileView = ({ profileData, reCallApiFunction }) => {
  // ** vars
  const { t } = useTranslation()

  // ** States
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [title, setTitle] = useState(null)

  const toggleAddUserDrawer = () => {
    setAddUserOpen(!addUserOpen)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          {/* <CardContent sx={styles.profileCardContent()}>
            <CustomAvatar
              src='/images/avatars/1.png'
              variant='rounded'
              alt={profileData?.full_name}
              sx={styles.profileCustomAvatar()}
            />
            <Typography variant='h6' textTransform={'capitalize'}>
              {profileData?.full_name ?? '-'}
            </Typography>
          </CardContent> */}

          <CardContent>
            <Typography variant='h6'>{t('details')}</Typography>
            <Divider sx={styles.profileCardContentDivider()} />
            <Box sx={styles.profileInfoMainBox()}>
              <Box sx={styles.profileInfoBox()}>
                <Typography variant='body1' sx={styles.profileInfoBoxTypography()}>
                  {t('Email')}:
                </Typography>
                <Typography variant='body2' sx={styles.viewTypography()}>
                  {profileData?.email ?? '-'}
                </Typography>
              </Box>
              <Box sx={styles.profileInfoBox()}>
                <Typography variant='body1' sx={styles.profileInfoBoxTypography()}>
                  {t('optilabPhone')}:
                </Typography>
                <Typography variant='body2' sx={styles.viewTypography()} textTransform={'capitalize'}>
                  {profileData?.mobile_no ?? '-'}
                </Typography>
              </Box>
              <Box sx={styles.profileInfoBox()}>
                <Typography variant='body1' sx={styles.profileInfoBoxTypography()}>
                  {t('Role')}:
                </Typography>
                <Typography variant='body2' sx={styles.viewTypography()} textTransform={'capitalize'}>
                  {profileData?.role?.name ?? '-'}
                </Typography>
              </Box>
              <Box sx={styles.profileInfoBox()}>
                <Typography variant='body1' sx={styles.profileInfoBoxTypography()}>
                  {t('Country')}:
                </Typography>
                <Typography variant='body2' sx={styles.viewTypography()} textTransform={'capitalize'}>
                  {profileData?.country?.name ?? '-'}
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.profileInfoBoxButton()}>
              <Button
                onClick={() => {
                  toggleAddUserDrawer()
                  setTitle('Edit Details')
                }}
                sx={styles.buttonStyle()}
                id='edit-button'
                variant='contained'
              >
                {t('Edit')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <SidebarProfileEdit
        open={addUserOpen}
        setAddUserOpen={setAddUserOpen}
        toggle={toggleAddUserDrawer}
        dataStore={profileData}
        title={title}
        reCallApiFunction={reCallApiFunction}
      />
    </Grid>
  )
}

ProfileView.acl = {
  subject: 'profile-management',
  action: 'read'
}

export default ProfileView
