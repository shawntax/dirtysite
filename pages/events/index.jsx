import { SimpleGrid } from '@chakra-ui/react'
import EventCard from '@components/Events/EventCard'
import PageHeader from '@components/PageHeader'
import { getLayout } from '@components/SiteLayout'
import { fetchEvents } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/artists.md'

export default function Events({ upcomingLiveEvents, upcomingStreams }) {
  const { seoDesc } = attributes
  return (
    <>
      {upcomingLiveEvents.length > 0 && (
        <>
          <PageHeader title="Events" seoDesc={seoDesc}>
            Upcoming Events
          </PageHeader>
          <SimpleGrid minChildWidth="300px" spacing="12" mt="5">
            {upcomingLiveEvents.map((event) => {
              {
                return <EventCard key={event.id} event={event} />
              }
            })}
          </SimpleGrid>
        </>
      )}

      {upcomingStreams.length > 0 && (
        <>
          <PageHeader title="Events" seoDesc={seoDesc}>
            Upcoming Streams
          </PageHeader>
          <SimpleGrid minChildWidth="300px" spacing="12" mt="5">
            {upcomingStreams.map((event) => {
              {
                return <EventCard key={event.id} event={event} />
              }
            })}
          </SimpleGrid>
        </>
      )}
    </>
  )
}

export async function getStaticProps() {
  const { upcomingLiveEvents, upcomingStreams } = fetchEvents()

  return {
    props: {
      upcomingLiveEvents,
      upcomingStreams,
    },
  }
}

Events.pageName = 'Events'
Events.getLayout = getLayout
