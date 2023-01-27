import CMS from '@staticcms/core'
import { useEffect } from 'react'

import config from './config'

const CMSPage = () => {
  useEffect(() => {
    CMS.init({ config })
  }, [])
}

CMSPage.displayName = 'CMSPage'

export default CMSPage
