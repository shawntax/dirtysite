import React from 'react'
import { Box, Image, ScaleFade } from '@chakra-ui/react'
import NCLink from '@components/NCLink'

export default function Logo(props) {
  const clientWindowHeight = props.clientWindowHeight
  const page = props.page
  const isLargerThan1280 = props.isLargerThan1280
  const isOpen = props.isOpen
  return (
    <ScaleFade
      initialScale={0.6}
      in={
        clientWindowHeight > 300 ||
        page != 'Home' ||
        (page == 'Home' && isOpen == true && isLargerThan1280 != true)
      }
      out={clientWindowHeight < 300}
    >
      <Box {...props}>
        <NCLink to="/">
          <Image src="/brand/logo.svg" alt="Dirty Not Sorry" />
        </NCLink>
      </Box>
    </ScaleFade>
  )
}
