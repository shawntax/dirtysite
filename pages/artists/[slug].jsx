import { getLayout } from '@components/SiteLayout'
import { Flex, Box, Heading, VStack, Text, AspectRatio } from '@chakra-ui/react'
import Photo from '@components/Photo'
import NCLink from '@components/NCLink'
import {
  SiFacebook,
  SiInstagram,
  SiMixcloud,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
  SiTwitch,
  SiTwitter,
} from 'react-icons/si'
import { fetchArtists } from '@helpers/cms.helpers'

function Artist({ artist }) {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify="center"
      maxW="container.lg"
    >
      <Box
        w={{ base: 'full', md: '60', lg: '96' }}
        h="auto"
        mx={{ base: 'auto', lg: '8' }}
        border="1px"
        borderColor="gray.800"
      >
        <AspectRatio ratio={1 / 1}>
          <Photo
            h="full"
            w="full"
            layout="fill"
            objectFit="cover"
            fileName={artist.photoFileName}
          />
        </AspectRatio>
      </Box>
      <Flex direction="column" my={{ base: '4', lg: 'none' }}>
        <Heading>{artist.name}</Heading>
        <VStack fontSize="2xl" align="start" spacing="0" mt="4">
          {artist.fbLink ? (
            <NCLink to={artist.fbLink}>
              <Flex align="center" spacing="2">
                <SiFacebook />
                <Text pl="2">Facebook</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.instaLink ? (
            <NCLink to={artist.instaLink}>
              <Flex align="center" spacing="2">
                <SiInstagram />
                <Text pl="2">Instagram</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.scLink ? (
            <NCLink to={artist.scLink}>
              <Flex align="center" spacing="2">
                <SiSoundcloud />
                <Text pl="2">SoundCloud</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.tiktokLink ? (
            <NCLink to={artist.tiktokLink}>
              <Flex align="center" spacing="2">
                <SiTiktok />
                <Text pl="2">TikTok</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.twitchLink ? (
            <NCLink to={artist.twitchLink}>
              <Flex align="center" spacing="2">
                <SiTwitch />
                <Text pl="2">Twitch</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.twitterLink ? (
            <NCLink to={artist.twitterLink}>
              <Flex align="center" spacing="2">
                <SiTwitter />
                <Text pl="2">Twitter</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.mcLink ? (
            <NCLink to={artist.mcLink}>
              <Flex align="center" spacing="2">
                <SiMixcloud />
                <Text pl="2">Mixcloud</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}

          {artist.spotLink ? (
            <NCLink to={artist.spotLink}>
              <Flex align="center" spacing="2">
                <SiSpotify />
                <Text pl="2">Spotify</Text>
              </Flex>
            </NCLink>
          ) : (
            <></>
          )}
        </VStack>
      </Flex>
    </Flex>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const artists = fetchArtists()
  const artist = artists.find((x) => x.slug === slug) || {}

  return {
    props: { artist },
  }
}

export async function getStaticPaths() {
  const artists = fetchArtists()

  const paths = artists.map((artist) => {
    return {
      params: {
        slug: artist.slug,
      },
    }
  })

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Artist.getLayout = getLayout

export default Artist
