import React from 'react'
import { Text, Stack, StackDivider, Flex, Center, Box } from '@chakra-ui/react'
import CommunityWidget from './CommunityWidget'
// import CommunityForm from './CommunityForm'
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
    <Stack
      direction={['column', 'row']}
      divider={<StackDivider borderColor="gray.900" />}
    >
      {/* <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-"
      align="center"
      px={{ base: 0, sm: '8' }}
    > */}
      {/* <Box w="full" px={{ base: '16', md: '4' }} py={{ base: '2', md: '9' }}>
        <MarketingForm />
      </Box> */}
      <Box w="full" px="8">
        <CommunityWidget />
      </Box>
    </Stack>
    {/* </Flex> */}
    <Center>
      <Text pt={16} pb={4} color="white" mx="auto">
        © 2022 Dirty Not Sorry
      </Text>
    </Center>
  </Flex>
)

export default Footer
