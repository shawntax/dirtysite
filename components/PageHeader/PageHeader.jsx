import { Heading } from '@chakra-ui/react'

const PageHeader = ({ children }) => {
  return (
    <Heading as="h1" textTransform="capitalize" w="fit" py="4">
      {children}
    </Heading>
  )
}

export default PageHeader
