import { Heading, VStack } from '@chakra-ui/react'
import NavBar from './NavBar'

const PageContainer = ({ children, title }) => {
  return (
    <VStack height="100vh" justify="between" pb="20" bg={'black'}>
      <NavBar />
      <Heading as="h1" size="sm" color="red.100">
        ({title})
      </Heading>
      {children}
    </VStack>
  )
}

export default PageContainer
