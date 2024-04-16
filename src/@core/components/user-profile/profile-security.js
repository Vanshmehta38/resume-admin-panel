// ** React imports
import { useState } from 'react'

// ** Custom Component
import ProfileChangePassword from '@components/profile-change-password'
import ProfileLoginHistories from '@components/profile-login-histories'
import ProfileRecentDevice from '@components/profile-recent-devices'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Default AuthConfig
import authConfig from 'src/configs/auth'

// ** Api imports
import { updatePassword } from '@api/profile'

const UserSecurity = ({ profileData }) => {
  // ** States
  const [reset, setReset] = useState(0)

  // eslint-disable-next-line no-unused-vars
  const onChangePassword = async data => {
    const loginId = localStorage.getItem(authConfig.storageUId)

    const body = {
      password: data.password
    }

    await updatePassword({ id: loginId, data: body }).then(res => {
      if (res?.status === true) {
        setReset(reset + 1)
      }
    })
  }

  return (
    <Grid container spacing={6}>
      {/* change password */}
      <Grid item xs={12}>
        <ProfileChangePassword onChangePassword={onChangePassword} resetForm={reset} />
      </Grid>

      {/* Login Histories */}
      <Grid item xs={12}>
        <ProfileLoginHistories profileData={profileData?.admin_login_histories?.inactive_user} />
      </Grid>

      {/* Recent devices */}
      <Grid item xs={12}>
        <ProfileRecentDevice profileData={profileData?.admin_login_histories?.active_user} />
      </Grid>
    </Grid>
  )
}

UserSecurity.acl = {
  subject: 'profile-management',
  action: 'read'
}

export default UserSecurity
