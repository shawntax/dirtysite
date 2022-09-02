import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Script from 'next/script'
import { useRouter } from 'next/router'

const CommunityWidget = () => {
  return (
    <>
      <p>ay</p>
      <Box id="community-embed" w="100%" />
      <Script
        src="https://mgu-embed.community.com/embed.js"
        data-community-embed-id="8f9f5079-99cf-451f-b2fc-8baafc2a652d"
        strategy="worker"
      />
    </>
  )
}

export default CommunityWidget
