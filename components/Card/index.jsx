import React from 'react'
import { Box, Image, Link, Text, Slide } from '@chakra-ui/react'

const Card = (props) => {
  const { djName, djPhoto } = props
  return (
    <Link href={`/artists/${djName}`}>
      <Box
        bg="gray.200"
        pb="1"
        _hover={{
          bg: 'gray.800',
          textColor: 'white',
        }}
      >
        <Image
          mx="auto"
          h="90%"
          src={djPhoto}
          alt="djPhoto"
          h="fill"
          w="fill"
        />
        <Box>
          <Box w="fill" pl="5">
            <Text fontSize="large" isTruncated>
              {djName}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default Card
