export const UMAMI_SITE_ID = process.env.NEXT_PUBLIC_UMAMI_SITE_ID

export const trackEventClick = ({ eventId, eventTitle, ticketLink }) => {
  if (
    typeof window !== 'undefined' &&
    'umami' in window &&
    window.umami !== 'undefined'
  ) {
    window.umami.track('event-link', {
      id: eventId,
      name: eventTitle,
      link: ticketLink,
    })
  } else {
    console.log('no window, dummy')
  }
}
