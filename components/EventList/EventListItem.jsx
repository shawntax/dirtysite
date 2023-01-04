import { chakra, Flex, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import NCButton from '@components/NCButton'
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
        <Text fontWeight="bold" textAlign="center">
          {event.title}
        </Text>
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
        to={`https://${event.ticketLink}`}
        target="_blank"
        rel="noopener"
        marginInlineStart={{ base: 'none', md: 'auto' }}
        _hover={{ textDecoration: 'none' }}
      >
        <NCButton>{event.linkText}</NCButton>
      </NCLink>
    </Flex>
  )
}

export default EventListItem
