import {
  Box,
  Image,
  Text,
  Link,
  // useMediaQuery,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react'

import PageContainer from '../../components/PageContainer'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import OptImage from '../../components/OptImage'
function Artist({ artist }) {
  return (
    <PageContainer title="Artist" pb="5" bg="black">
      <Box color="white">
        <Box mt="8" d="flex">
          <SimpleGrid columns={{ sm: 1, md: 2 }} bg="">
            <OptImage filename={artist.photoUrl} />
            <Box p="4">
              <Box>
                <Text mb="5" as="h1" textColor="white" fontSize={'5xl'}>
                  {artist.name}
                </Text>
              </Box>
              <Divider mb="4" mt="-2" />
              <Box d="flex" mb="8">
                <Link href={artist.instaLink}>
                  <Image
                    _hover={{
                      filter: 'brightness(10%)',
                    }}
                    src="../instagram.svg"
                    h="10"
                    boxSize="60px"
                    alt="insta"
                  />
                </Link>
                <Link href={artist.fbLink} px="5">
                  <Image
                    _hover={{
                      filter: 'brightness(10%)',
                    }}
                    src="../facebook.svg"
                    h="10"
                    boxSize="60px"
                    alt="fb"
                  />
                </Link>
                <Link href={artist.scLink}>
                  <Image
                    _hover={{
                      filter: 'brightness(10%)',
                    }}
                    src="../soundcloud.svg"
                    h="10"
                    boxSize="60px"
                    alt="soundcloud"
                  />
                </Link>
              </Box>
              <ReactMarkdown components={ChakraUIRenderer()}></ReactMarkdown>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </PageContainer>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )
  artists.map((artist) => {
    artist['slug'] = artist.name.toLowerCase().replace(/\s/g, '')
  })
  const artist = artists.find((x) => x.slug === slug) || {}

  return {
    props: { artist: artist },
  }
}

export async function getStaticPaths() {
  const paths = []

  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )
  artists.map((artist) => {
    artist['slug'] = artist.name.toLowerCase().replace(/\s/g, '')
  })

  artists.map((artist) =>
    paths.push({ params: { slug: artist.slug.toString() } })
  )

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

export default Artist
