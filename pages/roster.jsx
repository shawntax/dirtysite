import PageContainer from '../components/PageContainer'
import { Box, SimpleGrid, Image, Text, Center } from '@chakra-ui/react'

export default function Roster() {
  return (
    <PageContainer title="Roster">
      <SimpleGrid
        columns={{ md: 2, xl:3}}
        spacing="10px"
        px="8"
      >
        <Box bg="gray.700" borderRadius="lg" justifyContent="center" px="4">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
        </Box>

        <Box bg="gray.700" borderRadius="lg" justifyContent="center" px="4">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
        </Box>

        <Box bg="gray.700" borderRadius="lg" justifyContent="center" px="4">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
        </Box>

        <Box bg="gray.700" borderRadius="lg" justifyContent="center" px="4">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
        </Box>

      </SimpleGrid>
    </PageContainer>
  )
}
