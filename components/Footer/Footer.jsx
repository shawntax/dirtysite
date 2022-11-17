import React from 'react'
import { Text, Stack, StackDivider, Flex, Center, Box } from '@chakra-ui/react'
import CommunityWidget from './CommunityWidget'
import MarketingForm from './MarketingForm'
import { useMediaQuery } from '@hooks/useMediaQuery'

const Footer = () => {
  const isLargerThan600px = useMediaQuery(600)

  return (
    <Flex
      w="full"
      direction="column"
      justify="space-between"
      px={{ base: 0, sm: '4' }}
      pt="10"
      borderTop="1px"
      borderTopColor="gray.900"
    >
      <Stack
        direction={['column', 'row']}
        divider={<StackDivider borderColor="gray.900" />}
      >
        <Box w="full" px="8">
          {isLargerThan600px ? <MarketingForm /> : <CommunityWidget />}
        </Box>
      </Stack>
      <Center>
        <Text pt={16} pb={4} color="white" mx="auto">
          © 2022 Dirty Not Sorry
        </Text>
      </Center>
    </Flex>
  )
}

export default Footer
