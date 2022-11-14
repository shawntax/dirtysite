import React from 'react'
import { Image } from '@chakra-ui/react'
import NCLink from '@components/NCLink'

export default function Logo(props) {
  const { orientation = 'horizontal' } = props
  const url =
    orientation === 'horizontal'
      ? '/brand/logo-horiz.svg'
      : '/brand/logo-vert.svg'

  return (
    <NCLink to="/">
      <Image
        src={url}
        alt="Dirty Not Sorry"
        height="100%"
        width="100%"
        {...props}
      />
    </NCLink>
  )
}
