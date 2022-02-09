import { Heading, VStack, Box, Center, Text } from '@chakra-ui/react'
import NavBar from './NavBar'
import Footer from './Footer'

const PageContainer = ({ children, title }) => {
  return (
    // weird white space on /artists and /about. Other pages are good.
    <VStack height="100vh" justify="between" pb="20" bg={'black'}>
      <NavBar />
      <Box bg="gray.100" w="100%" py="6">
        <Center>
          <Heading as="h1" size="md" color="black">
            {title}
          </Heading>
        </Center>
      </Box>
      {children}
      <Footer/>
    </VStack>
  )
}

export default PageContainer
