import slugify from 'slugify'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(isSameOrBefore)

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

  const upcomingEvents = events
    .map((event) => {
      event.photoFileName = event.photoUrl?.split('/').pop() ?? null
      event.slug = slugify(
        `${event.title}-${dayjs(event.eventDate).format('MM-DD')}`,
        { lower: true }
      )
      return event
    })
    .filter(({ eventDate }) => {
      return dayjs().isSameOrBefore(dayjs(eventDate), 'day')
    })
    .sort((a, b) => {
      return dayjs(a.eventDate) - dayjs(b.eventDate)
    })

  return upcomingEvents
}
