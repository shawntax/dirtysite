import { getLayout } from '@components/SiteLayout'
// import {
//   Flex,
//   Box,
//   Heading,
//   VStack,
//   Text,
//   AspectRatio,
//   Divider,
//   Container,
// } from '@chakra-ui/react'
import { fetchPosts } from '@helpers/cms.helpers'
// import ReactMarkdown from 'react-markdown'
// import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

// const postTheme = {
//   a: ({ href, children }) => {
//     return (
//       <NCLink
//         href={href}
//         target="_blank"
//         rel="noopener"
//         textDecoration="underline"
//         textDecorationStyle="dotted"
//         textDecorationColor="gray.400"
//       >
//         {children?.toString().toLowerCase()}
//         <RxExternalLink style={{ display: 'inline', height: '13px' }} />
//       </NCLink>
//     )
//   },
// }

function Post({ post }) {
  return null
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
