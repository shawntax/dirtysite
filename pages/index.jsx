import PageContainer from '@components/PageContainer'
import { Text, Center, useMediaQuery, Heading } from '@chakra-ui/react'
import { attributes } from '@content/pages/home.md'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

export default function Home() {
  let { hero_subtitle } = attributes
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [isSmallerThan768] = useMediaQuery('(max-width: 767px)')
  const newTheme = {
    p: (props) => {
      const { children } = props
      return <Text color="white">{children}</Text>
    },
    h1: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
    h2: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
    h3: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
    h4: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
    h5: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
    h6: (props) => {
      const { children } = props
      return (
        <div align="center">
          <Heading color="white">{children}</Heading>
        </div>
      )
    },
  }
  return (
    <>
      {isSmallerThan768 ? (
        <PageContainer title="" bg="black">
          <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
            {hero_subtitle}
          </ReactMarkdown>
        </PageContainer>
      ) : (
        <></>
      )}
      {isLargerThan768 ? (
        <PageContainer title="" bg="">
          <video
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              position: 'absolute',
              left: '50%',
              top: '50%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate( -50%, -50%)',
              zIndex: '-1',
            }}
          >
            <source src="/media/background-video.mp4" />
          </video>
          <Center>
            <ReactMarkdown components={ChakraUIRenderer(newTheme)}>
              {hero_subtitle}
            </ReactMarkdown>
          </Center>
        </PageContainer>
      ) : (
        <></>
      )}
    </>
  )
}
