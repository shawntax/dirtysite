import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'

import { FaTicketAlt } from 'react-icons/fa'
import { useMediaQuery } from '@hooks/useMediaQuery'
import Photo from '@components/Photo'

function EventTicketLink({ url, linkText }) {
  return (
    <Center p="5" mx={{ base: 'auto', sm: 'none' }}>
      <Link target="_blank" href={url} pt="" bg="" textAlign={'center'}>
        <Button
          textAlign={'center'}
          _hover={{
            bg: 'gray.200',
            textColor: 'gray.700',
          }}
          textColor="gray.100"
          bg="gray.800"
        >
          <FaTicketAlt />
          &nbsp;&nbsp;{linkText ? linkText : 'Get Tickets'}
        </Button>
      </Link>
    </Center>
  )
}

function EventItem({ event }) {
  const isLargerThan1080 = useMediaQuery('1080')
  return (
    <Box w={{ base: '100%', md: '75%' }} my="25px" px="5">
      <Flex
        border={'1px solid white'}
        _hover={{
          bg: 'gray.400',
          transition: 'ease',
          transitionTimingFunction: 'cubic-bezier(.26,2,0,-0.84)',
          transitionDuration: '1500ms',
        }}
        direction={{ base: 'column', md: 'row' }}
        py="10"
        px="10"
        borderRadius={'md'}
        role="group"
      >
        <Box maxW="150" minW="100" my="20px" mx="auto">
          <Photo
            fileName={event.featuredImageFileName}
            borderRadius="md"
            alt="Event Flyer"
          />
        </Box>
        <Box w="100%" my="auto">
          <Flex flexWrap={'wrap'} bg="">
            <VStack p="5" bg="" mx={{ base: 'auto', sm: 'none' }}>
              <Center d="" textAlign={'center'} bg="">
                <Heading
                  color="gray.200"
                  _groupHover={{ textColor: 'black' }}
                >{`${event.title}`}</Heading>
                <Text
                  color="white"
                  _groupHover={{ textColor: 'black' }}
                >{`${event.displayDate} @ ${event.venue}`}</Text>
              </Center>
            </VStack>
            {isLargerThan1080 ? <Spacer /> : ''}
            <EventTicketLink url={event.ticketLink} linkText={event.linkText} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
export default EventItem
