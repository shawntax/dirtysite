import { Flex, Box, Button } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'

const EventCard = ({ event }) => {
  const { id, featuredImageFileName } = event
  return (
    <Flex justify={{ base: 'center', md: 'start' }} p={{ base: '2', md: '4' }}>
      <Box role="group">
        <NCLink to={`/events/${encodeURIComponent(id)}`}>
          <Photo
            w={{ base: '60', md: 'full' }}
            h="80"
            fit="cover"
            fileName={featuredImageFileName}
          />
        </NCLink>
        <Button
          variant="outline"
          mt="4"
          w="full"
          fontSize={{ base: 'xl', lg: '2xl' }}
          textTransform="uppercase"
          borderRadius="0"
          _hover={{ color: 'black', bg: 'white' }}
        >
          {event.linkText}
        </Button>
      </Box>
    </Flex>
  )
}

export default EventCard
