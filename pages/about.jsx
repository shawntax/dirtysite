import { getLayout } from '@components/SiteLayout'
import { SimpleGrid, Center } from '@chakra-ui/react'
import PageHeader from '@components/PageHeader'
import Photo from '@components/Photo'
import { attributes, react as AboutContent } from '@content/pages/about.md'

export default function About() {
  const { seoDesc } = attributes
  return (
    <>
      <PageHeader title="About" seoDesc={seoDesc}>
        About
      </PageHeader>
      <Center textColor="white" fontSize="3xl">
        <AboutContent />
      </Center>
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
