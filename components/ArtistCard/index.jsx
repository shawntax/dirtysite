import React from 'react'
import { Flex, Box, Image, chakra } from '@chakra-ui/react'
import NCLink from '../NCLink'

const ArtistCard = ({ artist }) => {
  const { name, photoUrl, slug } = artist
  return (
    <NCLink href={`/artists/${encodeURIComponent(slug)}`}>
      <Flex border="2px">
        <Box w="100%" shadow="lg">
          {<Image w="full" h={56} fit="cover" src={photoUrl} alt={name} />}
          <Box py={1} pl={3} bg="gray.100" color="black">
            <chakra.span>{name}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
