import { getLayout } from '@components/SiteLayout'
import {
  Container,
  Flex,
  Box,
  SimpleGrid,
  Heading,
  Text,
} from '@chakra-ui/react'
import PageHeader from '@components/PageHeader'
import Photo from '@components/Photo'
import { attributes, react as AboutContent } from '@content/pages/about.md'
import MarkdownRenderer from '@components/MarkdownRenderer'

const aboutTheme = {
  p: ({ children }) => {
    return (
      <Text fontSize="3xl" py="2">
        {children}
      </Text>
    )
  },
}
export default function About() {
  const { seoDesc, missionStatement, values, identity } = attributes
  return (
    <Container maxW="container.lg">
      <PageHeader title="About" seoDesc={seoDesc}>
        About
      </PageHeader>
      {AboutContent && (
        <Box textColor="white" fontSize="3xl">
          <AboutContent />
        </Box>
      )}
      <Flex direction="column">
        {/* the length of any empty markdown input is \n\n\n */}

        {missionStatement.length > 3 && (
          <Box my="4">
            <Heading as="h1" textTransform="capitalize" w="fit" py="4">
              Mission Statement
            </Heading>
            <MarkdownRenderer
              components={aboutTheme}
              children={missionStatement}
            />
          </Box>
        )}

        {identity.length > 3 && (
          <Box my="4">
            <Heading as="h1" textTransform="capitalize" w="fit" py="4">
              Identity
            </Heading>
            <MarkdownRenderer
              components={aboutTheme}
              children={identity}
              skipHtml
            />
          </Box>
        )}

        {values.length > 3 && (
          <Box my="4">
            <Heading as="h1" textTransform="capitalize" w="fit" py="4">
              values
            </Heading>
            <MarkdownRenderer
              components={aboutTheme}
              children={values}
              skipHtml
            />
          </Box>
        )}
        <SimpleGrid columns={{ base: 1, lg: 2 }} mt="4" spacing="8">
          <Photo
            fileName="group-acraze.jpg"
            alt="group"
            height={500}
            width={500}
          />
          <Photo fileName="group.jpg" alt="group" height={500} width={500} />
          <Photo fileName="group-2.jpg" alt="group" height={500} width={500} />
          <Photo fileName="group-4.jpg" alt="group" height={500} width={500} />
        </SimpleGrid>
      </Flex>
    </Container>
  )
}
About.pageName = 'About'
About.getLayout = getLayout
