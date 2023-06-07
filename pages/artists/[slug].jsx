import { getLayout } from '@components/SiteLayout'
import {
  Flex,
  Box,
  Heading,
  VStack,
  Text,
  AspectRatio,
  Divider,
  Container,
} from '@chakra-ui/react'
import Photo from '@components/Photo'
import NCLink from '@components/NCLink'
import { fetchArtists } from '@helpers/cms.helpers'
import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiTwitter,
  SiMixcloud,
  SiSoundcloud,
  SiSpotify,
  SiTwitch,
} from 'react-icons/si'
import { RxExternalLink } from 'react-icons/rx'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

const SOCIALS = [
  {
    type: 'instagram',
    urlPrefix: 'https://instagram.com/',
    icon: <SiInstagram />,
  },
  {
    type: 'facebook',
    urlPrefix: 'https://facebook.com/',
    icon: <SiFacebook />,
  },
  { type: 'tiktok', urlPrefix: 'https://tiktok.com/@', icon: <SiTiktok /> },
  { type: 'twitter', urlPrefix: 'https://twitter.com/', icon: <SiTwitter /> },
  { type: 'twitch', urlPrefix: 'https://twitch.tv/', icon: <SiTwitch /> },
  {
    type: 'spotify',
    urlPrefix: 'https://open.spotify.com/artist/',
    icon: <SiSpotify />,
  },
  {
    type: 'soundcloud',
    urlPrefix: 'https://soundcloud.com/',
    icon: <SiSoundcloud />,
  },
  {
    type: 'mixcloud',
    urlPrefix: 'https://mixcloud.com/',
    icon: <SiMixcloud />,
  },
]

const bioTheme = {
  a: ({ href, children }) => {
    return (
      <NCLink
        href={href}
        target="_blank"
        rel="noopener"
        textDecoration="underline"
        textDecorationStyle="dotted"
        textDecorationColor="gray.400"
      >
        {children?.toString().toLowerCase()}
        <RxExternalLink style={{ display: 'inline', height: '13px' }} />
      </NCLink>
    )
  },
}
function Artist({ artist }) {
  return (
    <Container maxW="container.lg">
      <Flex direction={{ base: 'column', lg: 'row' }} justify="center">
        <Box
          w={{ base: 'full', md: '60', lg: '96' }}
          h="auto"
          mx={{ base: 'auto', lg: '8' }}
          border="1px"
          borderColor="gray.800"
        >
          <AspectRatio ratio={1 / 1}>
            <Photo fill={true} fileName={artist.photoFileName} />
          </AspectRatio>
        </Box>
        <Flex direction="column" my={{ base: '4', lg: 'none' }}>
          <Heading>{artist.name}</Heading>
          <VStack fontSize="2xl" align="start" spacing="0" mt="4">
            {artist.socials.map((social, index) => {
              const { type, urlPrefix, icon } = SOCIALS.find(
                (s) => s.type === social.type
              )
              return (
                <NCLink key={index} to={`${urlPrefix}${social.handle}`}>
                  <Flex align="center" spacing="2">
                    {icon}
                    <Text pl="2">{type.toUpperCase()}</Text>
                  </Flex>
                </NCLink>
              )
            })}
          </VStack>
        </Flex>
      </Flex>
      {artist.bio && (
        <>
          <Divider py="2" />
          <Box fontSize="2xl" pt="2">
            <ReactMarkdown
              components={ChakraUIRenderer(bioTheme)}
              children={artist.bio}
              skipHtml
            />
          </Box>
        </>
      )}
    </Container>
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
