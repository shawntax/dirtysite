import React from 'react'
import { Flex, Box, Image, Link, Text, chakra } from '@chakra-ui/react'

const ArtistCard = ({ artist }) => {
  const { name, photoUrl } = artist
  return (
    <Link href={`/artists/${encodeURIComponent(artist.slug)}`} maxW={300}>
      <Flex border="2px">
        <Box w="100%" shadow="lg">
          <Box h={60} bgGradient="linear(to-r, green.200, pink.500)" />
          {/* <Image w="full" h={56} fit="cover" src={photoUrl} alt="avatar" /> */}
          <Box py={1} pl={3} bg="gray.100" color="black">
            <chakra.span>{name}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default ArtistCard
