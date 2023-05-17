import { Box, Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { getLayout } from '@components/HomeLayout'
import EventCard from '@components/EventList/EventCard'
import PageHeader from '@components/PageHeader'
import Hero from '@components/Hero'
import EventList from '@components/EventList'
import { attributes } from '@content/pages/home.md'
import { react as AboutContent } from '@content/pages/about.md'
import { fetchEvents } from '@helpers/cms.helpers'

export default function Home({ upcomingLiveEvents, upcomingStreams }) {
  const { seoDesc } = attributes
  return (
    <>
      <PageHeader title="Home" seoDesc={seoDesc} />
      <Hero />
      <Container
        id="about"
        as="section"
        centerContent
        maxW={{ base: 'container.lg', xl: 'container.lg' }}
        py={{ base: '12', lg: '24' }}
      >
        <Box
          fontSize="3xl"
          maxW="container.lg"
          py={{ base: '2', lg: '12' }}
          px="4"
        >
          <AboutContent />
        </Box>

        {/* {upcomingLiveEvents.length > 0 && (
          <EventList title="Upcoming Events" events={upcomingLiveEvents} />
        )}
        {upcomingStreams.length > 0 && (
          <EventList title="Upcoming Streams" events={upcomingStreams} />
        )} */}
        <Container maxW="container.lg">
          {upcomingLiveEvents.length > 0 && (
            <>
              <Heading as="h1" textTransform="capitalize" w="fit" py="4">
                Upcoming Events
              </Heading>
              <SimpleGrid minChildWidth="250px" spacing="10" mt="5">
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
              <SimpleGrid minChildWidth="250px" spacing="10" mt="5">
                {upcomingStreams.map((event) => {
                  {
                    return <EventCard key={event.id} event={event} />
                  }
                })}
              </SimpleGrid>
            </>
          )}
        </Container>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const { upcomingLiveEvents: events, upcomingStreams: streams } = fetchEvents()

  const upcomingLiveEvents = events.slice(0, 6)
  const upcomingStreams = streams.slice(0, 3)

  return {
    props: {
      upcomingLiveEvents,
      upcomingStreams,
    },
  }
}

Home.pageName = 'Home'
Home.getLayout = getLayout
