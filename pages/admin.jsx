import dynamic from 'next/dynamic'
import config from '@cms/config'
import { Widget as IdWidget } from '@ncwidgets/id'

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.registerWidget(IdWidget)
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

AdminPage.pageName = 'AdminPage'

export default AdminPage
