import slugify from 'slugify'
import dayjs from 'dayjs'
import normalizeUrl from 'normalize-url'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)
dayjs.extend(timezone)

const importAll = (r) => r.keys().map(r)

export function fetchArtists() {
  const artists = importAll(
    require.context('../content/artists', false, /^(.\/).*(.json)$/) // https://github.com/webpack/webpack/issues/12087
  )
  const result = artists.map((artist) => {
    artist.slug = slugify(artist.name, { lower: true })
    artist.photoFileName = artist.photoUrl?.split('/').pop() ?? null
    return artist
  })
  return result
}

/* We're using a -10 UTC offset to match the Vercel build server in Washington DC */

export function fetchEvents() {
  const events = importAll(
    require.context('../content/events', false, /^(.\/).*(.json)$/)
  )

  const upcomingLiveEvents = events
    .map((event) => {
      event.photoFileName = event.photoUrl?.split('/').pop() ?? null
      event.slug = slugify(
        `${event.title}-${dayjs(event.eventDate).format('MM-DD')}`,
        { lower: true }
      )
      event.ticketLink = normalizeUrl(event.ticketLink, {
        defaultProtocol: 'https',
        normalizeProtocol: true,
        forceHttps: true,
        stripProtocol: true,
      })
      return event
    })
    .filter(({ format }) => {
      return format === 'Live'
    })
    .filter(({ publishDate }) => {
      return dayjs()
        .utcOffset(-10)
        .isSameOrAfter(dayjs(publishDate).utc(), 'minute')
    })
    .filter(({ eventDate }) => {
      return dayjs()
        .utcOffset(-7)
        .isSameOrBefore(dayjs(eventDate).utc(), 'day')
    })
    .sort((a, b) => {
      return dayjs(a.eventDate) - dayjs(b.eventDate)
    })

  const upcomingStreams = events
    .map((event) => {
      event.photoFileName = event.photoUrl?.split('/').pop() ?? null
      event.slug = slugify(
        `${event.title}-${dayjs(event.eventDate).format('MM-DD')}`,
        { lower: true }
      )
      return event
    })
    .filter(({ format }) => {
      return format === 'Stream'
    })
    .filter(({ publishDate }) => {
      return dayjs()
        .utcOffset(-10)
        .isSameOrAfter(dayjs(publishDate).utc(), 'day')
    })
    .filter(({ eventDate }) => {
      return dayjs()
        .utcOffset(-10)
        .isSameOrBefore(dayjs(eventDate).utc(), 'day')
    })
    .sort((a, b) => {
      return dayjs(a.eventDate) - dayjs(b.eventDate)
    })

  const pastEvents = events
    .map((event) => {
      event.photoFileName = event.photoUrl?.split('/').pop() ?? null
      event.slug = slugify(
        `${event.title}-${dayjs(event.eventDate).format('MM-DD')}`,
        { lower: true }
      )
      return event
    })
    .filter(({ format }) => format !== 'Stream')
    .filter(({ title }) => !title.toLowerCase().includes('residency'))
    .filter(({ eventDate }) => {
      return dayjs().utcOffset(-10).isAfter(dayjs(eventDate).utc(), 'day')
    })
    .sort((a, b) => {
      return dayjs(b.eventDate) - dayjs(a.eventDate)
    })

  return { upcomingLiveEvents, upcomingStreams, pastEvents }
}
