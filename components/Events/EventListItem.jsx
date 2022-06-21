import { chakra, Flex, Text, Button } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'

const EventListItem = ({ event }) => {
  return (
    <Flex
      fontSize={{ base: '2xl', lg: '3xl' }}
      direction={{ base: 'column', md: 'row' }}
      align={{
        base: 'center',
        md: 'baseline',
      }}
      gap={{ base: '2', md: '4' }}
    >
      <NCLink to={`/events/${event.slug}`}>
        <Text fontWeight="bold">{event.title}</Text>
      </NCLink>
      <Flex direction={{ base: 'column', sm: 'row' }} align="center">
        <Text>{event.venue}</Text>
        <chakra.span display={{ base: 'none', sm: 'block' }} px="4">
          •
        </chakra.span>
        <Text textColor="gray.400">
          {dayjs(event.eventDate).format('MMM DD')}
        </Text>
      </Flex>
      <NCLink
        to={event.ticketLink}
        target="_blank"
        rel="noopener"
        marginInlineStart={{ base: 'none', md: 'auto' }}
        _hover={{ textDecoration: 'none' }}
      >
        <Button
          variant="outline"
          colorScheme="white"
          minW={{ base: '28', lg: '32' }}
          fontSize={{ base: 'xl', lg: '2xl' }}
          textTransform="uppercase"
          borderRadius="0"
          _hover={{ color: 'black', bg: 'white' }}
        >
          {event.linkText}
        </Button>
      </NCLink>
    </Flex>
  )
}

export default EventListItem
