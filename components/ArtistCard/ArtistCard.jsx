import { Flex, Box, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'

const ArtistCard = ({ artist }) => {
  const { name, slug, photoFileName } = artist
  return (
    <NCLink
      to={`/artists/${encodeURIComponent(slug)}`}
      _hover={{ textDecoration: 'none' }}
    >
      <Flex>
        <Box
          w="100%"
          shadow="lg"
          border="1px"
          borderColor="gray.800"
          role="group"
        >
          <Photo w="full" fit="cover" h={56} fileName={photoFileName} />
          <Box
            py={1}
            pl={3}
            fontSize={{ base: 'xl', lg: '2xl' }}
            bg="black"
            color="white"
            _groupHover={{ textDecoration: 'line-through' }}
          >
            <Text>{name}</Text>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
