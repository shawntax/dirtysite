import { chakra, Flex, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'

const EventListItem = ({ event }) => {
  return (
    <Flex
      fontSize={{ base: 'xl', lg: '2xl' }}
      direction={{ base: 'column', md: 'row' }}
      align={{
        base: 'center',
        md: 'baseline',
      }}
      gap={{ base: '2', md: '4' }}
    >
      <NCLink to={`/events/${event.slug}`}>
        <Text
          fontWeight="bold"
          textAlign={{ base: 'center', md: 'left' }}
          noOfLines={1}
        >
          {event.title}
        </Text>
      </NCLink>
      <Flex direction={{ base: 'column', sm: 'row' }} align="center">
        <Text noOfLines={1}>{event.venue}</Text>
        <chakra.span display={{ base: 'none', sm: 'block' }} px="4">
          •
        </chakra.span>
        <Text textColor="gray.400">
          {dayjs(event.eventDate).format('MMM DD')}
        </Text>
      </Flex>
      <NCLink
        variant="button"
        to={`https://${event.ticketLink}`}
        target="_blank"
        rel="noopener"
        marginInlineStart={{ base: 'none', md: 'auto' }}
      >
        {event.linkText}
      </NCLink>
    </Flex>
  )
}

export default EventListItem
