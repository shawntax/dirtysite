import PageContainer from '../components/PageContainer'
import { Box, SimpleGrid, Image, Text, Center, Link } from '@chakra-ui/react'

export default function Roster() {
  return (
    <PageContainer title="Roster">
      <SimpleGrid
        columns={{ md: 2, xl:3}}
        spacing="10px"
        px="8"
      >
        <Box bg="gray.700" borderRadius="lg"  px="4" py="5">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
          <Box d="flex" justifyContent="center">
            <Link href="https://instagram.com/djknives"> <Image src="instagram.svg" h="10" mx="3"/> </Link> <Link href="https://facebook.com/djknivesofficial" > <Image src="facebook.svg" h="10"  mx="3"/> </Link>  <Link href="https://soundcloud.com/djknivesofficial" > <Image src="soundcloud.svg" h="10"  mx="3"/> </Link>
          </Box>
        </Box>

        <Box bg="gray.700" borderRadius="lg"  px="4" py="5">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
          <Box d="flex" justifyContent="center">
            <Link href="https://instagram.com/djknives"> <Image src="instagram.svg" h="10" mx="3"/> </Link> <Link href="https://facebook.com/djknivesofficial" > <Image src="facebook.svg" h="10"  mx="3"/> </Link>  <Link href="https://soundcloud.com/djknivesofficial" > <Image src="soundcloud.svg" h="10"  mx="3"/> </Link>
          </Box>
        </Box>

        <Box bg="gray.700" borderRadius="lg"  px="4" py="5">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
          <Box d="flex" justifyContent="center">
            <Link href="https://instagram.com/djknives"> <Image src="instagram.svg" h="10" mx="3"/> </Link> <Link href="https://facebook.com/djknivesofficial" > <Image src="facebook.svg" h="10"  mx="3"/> </Link>  <Link href="https://soundcloud.com/djknivesofficial" > <Image src="soundcloud.svg" h="10"  mx="3"/> </Link>
          </Box>
        </Box>

        <Box bg="gray.700" borderRadius="lg"  px="4" py="5">
          <Image mx="auto" pt="2"  borderRadius="full" src="group.jpg" alt="group" />
            <Box px="15%">
              <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
                <Center textColor="white" fontSize="x-large">Knives</Center>
              </Box>
            </Box>
          <Center px="6" py="3" textColor="white">Lorem Ipsum dorito delicious. Illus dorus parabem.</Center>
          <Box d="flex" justifyContent="center">
            <Link href="https://instagram.com/djknives"> <Image src="instagram.svg" h="10" mx="3"/> </Link> <Link href="https://facebook.com/djknivesofficial" > <Image src="facebook.svg" h="10"  mx="3"/> </Link>  <Link href="https://soundcloud.com/djknivesofficial" > <Image src="soundcloud.svg" h="10"  mx="3"/> </Link>
          </Box>
        </Box>

      </SimpleGrid>
    </PageContainer>
  )
}
