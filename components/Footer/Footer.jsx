import React from 'react'
import { Container, HStack, Flex, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'

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
    <Flex
      direction={['column', 'row']}
      w="100%"
      px={5}
      py={5}
      align="center"
      justify="space-between"
    >
      <Flex color="white" py={[5, 0]}>
        <HStack spacing={[6, 8]}>
          <NCLink to="https://twitch.tv/dirtynotsorry" target="_blank">
            <SiTwitch size="3rem" />
          </NCLink>
          <NCLink to="https://soundcloud.com/dirtynotsorry" target="_blank">
            <SiSoundcloud size="3rem" />
          </NCLink>
          <NCLink to="http://mixcloud.com/dirtynotsorry" target="_blank">
            <SiMixcloud size="3rem" />
          </NCLink>
          <NCLink to="https://facebook.com/dirtynotsorry" target="_blank">
            <SiFacebook size="3rem" />
          </NCLink>
          <NCLink to="https://www.instagram.com/dirtynotsorry/" target="_blank">
            <SiInstagram size="3rem" />
          </NCLink>
          <NCLink to="https://twitter.com/dirtynotsorry" target="_blank">
            <SiTwitter size="3rem" />
          </NCLink>
        </HStack>
      </Flex>
      <Text color="white">© 2022 Dirty Not Sorry 🐷</Text>
    </Flex>
  </Container>
)

export default Footer
