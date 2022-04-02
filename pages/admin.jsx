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
  return <CMS />
}
AdminPage.displayName = 'AdminPage'
export default AdminPage
