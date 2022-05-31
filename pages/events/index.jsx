import { SimpleGrid } from '@chakra-ui/react'
import EventCard from '@components/Eventz/EventCard'
import { getLayout } from '@components/SiteLayout'
import { fetchEvents } from '@helpers/cms.helpers'

export default function Events({ events }) {
  return (
    <SimpleGrid minChildWidth="200px" spacing="12" mt="5">
      {events.map((event) => {
        {
          return <EventCard key={event.id} event={event} />
        }
      })}
    </SimpleGrid>
  )
}

export async function getStaticProps() {
  const events = fetchEvents()

  return {
    props: {
      events,
    },
  }
}

Events.pageName = 'Events'
Events.getLayout = getLayout
