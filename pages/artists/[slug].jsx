import { getLayout } from '@components/SiteLayout'
import { Box, Image, Text, Link, Divider, SimpleGrid } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Photo from '@components/Photo'

import { fetchArtists } from '@helpers/cms.helpers'

function Artist({ artist }) {
  return (
    <Box color="white">
      <Box mt="8" d="flex">
        <SimpleGrid columns={{ sm: 1, md: 2 }} bg="">
          <Photo fileName={artist.photoFileName} />
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
  )
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const artists = fetchArtists()
  const artist = artists.find((x) => x.slug === slug) || {}

  return {
    props: { artist: artist },
  }
}

export async function getStaticPaths() {
  const paths = []

  const artists = fetchArtists()

  artists.forEach((artist) => paths.push({ params: { slug: artist.slug } }))

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Artist.getLayout = getLayout

export default Artist
