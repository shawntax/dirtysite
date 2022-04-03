import React from 'react'
import { Container, Flex, Spacer, Text } from '@chakra-ui/react'

import {
  SiTwitch,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiMixcloud,
  SiSoundcloud,
} from 'react-icons/si'

const Footer = () => (
  <Container maxW="container.xl">
    <Flex w="100%" px={5} py={5}>
      <Text color="white">🐷</Text>
      <Spacer />
      <Text color="white">© 2022 Dirty Not Sorry</Text>
    </Flex>
  </Container>
)

export default Footer
