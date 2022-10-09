import { getLayout } from '@components/SiteLayout'
import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  AspectRatio,
} from '@chakra-ui/react'
import Photo from '@components/Photo'
import NCLink from '@components/NCLink'
import NCButton from '@components/NCButton'
import dayjs from 'dayjs'

import { fetchEvents } from '@helpers/cms.helpers'

export default function Event({ event }) {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify="center"
      px={{ base: 0, lg: '10' }}
    >
      <Flex direction="column" align={{ base: 'center', lg: 'start' }}>
        <Text
          as="h2"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textColor="gray.400"
        >
          {dayjs(event.eventDate).format('dddd, MMMM DD')}
        </Text>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          {event.title}
        </Heading>
        <Text as="h2" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
          {event.venue}
        </Text>

        <NCLink
          to={event.ticketLink}
          target="_blank"
          rel="noopener"
          py="2"
          _hover={{ textDecoration: 'none' }}
        >
          <NCButton>{event.linkText}</NCButton>
        </NCLink>
        {event.description && (
          <>
            <Divider orientation="horizontal" />
            <Text
              maxW={'container.md'}
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              p={{ base: '4', lg: 0 }}
            >
              {event.description}
            </Text>
          </>
        )}
      </Flex>
      <Box
        w={{ base: 'full', lg: '500px' }}
        h="auto"
        mx={{ base: 'auto', lg: '8' }}
        order={-1}
      >
        <AspectRatio ratio={1 / 1}>
          <Photo
            fileName={event.photoFileName}
            layout="fill"
            objectFit="cover"
            border="1px"
            bordercolor="gray.800"
          />
        </AspectRatio>
      </Box>
    </Flex>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const events = fetchEvents()
  const event = events.find((event) => event.slug === slug) || {}

  return {
    props: { event },
  }
}

export async function getStaticPaths() {
  const events = fetchEvents()

  const paths = events.map((event) => {
    return {
      params: {
        slug: event.slug,
      },
    }
  })

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Event.getLayout = getLayout
