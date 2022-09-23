import React from 'react'
import { Stack } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import {
  SiDiscord,
  SiTwitch,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiSpotify,
  SiSoundcloud,
} from 'react-icons/si'

const SocialLinks = ({ isOpen }) => {
  return (
    <Stack
      spacing="6"
      direction="row"
      // direction={{
      //   base: 'column',
      //   xl: 'row',
      //   lg: 'row',
      //   md: 'row',
      //   sm: 'column',
      // }}
      align="center"
      py={{ base: '6', lg: isOpen && '12' }}
      display={{
        base: isOpen ? 'flex' : 'none',
        md: isOpen ? 'flex' : 'none',
        xl: 'flex',
      }}
      justify={{ base: 'center', xl: 'flex-end' }}
    >
      <Stack spacing="5" direction={{ base: 'column', lg: 'row' }}>
        {/* <Stack spacing="5" direction={{ base: 'row' }}> */}
        <NCLink
          to="https://www.twitch.tv/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiTwitch size="30px" />
        </NCLink>
        <NCLink
          to="https://open.spotify.com/playlist/5ZdBfVoT7Oh8eZ5MioyQrS"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiSpotify size="30px" />
        </NCLink>
        <NCLink
          to="https://soundcloud.com/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiSoundcloud size="30px" />
        </NCLink>
      </Stack>
      <Stack spacing="5" direction={{ base: 'column', lg: 'row' }}>
        {/* <Stack spacing="5" direction={{ base: 'row' }}> */}
        {/* <NCLink
          to="https://discord.gg/YF6gfXdVYf"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiDiscord size="30px" />
        </NCLink> */}
        <NCLink
          to="https://www.facebook.com/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiFacebook size="30px" />
        </NCLink>
        <NCLink
          to="https://instagram.com/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiInstagram size="30px" />
        </NCLink>
        <NCLink
          to="https://twitter.com/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiTwitter size="30px" />
        </NCLink>
      </Stack>
    </Stack>
  )
}

export default SocialLinks
