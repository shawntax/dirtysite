import { getLayout } from '@components/SiteLayout'
import { Container, Flex, Heading, Text, AspectRatio } from '@chakra-ui/react'
import { fetchPosts } from '@helpers/cms.helpers'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'
import Image from 'next/image'
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
  const {
    title,
    postDate,
    body,
    photoFileName,
    callToAction,
    callToActionLink,
    callToActionButtonText,
  } = post
  return (
    <Container maxW="container.md">
      <Flex direction="column" px={{ base: 0, lg: '10' }}>
        <Flex direction="column">
          <Text
            as="h2"
            fontSize={{ base: '2xl', sm: '3xl' }}
            textColor="gray.400"
          >
            {dayjs(postDate).format('MMMM DD, YYYY')}
          </Text>
          <Heading as="h1" fontSize={{ base: '3xl', sm: '4xl' }} my="2" pb="4">
            {title}
          </Heading>
        </Flex>
        {photoFileName && (
          <AspectRatio ratio={1 / 1} my={6}>
            <Photo fileName={photoFileName} fill={true} alt="postHeroImage" />
          </AspectRatio>
        )}
        {callToActionButtonText && (
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            align="center"
            border="1px"
            borderStyle="dotted"
            borderColor="gray.200"
            p={4}
            my={4}
          >
            {callToAction && (
              <Text fontSize="2xl" maxW={{ base: 'none', sm: 'sm' }}>
                {callToAction}
              </Text>
            )}

            <NCLink
              variant="button"
              to={`https://${callToActionLink}`}
              mt={{ base: 4, sm: 'none' }}
            >
              {callToActionButtonText.toUpperCase()}
            </NCLink>
          </Flex>
        )}
        <Text as="article" fontSize="2xl" mt={4}>
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
