import PageContainer from '../../components/PageContainer'
import {
  Box,
  Text,
  Center,
  Image,
  Wrap,
  WrapItem,
  Divider,
  Link,
  Container,
  Button,
  Heading,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

export async function getStaticProps() {
  const importAll = (r) => r.keys().map(r)
  let events = importAll(
    require.context('../../content/events', false, /\.json$/)
  )

  const options = {
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
  const sortEventsByDate = events.sort((a, b) => {
    return new Date(a.eventDate) - new Date(b.eventDate)
  })

  return {
    props: { events: sortEventsByDate.reverse() },
  }
}

export default function Events({ events }) {
  return (
    <PageContainer title="Events">
      <Wrap w="80%" mx="auto" justify="center" bg="" pb="10">
        {events.map((event) => {
          return (
            <>
              <WrapItem key={event.slug}>
                <Image
                  src={event.featuredImage}
                  h="310px"
                  w="250px"
                  borderRadius="md"
                  alt="Event Flyer"
                />
              </WrapItem>
              <Container pb="10" px="0">
                <WrapItem>
                  <Box bg="" w="100%" p="4" borderRadius="md">
                    <Box truncate>
                      <Link
                        textColor="white"
                        href={`/events/${encodeURIComponent(event.slug)}`}
                      >
                        <Heading py="3">{event.title}</Heading>
                      </Link>
                      <Text textColor="gray.200">
                        {event.displayDate} @ {event.venue}
                      </Text>
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                    </Box>
                    <ReactMarkdown components={ChakraUIRenderer()} skipHtml />
                    <Center>
                      <Link target="_blank" href={event.ticketLink} pt="8">
                        <Button
                          _hover={{ bg: 'gray.400', textColor: 'gray.800' }}
                          textColor="gray.100"
                          bg="gray.800"
                        >
                          Get Tickets
                        </Button>
                      </Link>
                    </Center>
                  </Box>
                </WrapItem>
              </Container>
            </>
          )
        })}
      </Wrap>
    </PageContainer>
  )
}
