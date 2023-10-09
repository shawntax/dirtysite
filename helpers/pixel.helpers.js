export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const trackPageView = () => {
  FB_PIXEL_ID && window.fbq('track', 'PageView')
}

export const trackViewContent = () => {
  FB_PIXEL_ID && window.fbq('track', 'ViewContent')
}
