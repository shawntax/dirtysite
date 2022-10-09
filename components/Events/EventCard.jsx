import { Flex, Box, Text, AspectRatio, Center } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import NCButton from '@components/NCButton'
import Photo from '@components/Photo'
import dayjs from 'dayjs'

const EventCard = ({ event }) => {
  const { slug, photoFileName } = event
  return (
    <Center>
      <Flex
        justify={{ base: 'center' }}
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
              <Photo fileName={photoFileName} layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex direction={{ base: 'row' }} justify="space-between" mt="2">
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
          <Text textColor="gray.400" fontSize={{ base: 'xl', xl: '2xl' }}>
            {event.venue}
          </Text>
          <NCLink
            to={event.ticketLink}
            _hover={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener"
          >
            <NCButton width="full" mt="2">
              {event.linkText}
            </NCButton>
          </NCLink>
        </Box>
      </Flex>
    </Center>
  )
}

export default EventCard
