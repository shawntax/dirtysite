import React from 'react'
import LogoMark from '../../public/logo.svg'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Box {...props}>
      <NextLink href="/" passHref>
        <Link>
          <img src="/logo_white_horz.png"/>
        </Link>
      </NextLink>
    </Box>
  )
}
