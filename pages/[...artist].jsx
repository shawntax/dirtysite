import { Box, Image, Text, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import PageContainer from '../components/PageContainer'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

function Artist() {
  const router = useRouter()
  let artist = {}
  const dj = router.query.artist || []

  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../content/artists', false, /\.json$/)
  )

  for (let i = 0; i < artists.length; i++) {
    if (dj[1] == artists[i].djName) {
      artist = artists[i]
    }
  }
  artist.djPhoto = '../' + artist.djPhoto
  return (
    <>
      <PageContainer title="Artist">
        <Box px="4">
          <Box mt="8">
            <Image
              mx="auto"
              src={artist.djPhoto}
              borderRadius="3xl"
              alt="djPhoto"
            />
          </Box>
          <Box>
            <Text my="5" as="h1" textColor="white" fontSize="3xl">
              {artist.djName}
            </Text>
          </Box>
          <Box d="flex" mb="5">
            <Link href={artist.instaLink}>
              <Image src="../instagram.svg" h="20" />
            </Link>
            <Image src="../facebook.svg" h="20" px="5" />
            <Image src="../soundcloud.svg" h="20" />
          </Box>

          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={artist.bio}
          />
        </Box>
      </PageContainer>
    </>
  )
}

export default Artist
