import React from 'react'
import LogoMark from '../../public/logo.svg'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Box {...props}>
      <NextLink href="/" passHref>
        <Link>
          <LogoMark />
        </Link>
      </NextLink>
    </Box>
  )
}
