import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'

const Footer = () => (
  <Container maxW="container.lg">
    <Flex
      direction="column"
      w="100%"
      p={5}
      align="center"
      justify="space-between"
    >
      <Text pt={16} pb={4} color="white">
        © 2022 Dirty Not Sorry
      </Text>
    </Flex>
  </Container>
)

export default Footer
