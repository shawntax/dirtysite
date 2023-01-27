import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const Admin = () => {
  const CMSPage = dynamic(() => import('@components/CMSPage'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  })

  return useMemo(() => <CMSPage key="admin-cms-page" />, [])
}

Admin.pageName = 'AdminPage'

export default Admin
