import { fetchEvents } from '@helpers/cms.helpers'
import { Heading } from '@chakra-ui/react'
import EventItem from './EventItem'
function Events() {
  const eventList = fetchEvents()

  return (
    <>
      <Heading>Upcoming Events</Heading>

      {eventList.props.events.map((event) => {
        return (
          <>
            <EventItem event={event} />
          </>
        )
      })}
    </>
  )
}

export default Events
