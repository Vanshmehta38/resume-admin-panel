// ** React Imports
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import UserSecurity from './profile-security'

// ** Styles and Styled Components Imports
import * as Styled from '@styles-page/profile/styled-components'
import * as styles from '@styles-page/profile/styles'

const ProfileTab = ({ profileData, reCallApiFunction }) => {
  const { t } = useTranslation()

  // ** State
  const [activeTab, setActiveTab] = useState('security')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={styles.profileTabList()}
      >
        <Styled.Tab value='security' label={t('Security')} icon={<Icon icon='mdi:lock-outline' />} />
      </TabList>
      <Box mt={6}>
        <>
          <TabPanel sx={styles.profilePadding()} value='security'>
            <UserSecurity profileData={profileData} reCallApiFunction={reCallApiFunction} />
          </TabPanel>
        </>
      </Box>
    </TabContext>
  )
}

ProfileTab.acl = {
  subject: 'profile-management',
  action: 'read'
}

export default ProfileTab
