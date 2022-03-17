import dynamic from 'next/dynamic'
import config from '../cms/config'
import netlifyAuth from '../netlifyAuth.js'
import { useEffect, useState } from 'react'

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
)

const AdminPage = () => {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
    })
  }, [loggedIn])

  return <CMS />
}
AdminPage.displayName = 'AdminPage'
export default AdminPage
