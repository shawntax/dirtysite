import { Flex, Box, Text, AspectRatio } from '@chakra-ui/react'
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
          w="full"
          shadow="lg"
          border="1px"
          borderColor="gray.800"
          role="group"
        >
          <AspectRatio ratio={1 / 1}>
            <Photo fileName={photoFileName} fill={true} />
          </AspectRatio>
          <Box
            py={1}
            pl={3}
            fontSize="2xl"
            bg="black"
            color="white"
            _groupHover={{ textDecoration: 'underline' }}
          >
            <Text>{name}</Text>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
