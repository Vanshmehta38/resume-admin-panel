// ** React Imports
import React from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import { Icon } from '@iconify/react'

// ** Styles and Styled Components
import * as styles from './styles'

const ItemComponent = ({ ...props }) => {
  return <Icon icon={'mdi:home-outline'} fontSize={'1.6rem'} {...props} id='dashboard' />
}

const Separator = ({ value, ...props }) => {
  return <Typography {...props}>{value ?? `/`}</Typography>
}

const LinkItems = ({ item }) => {
  return (
    <Link href={item?.path} style={styles?.linkStyle}>
      <Typography fontWeight={500}>{item?.title}</Typography>
    </Link>
  )
}

export default function BreadcrumbComponent({ data }) {
  const router = useRouter()

  return (
    <Box sx={styles?.rootContainer}>
      <ItemComponent onClick={() => router.push('/dashboard')} style={styles.homeIcon} id='dashboard' />

      {data?.map((item, index) => {
        item.path = item?.path ?? router.asPath

        return (
          <React.Fragment key={index}>
            <Separator sx={styles?.divider} />
            <LinkItems item={item} router={router} />
          </React.Fragment>
        )
      })}
    </Box>
  )
}
