import { Flex, Text } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import dayjs from 'dayjs'

const PostCard = ({ post }) => {
  const { id, title, subtitle, postDate } = post

  return (
    <NCLink
      to={`/news/${encodeURIComponent(post.slug)}`}
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        key={id}
        direction="column"
        w="full"
        h={{ base: 'auto', sm: '2xs' }}
        p={{ base: '4', sm: '8' }}
        border="1px"
        borderColor="gray.800"
        shadow="sm"
        role="group"
      >
        <Text fontSize="xl" textColor="gray.400" pb="2">
          {dayjs(postDate).format('MMMM D, YYYY')}
        </Text>
        <Text
          as="h1"
          fontSize="3xl"
          fontWeight="bold"
          lineHeight="none"
          mb="4"
          _groupHover={{ textDecoration: 'underline' }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text fontSize="xl" lineHeight="none">
            {subtitle}
          </Text>
        )}
      </Flex>
    </NCLink>
  )
}

export default PostCard
