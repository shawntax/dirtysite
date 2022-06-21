import { Flex, Box, Button, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'
import dayjs from 'dayjs'

const EventCard = ({ event }) => {
  const { slug, featuredImageFileName } = event
  return (
    <Flex justify={{ base: 'center', md: 'start' }} p={{ base: '2', md: '4' }}>
      <Box role="group">
        <NCLink
          to={`/events/${encodeURIComponent(slug)}`}
          _hover={{ textDecoration: 'none' }}
        >
          <Photo
            w={{ base: '60', md: '80' }}
            h="80"
            fit="cover"
            fileName={featuredImageFileName}
          />
          <Flex direction={{ base: 'row' }} justify="space-between">
            <Text fontSize={{ base: '2xl', xl: '3xl' }} noOfLines={1} maxW={72}>
              {event.title}
            </Text>
            <Text textColor="gray.400" fontSize={{ base: '2xl', xl: '3xl' }}>
              {dayjs(event.eventDate).format('M/D')}
            </Text>
          </Flex>
        </NCLink>
        <NCLink
          to={event.ticketLink}
          _hover={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener"
        >
          <Button
            variant="outline"
            colorScheme="white"
            mt="4"
            w="full"
            fontSize={{ base: 'xl', lg: '2xl' }}
            textTransform="uppercase"
            borderRadius="0"
            _hover={{ color: 'black', bg: 'white' }}
          >
            {event.linkText}
          </Button>
        </NCLink>
      </Box>
    </Flex>
  )
}

export default EventCard
