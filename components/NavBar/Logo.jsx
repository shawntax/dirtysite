import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import NCLink from '@components/NCLink'

export default function Logo(props) {
  return (
    <Box {...props}>
      <NCLink to="/">
        <Image src="/brand/logo.svg" alt="Dirty Not Sorry" />
      </NCLink>
    </Box>
  )
}
