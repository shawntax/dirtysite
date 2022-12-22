import { Box, Container } from '@chakra-ui/react'
import { getLayout } from '@components/HomeLayout'
import PageHeader from '@components/PageHeader'
import Hero from '@components/Hero'
import EventList from '@components/Events'
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

        {upcomingLiveEvents.length > 0 && (
          <EventList title="Upcoming Events" events={upcomingLiveEvents} />
        )}
        {upcomingStreams.length > 0 && (
          <EventList title="Upcoming Streams" events={upcomingStreams} />
        )}
      </Container>
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

Home.pageName = 'Home'
Home.getLayout = getLayout
