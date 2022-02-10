import PageContainer from '../components/PageContainer'

import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Image,
  Wrap,
  WrapItem,
  Divider,
  Link,
  Container,
  Button,
} from '@chakra-ui/react'

export default function Events() {
  return (
    <PageContainer title="Events">
      <Wrap w="80%" justify="center" bg="" pb="10">
        <WrapItem>
          <Image src="sample.jpg" h="310px" w="250px" borderRadius="md" />
        </WrapItem>
        <Container bg="">
          <WrapItem>
            <Box bg="gray.100" w="100%" p="4" borderRadius="md">
              <Box truncate>
                <Link textColor="blue">FOMO at Public works</Link>
                <Text>Saturday April 20th 2024</Text>
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
              </Box>
              <Text pb="5">Content content content</Text>
              <Center>
                <Button
                  _hover={{ bg: 'gray.400', textColor: 'gray.800' }}
                  textColor="gray.100"
                  bg="gray.800"
                >
                  Get Tickets
                </Button>
              </Center>
            </Box>
          </WrapItem>
        </Container>
      </Wrap>

      <Wrap w="80%" justify="center" bg="" mb="10">
        <WrapItem>
          <Image src="sample.jpg" h="310px" w="250px" borderRadius="md" />
        </WrapItem>
        <Container bg="ink">
          <WrapItem>
            <Box bg="gray.100" w="100%" p="4" borderRadius="md">
              <Box truncate>
                <Link textColor="blue">FOMO at Public works</Link>
                <Text>Saturday April 20th 2024</Text>
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
              </Box>
              <Text pb="5">Content content content</Text>
              <Center>
                <Button textColor="gray.100" bg="gray.800">
                  Get Tickets
                </Button>
              </Center>
            </Box>
          </WrapItem>
        </Container>
      </Wrap>
    </PageContainer>
  )
}
