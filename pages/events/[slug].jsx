import { getLayout } from '@components/SiteLayout'
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  Button,
  Divider,
  AspectRatio,
} from '@chakra-ui/react'
import Photo from '@components/Photo'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'
import Markdown from 'react-markdown'
import { RxExternalLink } from 'react-icons/rx'
import remarkGfm from 'remark-gfm'
import { fetchEvents } from '@helpers/cms.helpers'
import { useBreakpointValue } from '@chakra-ui/react'
import { trackViewContent } from '@helpers/pixel.helpers'
import { MdOutlineCopyAll } from 'react-icons/md'
import { useMediaQuery } from '@chakra-ui/react'
import { useClipboard } from '@mantine/hooks'
export default function Event({ event }) {
  const isPast = dayjs().isAfter(event.eventDate, 'day')

  const descriptionTheme = {
    a: ({ href, children }) => {
      return (
        <NCLink
          href={href}
          target="_blank"
          rel="noopener"
          textDecoration="underline"
          textDecorationStyle="dotted"
          textDecorationColor="gray.400"
        >
          {children?.toString().toLowerCase()}
          <RxExternalLink style={{ display: 'inline', height: '13px' }} />
        </NCLink>
      )
    },
  }

  const to = useBreakpointValue(
    {
      base: event.mobileTicketLink || `https://${event.ticketLink}`,
      md: `https://${event.ticketLink}`,
    },
    {
      fallback: `https://${event.ticketLink}`,
    }
  )

  const clipboard = useClipboard({ timeout: 1500 })

  const [isMd] = useMediaQuery('(min-width: 768px)', {
    ssr: true,
    fallback: false,
  })

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
          {isPast
            ? dayjs(event.eventDate).format('MMMM DD, YYYY')
            : dayjs(event.eventDate).format('dddd, MMMM DD')}
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          my="2"
        >
          {event.title}
        </Heading>
        <Text as="h2" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} my="2">
          {event.venue}
        </Text>

        {!isPast && (
          <Flex
            w="full"
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <NCLink
              variant="button"
              to={to}
              target="_blank"
              rel="noopener"
              py="2"
              my="2"
              w={{ base: 'full', sm: '3xs' }}
              data-umami-event={event.title}
              data-umami-event-link={event.ticketLink}
              onClick={trackViewContent}
            >
              {event.linkText}
            </NCLink>
            <Flex
              direction="row"
              justifyContent="center"
              alignSelf="center"
              mx="4"
              flexWrap="wrap"
            >
              <Text fontSize="2xl">PROMO CODE: </Text>
              <Button
                bg="none"
                _hover={{ bg: 'none' }}
                px="1"
                py="0"
                fontSize="2xl"
                disabled={clipboard.copied}
                onClick={() => clipboard.copy(event.promoCode)}
              >
                <code>{event.promoCode}</code>
                <MdOutlineCopyAll />
              </Button>
              {clipboard.copied &&
                (isMd ? (
                  <Text fontSize="lg" alignSelf="center" flexBasis="0">
                    Copied!
                  </Text>
                ) : (
                  <>
                    <Spacer flexBasis="100%" />
                    <Text fontSize="lg" flexBasis="1">
                      Copied!
                    </Text>
                  </>
                ))}
            </Flex>
            <Spacer />
          </Flex>
        )}
        {event.description && (
          <>
            <Divider orientation="horizontal" my="4" />
            <Box
              maxW={'container.md'}
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              p={{ base: '4', lg: 0 }}
            >
              <Markdown
                components={descriptionTheme}
                remarkPlugins={[remarkGfm]}
                children={event.description}
              />
            </Box>
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
            fill={true}
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
  const { upcomingLiveEvents, upcomingStreams, pastEvents } = fetchEvents()

  const event =
    [...upcomingLiveEvents, ...upcomingStreams, ...pastEvents].find(
      (event) => event.slug === slug
    ) || {}

  return {
    props: { event },
    revalidate: 60 * 60,
  }
}

export async function getStaticPaths() {
  const { upcomingLiveEvents, upcomingStreams, pastEvents } = fetchEvents()

  const paths = [...upcomingLiveEvents, ...upcomingStreams, ...pastEvents].map(
    (event) => {
      return {
        params: {
          slug: event.slug,
        },
      }
    }
  )

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Event.getLayout = getLayout
