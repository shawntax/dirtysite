import React from 'react'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import CommunityWidget from './CommunityWidget'
import MarketingForm from './MarketingForm'

const Footer = () => (
  <SimpleGrid
    maxW="container.lg"
    width="100%"
    px="2"
    spacing={2}
    columns={{ base: 1, md: 2 }}
  >
    <MarketingForm />
    <CommunityWidget />
    <Text pt={16} pb={4} color="white" mx="auto">
      © 2022 Dirty Not Sorry
    </Text>
  </SimpleGrid>
)

export default Footer
