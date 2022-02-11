import { Box, Image, Text, Link, Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import PageContainer from '../../components/PageContainer'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

function Artist() {
  const router = useRouter()
  const { slug } = router.query
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )
  const artist = artists.find((x) => x.slug === slug) || {}
  console.log(artist)
  return (
    <PageContainer title="Artist">
      <Center>
        <Box px="4" color="white">
          <Box mt="8">
            <Image maxW={300} src={artist.photoUrl} alt="djPhoto" />
          </Box>
          <Box>
            <Text my="5" as="h1" textColor="white" fontSize="3xl">
              {artist.name}
            </Text>
          </Box>
          <Box d="flex" mb="5">
            <Link href={artist.instaLink}>
              <Image src="../instagram.svg" h="10" alt="insta" />
            </Link>
            <Link href={artist.fbLink}>
              <Image src="../facebook.svg" h="10" px="5" alt="fb" />
            </Link>
            <Link href={artist.scLink}>
              <Image src="../soundcloud.svg" h="10" alt="soundcloud" />
            </Link>
          </Box>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={artist.bio}
          />
        </Box>
      </Center>
    </PageContainer>
  )
}

export default Artist
