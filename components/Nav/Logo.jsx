import React from 'react'
import { Image } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import NextLink from 'next/link'

export default function Logo(props) {
  const { orientation = 'horizontal' } = props
  const url =
    orientation === 'horizontal'
      ? '/brand/logo-horiz.svg'
      : '/brand/logo-vert.svg'

  return (
    // <NCLink to="/">
    //   <Image {...props} src={url} alt="Dirty Not Sorry" />
    // </NCLink>
    <NextLink href={'/'}>
      <Image {...props} src={url} alt="Dirty Not Sorry" />
    </NextLink>
  )
}
