import React from 'react'
import { Stack } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import {
  SiTwitch,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiSpotify,
  SiSoundcloud,
  SiDiscord,
  SiTiktok,
} from 'react-icons/si'

const SocialLinks = ({ isOpen }) => {
  return (
    <Stack
      spacing="6"
      direction="row"
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
        <NCLink
          to="https://www.twitch.tv/dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiTwitch size="30px" />
        </NCLink>
        <NCLink
          to="https://discord.gg/WtgYU9RHXQ"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiDiscord size="30px" />
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
        <NCLink
          to="https://tiktok.com/@dirtynotsorry"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <SiTiktok size="30px" />
        </NCLink>
      </Stack>
    </Stack>
  )
}

export default SocialLinks
