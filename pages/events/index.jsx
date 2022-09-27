import { SimpleGrid } from '@chakra-ui/react'
import EventCard from '@components/Events/EventCard'
import PageHeader from '@components/PageHeader'
import { getLayout } from '@components/SiteLayout'
import { fetchEvents } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/artists.md'

export default function Events({ events }) {
  const { seoDesc } = attributes
  return (
    <>
      <PageHeader title="Events" seoDesc={seoDesc}>
        Upcoming Events
      </PageHeader>
      <SimpleGrid minChildWidth="300px" spacing="12" mt="5">
        {events.map((event) => {
          {
            return <EventCard key={event.id} event={event} />
          }
        })}
      </SimpleGrid>
    </>
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
