import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import NCLink from '../NCLink'

export default function Logo(props) {
  return (
    <Box {...props}>
      <NCLink href="/">
        <Image src="/logo.svg" alt="Dirty Not Sorry" />
      </NCLink>
    </Box>
  )
}
