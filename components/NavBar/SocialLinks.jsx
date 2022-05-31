import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import {
  SiTwitch,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiMixcloud,
  SiSoundcloud,
} from 'react-icons/si'

/* const NCLink = ({ children, to = '/', ...rest }) => {
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}
 */
const SocialLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <NCLink href="">
          <SiTwitch size="40px" />
        </NCLink>
        <NCLink href="">
          <SiSoundcloud size="40px" />
        </NCLink>
        <NCLink href="">
          <SiMixcloud size="40px" />
        </NCLink>
        <NCLink href="">
          <SiFacebook size="40px" />
        </NCLink>
        <NCLink href="">
          <SiInstagram size="40px" />
        </NCLink>
        <NCLink href="">
          <SiTwitter size="40px" />
        </NCLink>
      </Stack>
    </Box>
  )
}

export default SocialLinks
