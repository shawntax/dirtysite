import { Heading, SimpleGrid } from '@chakra-ui/react'
import EventCard from '@components/EventList/EventCard'
import PageHeader from '@components/PageHeader'
import PastEventList from '@components/PastEventList'
import { getLayout } from '@components/SiteLayout'
import { fetchEvents } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/artists.md'

export default function Events({
  upcomingLiveEvents,
  upcomingStreams,
  pastEvents,
}) {
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
          <Heading as="h1" textTransform="capitalize" w="fit" py="4">
            Upcoming Streams
          </Heading>
          <SimpleGrid minChildWidth="300px" spacing="12" mt="5">
            {upcomingStreams.map((event) => {
              {
                return <EventCard key={event.id} event={event} />
              }
            })}
          </SimpleGrid>
        </>
      )}

      {pastEvents.length > 0 && (
        <PastEventList title="Past Events" events={pastEvents} />
      )}
    </>
  )
}

export async function getStaticProps() {
  const { upcomingLiveEvents, upcomingStreams, pastEvents } = fetchEvents()

  return {
    props: {
      upcomingLiveEvents,
      upcomingStreams,
      pastEvents,
    },
  }
}

Events.pageName = 'Events'
Events.getLayout = getLayout
