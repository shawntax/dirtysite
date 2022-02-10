import React from 'react'
import { Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      justify="center"
      align="center"
      fontSize={{
        base: 'xs',
        md: 'lg',
      }}
      color="white"
      bg="black"
      w="100%"
      py="3"
    >
      <p>© 2022 Dirty Not Sorry</p>
    </Flex>
  )
}

export default Footer
