import { VStack, Container, Heading } from '@chakra-ui/react'
import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const PageContainer = ({ children, bg, title }) => {
  return (
    <VStack minH="100vh" justify="space-between" bg={bg}>
      <NavBar title={title} />
      <Heading color="white">{title}</Heading>
      <Container w="100%" maxW="container.xl">
        {children}
      </Container>
      <Footer />
    </VStack>
  )
}

export default PageContainer
