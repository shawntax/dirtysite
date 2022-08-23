import React from 'react'
import { Text, Flex, Center, Box } from '@chakra-ui/react'
import CommunityWidget from './CommunityWidget'
import MarketingForm from './MarketingForm'

const Footer = () => (
  <Flex
    w="full"
    direction="column"
    justify="space-between"
    px={{ base: 0, sm: '4' }}
    pt="4"
    borderTop="1px"
    borderTopColor="gray.900"
  >
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-"
      align="center"
      px={{ base: 0, sm: '8' }}
    >
      <Box px={{ base: '12', sm: '8' }} w="full">
        <MarketingForm />
      </Box>
      <Box w="full">
        <CommunityWidget />
      </Box>
    </Flex>
    <Center>
      <Text pt={16} pb={4} color="white" mx="auto">
        © 2022 Dirty Not Sorry
      </Text>
    </Center>
  </Flex>
)

export default Footer
