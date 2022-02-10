import PageContainer from '../components/PageContainer'
import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Image,
  Wrap,
  WrapItem,
  Divider,
  Link,
  Container,
  Button,
} from '@chakra-ui/react'

export default function Events() {
  const importAll = (r) => r.keys().map(r)
  const events = importAll(require.context('../content/events', false, /\.md$/))

  return (
    <PageContainer title="Events">
      <Wrap w="80%" justify="center" bg="" pb="10">
        {events.map((event) => {
          return (
            <>
              <WrapItem>
                <Image
                  src={event.attributes.featuredImage}
                  h="310px"
                  w="250px"
                  borderRadius="md"
                />
              </WrapItem>
              <Container>
                <WrapItem>
                  <Box bg="gray.100" w="100%" p="4" borderRadius="md">
                    <Box truncate>
                      <Link textColor="blue">{event.attributes.title}</Link>
                      <Text>{event.attributes.eventDate}</Text>
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                      <Divider orientation="horizontal" />
                    </Box>
                    <Text pb="5">{event.attributes.body}</Text>
                    <Center>
                      <Link href={event.attributes.ticketLink}>
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
