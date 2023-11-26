import { getLayout } from '@components/SiteLayout'
// import { SimpleGrid } from '@chakra-ui/react'
import PageHeader from '@components/PageHeader'
import { fetchPosts } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/news.md'

export default function Artists({ posts }) {
  const { seoDesc } = attributes

  return (
    <>
      <PageHeader title="News" seoDesc={seoDesc}>
        News
      </PageHeader>
    </>
  )
}

export async function getStaticProps() {
  const posts = fetchPosts()

  return {
    props: {
      posts,
    },
  }
}
Artists.pageName = 'News'
Artists.getLayout = getLayout
