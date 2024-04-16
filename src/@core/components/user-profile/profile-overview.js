// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Styles and Styled Components Imports
import * as styles from '@styles-page/profile/styles'

const profileUserOverviewLabel = ({ profileData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={styles.overviewCardContent()}>
            <Box sx={styles.overviewBox()}>
              <Typography variant='h6' sx={styles.overviewText()}>
                {profileData?.profileOverview?.overview}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

profileUserOverviewLabel.acl = {
  subject: 'profile-management',
  action: 'read'
}

export default profileUserOverviewLabel
