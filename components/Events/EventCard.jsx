import { Flex, Box, Button, Text, AspectRatio, Center } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'
import dayjs from 'dayjs'

const EventCard = ({ event }) => {
  const { slug, featuredImageFileName } = event
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
              <Photo objectFit="cover" fileName={featuredImageFileName} />
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
          <NCLink
            to={event.ticketLink}
            _hover={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener"
          >
            {/* <Button
            variant="outline"
            colorScheme="white"
            mt="4"
            w="full"
            fontSize={{ base: 'xl', lg: '2xl' }}
            textTransform="uppercase"
            borderRadius="0"
            _hover={{ color: 'black', bg: 'white' }}
          >
            {event.linkText}
          </Button> */}
            <Button
              w="full"
              fontSize="xl"
              borderRadius="full"
              mt="6"
              py="4"
              bgColor="white"
              color="black"
              type="submit"
            >
              {event.linkText}
            </Button>
          </NCLink>
        </Box>
      </Flex>
    </Center>
  )
}

export default EventCard
