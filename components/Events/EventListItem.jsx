import { chakra, Flex, Text, Button } from '@chakra-ui/react'
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
      <Text fontWeight="bold">{event.title}</Text>
      <Flex direction={{ base: 'column', sm: 'row' }} align="center">
        <Text>{event.venue}</Text>
        <chakra.span display={{ base: 'none', sm: 'block' }} px="4">
          •
        </chakra.span>
        <Text>{dayjs(event.eventDate).format('MMM DD')}</Text>
      </Flex>
      <Button
        marginInlineStart={{ base: 'none', md: 'auto' }}
        variant="outline"
        minW={{ base: '28', lg: '32' }}
        fontSize={{ base: 'xl', lg: '2xl' }}
        textTransform="uppercase"
        borderRadius="0"
        _hover={{ color: 'black', bg: 'white' }}
      >
        {event.linkText}
      </Button>
    </Flex>
  )
}

export default EventListItem
