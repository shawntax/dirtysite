export const UMAMI_SITE_ID = process.env.NEXT_PUBLIC_UMAMI_SITE_ID

export const trackEventClick = ({ umami, eventId, eventTitle, ticketLink }) => {
  umami.track('event-link', {
    id: eventId,
    name: eventTitle,
    link: ticketLink,
  })
}
