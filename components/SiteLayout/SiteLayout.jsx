import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import theme from '@theme/index'
import Nav from '@components/Nav'
import PageHeader from '@components/PageHeader'
import Footer from '@components/Footer'
import { useRouter } from 'next/router'

const SiteLayout = ({ children }) => {
  const { pathname } = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" minHeight="100vh">
        <Nav />
        <Container
          as="main"
          maxW="container.lg"
          p={{ base: '8', md: '2' }}
          mt={{ base: '24', md: '32' }}
        >
          <PageHeader>{pathname.replace('/', '')}</PageHeader>
          {children}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
