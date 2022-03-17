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

function Event({ event }) {
  //const [isLargerThan768] = useMediaQuery('(max-width: 768px)')
  return (
    <PageContainer title="Event">
      <Center>
        <Box px="4" color="white">
          <Box mt="8">
            <Center>
              <Image
                maxW={300}
                src={`../${event.featuredImage}`}
                alt="Event Photo"
                borderRadius={'4'}
              />
            </Center>
          </Box>
          <Box>
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
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={event.body}
            />
          </Box>
          <Center>
            <Link href={event.ticketLink}>
              <Button textColor={'black'} mt="5">
                Get Tickets
              </Button>
            </Link>
          </Center>
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
