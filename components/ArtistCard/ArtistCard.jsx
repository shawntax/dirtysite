import { Flex, Box, chakra } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'

const ArtistCard = ({ artist }) => {
  const { name, slug, photoFileName } = artist
  return (
    <NCLink to={`/artists/${encodeURIComponent(slug)}`}>
      <Flex>
        <Box w="100%" shadow="lg" role="group">
          <Photo w="full" fit="cover" h={56} fileName={photoFileName} />
          <Box
            py={1}
            pl={3}
            bg="gray.100"
            color="black"
            _groupHover={{ textDecoration: 'underline' }}
          >
            <chakra.span>{name}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
