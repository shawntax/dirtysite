import slugify from 'slugify'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

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
      return event
    })
    .filter(({ format }) => {
      return format === 'Live'
    })
    .filter(({ publishDate }) => {
      return dayjs().isSameOrAfter(dayjs(publishDate), 'day')
    })
    .filter(({ eventDate }) => {
      return dayjs().isSameOrBefore(dayjs(eventDate), 'day')
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
      return dayjs().isSameOrAfter(dayjs(publishDate), 'day')
    })
    .filter(({ eventDate }) => {
      return dayjs().isSameOrBefore(dayjs(eventDate), 'day')
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
    .filter(({ eventDate }) => {
      return dayjs().isAfter(dayjs(eventDate), 'day')
    })
    .sort((a, b) => {
      return dayjs(b.eventDate) - dayjs(a.eventDate)
    })

  return { upcomingLiveEvents, upcomingStreams, pastEvents }
}
