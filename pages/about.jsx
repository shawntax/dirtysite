import PageContainer from '@components/PageContainer'
import {
  Center,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  AspectRatio,
} from '@chakra-ui/react'
import { attributes } from '@content/pages/about.md'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
const newTheme = {
  p: (props) => {
    const { children } = props
    return <Text color="white">{children}</Text>
  },
  h1: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
  h2: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
  h3: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
  h4: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
  h5: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
  h6: (props) => {
    const { children } = props
    return <Heading color="white">{children}</Heading>
  },
}
export default function About() {
  let { about_dns } = attributes
  return (
    <PageContainer title="About" bg="black">
      <Box minH="100vh" bg="black">
        <Center textColor={'white'} fontSize={'xl'}>
          <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
            {about_dns}
          </ReactMarkdown>
        </Center>
        <Grid
          h="600"
          bg=""
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={2}
          pb="10"
        >
          <GridItem rowSpan={[6]} colSpan={[6, 2]} bg="">
            <Image
              src="/img/group-acraze.jpg"
              height=""
              width="1500px"
              borderRadius="xl"
              quality={50}
              alt=""
              pb="10"
            />
          </GridItem>
          <GridItem rowSpan={[3, 6]} colSpan={[3, 2]} bg="">
            <Image
              src="/img/group.jpg"
              height={{ md: '', lg: '90%' }}
              width="100%"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[3, 6]} colSpan={[3, 2]} bg="">
            <Image
              src="/img/group-2.jpg"
              // height="100%"
              // width="100%"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[6]} colSpan={[3]} bg="">
            <AspectRatio radio={4 / 3}>
              <Image
                src="/img/group-3.jpg"
                height="15rem"
                width="30rem"
                borderRadius="xl"
                quality={50}
                alt=""
              />
            </AspectRatio>
          </GridItem>
          <GridItem rowSpan={[6]} colSpan={[3]} bg="">
            <AspectRatio radio={4 / 3}>
              <Image
                src="/img/group-4.jpg"
                height="15rem"
                width="30rem"
                borderRadius="xl"
                quality={50}
                alt=""
              />
            </AspectRatio>
          </GridItem>
        </Grid>
      </Box>
    </PageContainer>
  )
}
