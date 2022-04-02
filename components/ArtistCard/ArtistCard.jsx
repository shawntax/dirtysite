import { Flex, Box, chakra } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'

const ArtistCard = ({ artist }) => {
  const { name, slug, photoFileName } = artist
  return (
    <NCLink href={`/artists/${encodeURIComponent(slug)}`}>
      <Flex border="2px">
        <Box w="100%" shadow="lg">
          <Photo w="full" fit="cover" h={56} fileName={photoFileName} />
          <Box py={1} pl={3} bg="gray.100" color="black">
            <chakra.span>{name}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
