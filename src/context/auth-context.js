// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Config
import { authentication } from '@endpoints/authentication'
import axios from 'axios'
import authConfig from 'src/configs/auth'
import { clearCookies, userLogin, userLogout } from 'src/utils/api-routes/auth'
import { useTranslation } from 'react-i18next'

// ** Defaults
const defaultProvider = {
  user: null,
  permissionData: null,
  loading: true,
  setUser: () => null,
  setPermissionData: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setRecallApi: () => null
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [permissionData, setPermissionData] = useState(defaultProvider.permissionData)
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [recallApi, setRecallApi] = useState('')

  // ** Hooks
  const router = useRouter()

  const { i18n } = useTranslation()

  const removeLocalStorageData = async () => {
    localStorage.removeItem('userData')
    localStorage.removeItem(authConfig.storageTokenKeyName)
    localStorage.removeItem(authConfig.storageUId)
    localStorage.removeItem(authConfig.storageRoleName)
    await clearCookies()
    router.push('/login')
  }

  useEffect(() => {
    const initAuth = async () => {
      try {
        const lang = localStorage.getItem('language_data')
        i18n.changeLanguage(lang)
        const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
        const loginHistoryToken = JSON.parse(window.localStorage.getItem(authConfig.userData))
        if (storedToken) {
          setLoading(true)
          await axios
            .get(window?.location?.origin + authentication.verifyToken.uri, {
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${storedToken}`
              }
            })
            .then(async res => {
              let responseData = res?.data?.data
              setLoading(false)
              setPermissionData(responseData.permission)
              setUser({
                ...responseData,
                login_history_u_id: loginHistoryToken?.login_history_u_id
              })
            })
            .catch(() => {
              setLoading(false)
              handleLogout()
            })
        } else {
          removeLocalStorageData()
          setUser(null)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recallApi])

  const handleLogin = async (params, errorCallback) => {
    await userLogin(params)
      .then(async response => {
        let responseData = response.data

        setPermissionData(responseData.permission)
        setUser({ ...responseData })

        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/login' ? returnUrl : '/dashboard'
        router.replace(redirectURL)

        return response
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = async () => {
    setUser(null)
    setLoading(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    window.localStorage.removeItem(authConfig.storageUId)
    window.localStorage.removeItem(authConfig.storageRoleName)
    window.localStorage.removeItem('language_data')
    router.push('/login')
    await userLogout(user?.login_history_u_id)
  }

  const values = {
    user,
    loading,
    permissionData,
    setUser,
    setLoading,
    setPermissionData,
    login: handleLogin,
    logout: handleLogout,
    setRecallApi
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
