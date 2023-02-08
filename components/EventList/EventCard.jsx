import { Flex, Box, Text, AspectRatio, Center } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import NCButton from '@components/NCButton'
import Photo from '@components/Photo'
import dayjs from 'dayjs'

const EventCard = ({ event }) => {
  const { slug, photoFileName } = event
  return (
    <Flex justify={{ base: 'center', sm: 'start' }}>
      <Flex
        justify="center"
        p={{ base: '2', md: '4' }}
        maxW="400px"
        minW="400px"
      >
        <Box role="group" w="full" mx="8">
          <NCLink
            to={`/events/${encodeURIComponent(slug)}`}
            _hover={{ textDecoration: 'none' }}
          >
            <AspectRatio ratio={1 / 1}>
              <Photo fileName={photoFileName} fill={true} />
            </AspectRatio>
            <Flex direction="row" justify="space-between" mt="2">
              <Text
                fontSize={{ base: '2xl', xl: '3xl' }}
                noOfLines={1}
                maxW={72}
              >
                {event.title}
              </Text>
              <Text textColor="gray.400" fontSize={{ base: '2xl', xl: '3xl' }}>
                {dayjs(event.eventDate).format('M/D')}
              </Text>
            </Flex>
          </NCLink>
          <Flex direction="row" justify="space-between">
            <Text
              textColor="gray.400"
              mt="-2"
              fontSize={{ base: 'xl', xl: '2xl' }}
            >
              {event.venue}
            </Text>
            <Text
              textColor="gray.500"
              mt="-2"
              fontSize={{ base: 'xl', xl: '2xl' }}
            >
              {event.format}
            </Text>
          </Flex>
          <Center>
            <NCLink
              variant="button"
              w="full"
              to={`https://${event.ticketLink}`}
              target="_blank"
              rel="noopener"
            >
              {event.linkText}
            </NCLink>
          </Center>
        </Box>
      </Flex>
    </Flex>
  )
}

export default EventCard
