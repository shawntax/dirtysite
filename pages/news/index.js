import { getLayout } from '@components/SiteLayout'
import { VStack, Box, Flex } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
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
      <VStack>
        {posts.map((post) => {
          return (
            <Box key={post.id}>
              <NCLink
                to={`/news/${encodeURIComponent(post.slug)}`}
                _hover={{ textDecoration: 'none' }}
              >
                {post.title}
              </NCLink>
            </Box>
          )
        })}
      </VStack>
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
