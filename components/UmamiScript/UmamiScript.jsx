import Script from 'next/script'
import { UMAMI_SITE_ID } from '@helpers/umami.helpers'

const UmamiScript = () => {
  return (
    <Script
      id="umami"
      strategy="afterInteractive"
      src="https://analytics.umami.is/script.js"
      data-website-id={UMAMI_SITE_ID}
    />
  )
}

export default UmamiScript
