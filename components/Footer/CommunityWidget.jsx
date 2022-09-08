import { Box } from '@chakra-ui/react'
import Script from 'next/script'

const CommunityWidget = () => {
  return (
    <>
      <Box id="community-embed" w="100%" />
      <Script
        src="https://mgu-embed.community.com/embed.js"
        data-community-embed-id="8f9f5079-99cf-451f-b2fc-8baafc2a652d"
        strategy="lazyOnload"
      />
    </>
  )
}

// sms://++14152370615?&body=Send%20this%20message%20for%20an%20invite%20to%20text%20with%20Dirty%20Not%20Sorry%20via%20Community%20(Reference%20code%3A%20XsdPGi)
export default CommunityWidget
