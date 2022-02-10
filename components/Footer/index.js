import React from 'react'
import { Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center
      as="footer"
      fontSize={{
        base: 'xs',
        md: 'lg',
      }}
      color="white"
      py="3"
    >
      © 2022 Dirty Not Sorry
    </Center>
  )
}

export default Footer
