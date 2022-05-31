import { Heading, VStack, StackDivider } from '@chakra-ui/react'
import EventListItem from './EventListItem'

const EventList = ({ events }) => {
  return (
    <>
      <Heading py="4">Upcoming Events</Heading>
      <VStack
        p="8"
        w="full"
        divider={<StackDivider borderColor="gray.300" borderStyle="dotted" />}
        spacing={4}
        align="stretch"
      >
        {events.map((event) => {
          return <EventListItem key={event.id} event={event} />
        })}
      </VStack>
    </>
  )
}

export default EventList
