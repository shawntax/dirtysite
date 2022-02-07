import { Heading, VStack, Box, Center } from '@chakra-ui/react'
import NavBar from './NavBar'

const PageContainer = ({ children, title }) => {
  return (
    <VStack height="100%" justify="between" pb="20" bg={'black'}>
      <NavBar />
      <Box bg="gray.100" w="100%" py="6">
        <Center>
          <Heading as="h1" size="md" color="black">
            {title}
          </Heading>
        </Center>
      </Box>

      {children}
    </VStack>
  )
}

export default PageContainer
