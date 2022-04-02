import React from 'react'
import { Flex, Box, chakra } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import OptimizedImage from '@components/OptImage'

const ArtistCard = ({ artist }) => {
  const { name, photoUrl, slug } = artist
  return (
    <NCLink href={`/artists/${encodeURIComponent(slug)}`}>
      <Flex border="2px">
        <Box w="100%" shadow="lg">
          <OptimizedImage
            w="full"
            fit="cover"
            h={56}
            filename={`${photoUrl}`}
          />
          <Box py={1} pl={3} bg="gray.100" color="black">
            <chakra.span>{name}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </NCLink>
  )
}

export default ArtistCard
