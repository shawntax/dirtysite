import { Flex, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'

const PostCard = ({ post }) => {
  const { id, title, subtitle, postDate } = post

  return (
    <Flex
      key={id}
      direction="column"
      w="full"
      maxW="md"
      border="1px"
      borderColor="gray.800"
      shadow="sm"
      p={{ base: '4', sm: '8' }}
      role="group"
    >
      <NCLink
        to={`/news/${encodeURIComponent(post.slug)}`}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontSize="xl" textColor="gray.400" pb="2">
          {dayjs(postDate).format('MMMM D, YYYY')}
        </Text>
        <Text
          as="h1"
          fontSize="3xl"
          fontWeight="bold"
          _groupHover={{ textDecoration: 'underline' }}
        >
          {title}
        </Text>
        <Text fontSize="xl" lineHeight="none">
          {subtitle}
        </Text>
      </NCLink>
    </Flex>
  )
}

export default PostCard
