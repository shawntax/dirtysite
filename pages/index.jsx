import PageContainer from '@components/PageContainer'
import { Text, Box, Container, Heading, useMediaQuery } from '@chakra-ui/react'
import { attributes } from '@content/pages/home.md'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

export default function Home() {
  const [isLargerThan768, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 768px)',
    '(display-mode: browser)',
  ])

  const { hero_subtitle } = attributes

  if (isLargerThan768 && isDisplayingInBrowser) {
    return (
      <PageContainer bg="black">
        <Container h="100%" w="100%" pos="relative" centerContent>
          <video
            autoPlay
            muted
            loop
            style={{
              position: 'relative',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/media/background-video.mp4" />
          </video>
        </Container>
      </PageContainer>
    )
  } else {
    return (
      <PageContainer bg="black">
        <Container maxW="container.md" centerContent>
          <Heading as="h1" color="white" textTransform="uppercase">
            <ReactMarkdown components={ChakraUIRenderer()}>
              {hero_subtitle}
            </ReactMarkdown>
          </Heading>
        </Container>
      </PageContainer>
    )
  }
}
