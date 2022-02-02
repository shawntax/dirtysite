import { Heading, VStack } from '@chakra-ui/react'
import NavBar from './NavBar'

const PageContainer = ({ children, title }) => {
  return (
    <VStack justify="between" pb="20" bg={'black'}>
      <NavBar />
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        {title}
      </Heading>
      {children}
    </VStack>
  )
}

export default PageContainer
