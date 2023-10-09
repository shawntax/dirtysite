import { useEffect } from 'react'
import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import theme from '@theme/index'
import Favicon from '@components/Favicon'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import * as fbq from '@helpers/pixel.helpers'
import FBPixelBase from '@components/FBPixelBase'
import UmamiScript from '@components/UmamiScript'

const HomeLayout = ({ children }) => {
  useEffect(() => {
    fbq.trackPageView()
  }, [])

  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SITE_ID && <UmamiScript />}
      {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && <FBPixelBase />}
      <ChakraProvider theme={theme}>
        <Favicon />
        <Flex
          direction="column"
          align="center"
          minHeight="100vh"
          overflowX="hidden"
        >
          <Nav isHomePage={true} />
          <Container as="main" maxW="100vw" p="0" m="0">
            {children}
          </Container>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
export const getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default HomeLayout
