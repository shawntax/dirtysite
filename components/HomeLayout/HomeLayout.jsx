import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import theme from '@theme/index'
import Favicon from '@components/Favicon'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

const HomeLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Favicon />
      <Flex
        direction="column"
        align="center"
        minHeight="100vh"
        overflowX="hidden"
      >
        <Nav isHomePage />
        <Container as="main" maxW="100vw" p="0" m="0">
          {children}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
export const getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default HomeLayout
