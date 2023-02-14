import { getLayout } from '@components/SiteLayout'
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import PageHeader from '@components/PageHeader'
import Photo from '@components/Photo'
import { attributes, react as AboutContent } from '@content/pages/about.md'

export default function About() {
  const { seoDesc, missionStatement, values, identity } = attributes
  return (
    <>
      <PageHeader title="About" seoDesc={seoDesc}>
        About
      </PageHeader>
      {AboutContent && (
        <Box textColor="white" fontSize="3xl">
          <AboutContent />
        </Box>
      )}
      {/* the length of any empty markdown input is \n\n\n */}
      {identity.length > 3 && (
        <Box>
          <Heading as="h1" textTransform="capitalize" w="fit" py="4">
            Identity
          </Heading>
          <Text fontSize="3xl">{identity}</Text>
        </Box>
      )}
      {missionStatement > 3 && (
        <Box>
          <Heading as="h1" textTransform="capitalize" w="fit" py="4">
            Mission Statement
          </Heading>
          <Text fontSize="3xl">{missionStatement}</Text>
        </Box>
      )}
      {values > 3 && (
        <Box>
          <Heading as="h1" textTransform="capitalize" w="fit" py="4">
            values
          </Heading>
          <Text fontSize="3xl">{values}</Text>
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
    </>
  )
}
About.pageName = 'About'
About.getLayout = getLayout
