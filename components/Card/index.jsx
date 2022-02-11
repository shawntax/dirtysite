import React from 'react'
import { Flex, Box, Image, Link, Text, chakra } from '@chakra-ui/react'

const Card = (props) => {
  const { djName, djPhoto } = props
  return (
    <Link>
      <Flex>
        <Box shadow="lg">
          <Box w={56} h={56} bgGradient="linear(to-r, green.200, pink.500)" />
          {/* <Image w="full" h={56} fit="cover" src="" alt="avatar" /> */}
          <Box w="100%" py={1} pl={3} bg="gray.100" color="black">
            <chakra.span>{djName}</chakra.span>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default Card
