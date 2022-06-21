import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import theme from '@theme/index'
import Favicon from '@components/Favicon'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

const SiteLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Favicon />
      <Flex direction="column" align="center">
        <Nav />
        <Container
          as="main"
          maxW={{ base: 'container.lg', xl: 'container.xl' }}
          px={{ base: '4', md: '8' }}
          mt={{ base: '24', md: '32' }}
          minH="100vh"
        >
          {children}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
