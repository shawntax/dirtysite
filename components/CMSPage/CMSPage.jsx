import CMS from '@staticcms/core'
import { useEffect } from 'react'
import { default as IdWidget } from './IdWidget'

import '@staticcms/core/dist/main.css'

import config from './config'

const CMSPage = () => {
  useEffect(() => {
    CMS.init({ config })
    CMS.registerWidget(IdWidget)
  }, [])
}

CMSPage.displayName = 'CMSPage'

export default CMSPage
