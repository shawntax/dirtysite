import { getLayout } from '@components/SiteLayout'
import { Grid } from '@chakra-ui/react'
import PostCard from '@components/PostCard'
import PageHeader from '@components/PageHeader'
import { fetchPosts } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/news.md'

export default function Artists({ posts }) {
  const { seoDesc } = attributes

  return (
    <>
      {posts.length > 0 && (
        <>
          <PageHeader title="News" seoDesc={seoDesc}>
            News
          </PageHeader>
          <Grid
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap="10"
            pt="6"
          >
            {posts.map((post) => {
              {
                return <PostCard key={post.id} post={post} />
              }
            })}
          </Grid>
        </>
      )}
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
