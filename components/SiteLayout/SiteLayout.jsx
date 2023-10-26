import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import theme from '@theme/index'
import Favicon from '@components/Favicon'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { trackPageView } from '@helpers/pixel.helpers'
import UmamiScript from '@components/UmamiScript'
import FBPixelBase from '@components/FBPixelBase'

const SiteLayout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      trackPageView()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SITE_ID && <UmamiScript />}
      {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && <FBPixelBase />}
      <ChakraProvider theme={theme}>
        <Favicon />
        <Flex direction="column" align="center">
          <Nav />
          <Container
            as="main"
            maxW={{ base: 'container.lg', xl: 'container.xl' }}
            px={{ base: '4', md: '8' }}
            my={{ base: '24', md: '32' }}
          >
            {children}
          </Container>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
