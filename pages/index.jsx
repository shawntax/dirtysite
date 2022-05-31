import { Box, Container, Text } from '@chakra-ui/react'
import { getLayout } from '@components/HomeLayout'
import Hero from '@components/Hero'
import EventList from '@components/Events'
import { react as AboutContent } from '@content/pages/about.md'
import { fetchEvents } from '@helpers/cms.helpers'

export default function Home({ events }) {
  return (
    <>
      <Hero />
      <Container
        as="section"
        centerContent
        maxW={{ base: 'container.lg', xl: 'container.lg' }}
        py={{ base: '12', lg: '24' }}
      >
        <Box maxW="container.lg" py={{ base: '2', lg: '12' }} px="4">
          <Text fontSize="3xl">
            <AboutContent />
          </Text>
        </Box>

        <EventList events={events} />
      </Container>
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

Home.pageName = 'Home'
Home.getLayout = getLayout
