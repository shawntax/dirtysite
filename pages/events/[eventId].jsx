import { getLayout } from '@components/SiteLayout'
import Photo from '@components/Photo'

import { fetchEvents } from '@helpers/cms.helpers'

export default function Event({ event }) {
  return <Photo fileName={event.featuredImageFileName} />
}

export async function getStaticProps(context) {
  const { eventId } = context.params
  const events = fetchEvents()
  const event = events.find((event) => event.id === eventId) || {}

  return {
    props: { event },
  }
}

export async function getStaticPaths() {
  const events = fetchEvents()

  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    }
  })

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Event.getLayout = getLayout
