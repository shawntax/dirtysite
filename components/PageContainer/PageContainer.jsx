import { VStack, Container, Heading } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const PageContainer = ({ children, bg, title, fullWidthContainer }) => {
  return (
    <VStack minH="100vh" justify="space-between" bg={bg}>
      <NavBar />
      <Heading color="white">{title}</Heading>
      {fullWidthContainer ? (
        <Container minW="100vw" h="full" maxW="container.xl">
          {children}
        </Container>
      ) : (
        <Container w="100%" h="full" maxW="container.xl">
          {children}
        </Container>
      )}

      <Footer />
    </VStack>
  )
}

export default PageContainer
