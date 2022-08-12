import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Script from 'next/script'

const CommunityWidget = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Box id="community-embed" w="100%" />
      <Script
        src="https://mgu-embed.community.com/embed.js"
        data-community-embed-id="9c175af3-61df-4a61-a6ed-837a311113b1"
        strategy="lazyOnload"
      />
    </>
  )
}

export default CommunityWidget
