import CMS from '@staticcms/core'
import { useEffect } from 'react'
import { default as IdWidget } from './IdWidget'

import config from './config'

import '@staticcms/core/dist/main.css'

const CMSPage = () => {
  useEffect(() => {
    CMS.init({ config })
    CMS.registerWidget(IdWidget)
  }, [])
}

CMSPage.displayName = 'CMSPage'

export default CMSPage
