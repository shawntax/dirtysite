import { HStack, Flex, Box } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import {
  SiTwitch,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiMixcloud,
  SiSoundcloud,
} from 'react-icons/si'

const Socials = () => {
  return (
    <Flex color="gray.400" py={1}>
      <HStack spacing={6}>
        <NCLink
          to="https://twitch.tv/dirtynotsorry"
          target="_blank"
          role="group"
        >
          <Box _hover={{ color: 'white', boxShadow: 'light' }}>
            <SiTwitch size="2rem" />
          </Box>
        </NCLink>
        <NCLink to="https://soundcloud.com/dirtynotsorry" target="_blank">
          <Box _hover={{ color: 'white' }}>
            <SiSoundcloud size="2rem" />
          </Box>
        </NCLink>
        <NCLink to="http://mixcloud.com/dirtynotsorry" target="_blank">
          <Box _hover={{ color: 'white' }}>
            <SiMixcloud size="2rem" />
          </Box>
        </NCLink>
        <NCLink to="https://facebook.com/dirtynotsorry" target="_blank">
          <Box _hover={{ color: 'white' }}>
            <SiFacebook size="2rem" />
          </Box>
        </NCLink>
        <NCLink to="https://www.instagram.com/dirtynotsorry/" target="_blank">
          <Box _hover={{ color: 'white' }}>
            <SiInstagram size="2rem" />
          </Box>
        </NCLink>
        <NCLink to="https://twitter.com/dirtynotsorry" target="_blank">
          <Box _hover={{ color: 'white' }}>
            <SiTwitter size="2rem" />
          </Box>
        </NCLink>
      </HStack>
    </Flex>
  )
}

export default Socials
