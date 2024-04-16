// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'

// ** Store Imports
import { QueryClient, QueryClientProvider } from 'react-query'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import { defaultACLObj } from 'src/configs/acl'
import 'src/configs/i18n'
import themeConfig from 'src/configs/themeConfig'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import AclGuard from 'src/@core/components/auth/AclGuard'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import UserLayout from 'src/layouts/user-layout'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import { AuthProvider } from 'src/context/auth-context'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { toastOptionsDefault } from '@functions/toast-options'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/themes/prism-tomorrow.css'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig?.routingLoader) {
  Router?.events?.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router?.events?.on('routeChangeError', () => {
    NProgress.done()
  })
  Router?.events?.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

const queryClient = new QueryClient()

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const contentHeightFixed = Component?.contentHeightFixed ?? false

  const getLayout =
    Component?.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
  const setConfig = Component?.setConfig ?? undefined
  const authGuard = Component?.authGuard ?? true
  const guestGuard = Component?.guestGuard ?? false
  const aclAbilities = Component?.acl ?? defaultACLObj

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig?.templateName} - Dashboard`}</title>
        <meta name='description' content={`${themeConfig?.templateName} – Dashboard Application for Admins`} />
        <meta name='keywords' content='Optilab, Machine, Parts, Optilab Dashboard, Optilab Admin Panel' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}>
                        {getLayout(<Component {...pageProps} />)}
                      </AclGuard>
                    </Guard>
                    <ReactHotToast>
                      <Toaster position={settings?.toastPosition} toastOptions={toastOptionsDefault} />
                    </ReactHotToast>
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default App
