import PageContainer from '../components/PageContainer'
import { Box, SimpleGrid, Image } from '@chakra-ui/react'

import dummyPhoto from '../public/group.jpg'

export default function About() {
  return (
    <PageContainer title="About">
      
      <SimpleGrid
        columns={{ md: 2 }}
        spacing="10px"
        px="2"
      >
        <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
        <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
        <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
        <Image w="100%" borderRadius="md" src="group.jpg" alt="group" />
      </SimpleGrid>
      <Box textColor="white" fontSize="xl" p="4vh">
        Dirty Not Sorry is an artist and promotion collective united by the belief that music brings us together.
      </Box>

    </PageContainer>
  )
}
