import slugify from 'slugify'
import dayjs from 'dayjs'
import normalizeUrl from 'normalize-url'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import utc from 'dayjs/plugin/utc'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)

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
      return dayjs().utcOffset(-7).isSameOrAfter(dayjs(publishDate), 'minute')
    })
    .filter(({ eventDate }) => {
      return dayjs().utcOffset(-7).isSameOrBefore(dayjs(eventDate), 'day')
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
      return dayjs().utcOffset(-7).isSameOrAfter(dayjs(publishDate), 'day')
    })
    .filter(({ eventDate }) => {
      return dayjs().utcOffset(-7).isSameOrBefore(dayjs(eventDate), 'day')
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
      return dayjs().utcOffset(-7).isAfter(dayjs(eventDate), 'day')
    })
    .sort((a, b) => {
      return dayjs(b.eventDate) - dayjs(a.eventDate)
    })

  return { upcomingLiveEvents, upcomingStreams, pastEvents }
}

export function fetchPosts() {
  const allPosts = importAll(
    require.context('../content/posts', false, /^(.\/).*(.json)$/)
  )

  const publishedPosts = allPosts
    .map((post) => {
      post.slug = slugify(
        `${post.title}-${dayjs(post.postDate).format('MM-DD')}`,
        { lower: true }
      )
      return post
    })
    .filter(({ publishDate }) => {
      return dayjs().utcOffset(-7).isSameOrAfter(dayjs(publishDate), 'day')
    })
    .sort((a, b) => {
      return dayjs(b.postDate) - dayjs(a.postDate)
    })

  return publishedPosts
}
