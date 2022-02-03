import PageContainer from '../components/PageContainer'
import { Center, SimpleGrid, Image, Container } from '@chakra-ui/react'

import dummyPhoto from '../public/group.jpg'

export default function About() {
  return (
    <PageContainer title="About">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ sm: 2, lg: 3, '2xl': 4 }} spacing="10px" px="2">
          <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
          <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
          <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
          <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
        </SimpleGrid>
        <Center textColor="white" fontSize="xl" p="4vh">
          Dirty Not Sorry is an artist and promotion collective united by the
          belief that music brings us together.
        </Center>
      </Container>
    </PageContainer>
  )
}
