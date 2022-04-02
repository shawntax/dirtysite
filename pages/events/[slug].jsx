import {
  Box,
  Button,
  Image,
  Text,
  Link,
  Center,
  Divider,
} from '@chakra-ui/react'

import PageContainer from '../../components/PageContainer'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import OptImage from '../../components/OptImage'
function Event({ event }) {
  return (
    <PageContainer title="Event" bg="black">
      <Center>
        <Box d={{ lg: 'flex' }} px="4" color="white">
          <Box mt="8">
            <Center>
              <OptImage
                maxW={{ lg: 500, xl: 600 }}
                filename={event.featuredImage}
                alt="Event Photo"
                borderRadius="xl"
              />
            </Center>
          </Box>
          <Box ml={{ lg: '10' }}>
            <Box>
              <Text my="5" as="h1" textColor="white" fontSize="3xl">
                {event.title}
              </Text>
              <Text my="5" as="h1" textColor="white" fontSize="xl">
                {event.displayDate} @ {event.venue}
              </Text>
            </Box>
            <Divider mb="4" mt="-2" />
            <Box d="flex" mb="5"></Box>
            <ReactMarkdown components={ChakraUIRenderer()} />
            <Center>
              <Link href={event.ticketLink}>
                <Button textColor={'black'} mt="20">
                  Get Tickets
                </Button>
              </Link>
            </Center>
          </Box>
        </Box>
      </Center>
    </PageContainer>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const importAll = (r) => r.keys().map(r)
  const events = importAll(
    require.context('../../content/events', false, /\.json$/)
  )

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  events.map((event) => {
    const dateFormatted = event.eventDate
      .split('')
      .slice(0, event.eventDate.indexOf('T'))
      .join('')

    event['slug'] = encodeURIComponent(
      event.title.toLowerCase() + dateFormatted
    )
    if (!options['timeZone']) {
      options['timeZone'] = 'PST'
    }
    event['displayDate'] = new Date(event.eventDate).toLocaleDateString(
      'en-US',
      options
    )
  })
  const event = events.find((event) => event.slug === slug) || {}

  return {
    props: { event: event },
  }
}

export async function getStaticPaths() {
  const paths = []

  const importAll = (r) => r.keys().map(r)
  const events = importAll(
    require.context('../../content/events', false, /\.json$/)
  )
  events.map((event) => {
    const dateFormatted = event.eventDate
      .split('')
      .slice(0, event.eventDate.indexOf('T'))
      .join('')

    event['slug'] = encodeURIComponent(
      event.title.toLowerCase() + dateFormatted
    )
  })
  events.map((event) => paths.push({ params: { slug: event.slug.toString() } }))

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

export default Event
