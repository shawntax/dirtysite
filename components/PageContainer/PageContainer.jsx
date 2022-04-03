import { VStack, Container, Heading } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const PageContainer = ({ children, bg, title, fullWidthContent }) => {
  return (
    <VStack minH="100vh" justify="space-between" bg={bg}>
      <NavBar />
      <Heading color="white">{title}</Heading>
      {fullWidthContent ? (
        <Container
          minW="100vw"
          mx={0}
          px={0}
          overflowX="hidden"
          h="full"
          maxW="container.2xl"
        >
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
