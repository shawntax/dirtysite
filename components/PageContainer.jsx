import { VStack, Container } from '@chakra-ui/react'
import NavBar from './NavBar'
import Footer from './Footer'

const PageContainer = ({ children }) => {
  return (
    <VStack h="100vh" justify="space-between" bg="black">
      <NavBar />
      <Container centerContent border="1px" borderColor="pink.200">
        {children}
      </Container>
      <Footer />
    </VStack>
  )
}

export default PageContainer
