import PageContainer from '@components/PageContainer'
import { Container, Heading, useMediaQuery } from '@chakra-ui/react'
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
      <PageContainer fullWidthContent bg="black">
        <video muted loop width="100%">
          <source src="/media/background-video.mp4" />
        </video>
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
