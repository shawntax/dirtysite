import { getLayout } from '@components/SiteLayout'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import { fetchPosts } from '@helpers/cms.helpers'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'
import { RxExternalLink } from 'react-icons/rx'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

const postTheme = {
  a: ({ href, children }) => {
    return (
      <NCLink
        href={href}
        target="_blank"
        rel="noopener"
        textDecoration="underline"
        textDecorationStyle="dotted"
        textDecorationColor="gray.400"
      >
        {children?.toString().toLowerCase()}
        <RxExternalLink style={{ display: 'inline', height: '13px' }} />
      </NCLink>
    )
  },
}

function Post({ post }) {
  const { title, postDate, body } = post
  return (
    <Container maxW="container.md">
      <Flex direction="column" px={{ base: 0, lg: '10' }}>
        <Text
          as="h2"
          fontSize={{ base: '2xl', sm: '3xl' }}
          textColor="gray.400"
        >
          {dayjs(postDate).format('dddd, MMMM DD YYYY')}
        </Text>
        <Heading as="h1" fontSize={{ base: '3xl', sm: '4xl' }} my="2" pb="4">
          {title}
        </Heading>
        <Text as="article" fontSize="2xl">
          <ReactMarkdown
            components={ChakraUIRenderer(postTheme)}
            remarkPlugins={[remarkGfm]}
            children={body}
            skipHtml
          />
        </Text>
      </Flex>
    </Container>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const posts = fetchPosts()
  const post = posts.find((x) => x.slug === slug) || {}

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = fetchPosts()
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

Post.getLayout = getLayout

export default Post
