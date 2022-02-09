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
      <Wrap w="80%" justify="center">
        <WrapItem>
          <Image src="sample.jpg" h="300px" w="240px" borderRadius="md" />
        </WrapItem>
        <Container>
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
              <Text pb="5">Content</Text>
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
