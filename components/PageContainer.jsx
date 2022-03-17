import { VStack, Container } from '@chakra-ui/react'
import NavBar from './NavBar'
import Footer from './Footer'

const PageContainer = ({ children }) => {
  return (
    <VStack minH="100vh" justify="space-between" bg="black">
      <NavBar />
      <Container w="100%" maxW="container.xl" bg="black">
        {children}
      </Container>
      <Footer />
    </VStack>
  )
}

export default PageContainer
