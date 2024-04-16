// ** React imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Default AuthConfig
import authConfig from 'src/configs/auth'

// ** Components Imports
import ProfileTab from '@components/user-profile/profile-tab'
import ProfileView from '@components/user-profile/profile-view'
import FallbackSpinner from '@components/spinner'

// ** Custom Components Imports
import BreadcrumbComponent from '@components/bread-crumb'
import { profileBreadCrumb } from '@breadcrumbs/index'
import { capitalizeText } from '@functions/capitalize-text'

// ** API Imports
import { viewProfile } from '@api/profile'

const UserView = () => {
  // ** States
  const [profileData, setProfileData] = useState([])
  const [reCallApi, setReCallApi] = useState('')
  const [wait, setWait] = useState(true)

  // profile view api function
  const callApi = async () => {
    const loginId = localStorage.getItem(authConfig.storageUId)

    await viewProfile(loginId).then(res => {
      if (res?.status === true) {
        setProfileData(res?.data)
      }
    })
    setWait(false)
  }

  useEffect(() => {
    callApi()
  }, [reCallApi])

  if (wait) {
    return <FallbackSpinner />
  } else {
    return (
      <>
        <BreadcrumbComponent data={profileBreadCrumb(capitalizeText(profileData?.first_name))} />
        <Grid container spacing={6}>
          <Grid item xs={12} md={4} lg={4}>
            <ProfileView profileData={profileData} reCallApiFunction={setReCallApi} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <ProfileTab profileData={profileData} reCallApiFunction={setReCallApi} />
          </Grid>
        </Grid>
      </>
    )
  }
}

UserView.acl = {
  subject: 'profile-management',
  action: 'read'
}

export default UserView
