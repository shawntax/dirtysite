import { Box, Center, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import PageContainer from '../components/PageContainer'
import Artists from './artists'
import { attributes } from '../content/artists/knives.md'

function Artist() {
  const router = useRouter()
  const artist = router.query.artist || []
  let { bio } = attributes

  return (
    <>
      <PageContainer title="Artist">
        <Box px="2">
          <Box>
            <Image
              mx="auto"
              src="../group.jpg"
              borderRadius="3xl"
              alt="djPhoto"
            />
          </Box>
          <Box>
            <Text my="5" as="h1" textColor="white" fontSize="3xl">
              {artist[1]}
            </Text>
          </Box>
          <Center d="flex" mb="5">
            <Image src="../instagram.svg" h="20" />
            <Image src="../facebook.svg" h="20" px="5" />
            <Image src="../soundcloud.svg" h="20" />
          </Center>
          <Text textColor="gray.200">{bio}</Text>
        </Box>
      </PageContainer>
    </>
  )
}

export default Artist
