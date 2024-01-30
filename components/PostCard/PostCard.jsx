import { Box, Flex, Text, AspectRatio } from '@chakra-ui/react'
import NCLink from '@components/NCLink'
import Photo from '@components/Photo'
import Image from 'next/image'
import dayjs from 'dayjs'

const PostCard = ({ post }) => {
  const { id, title, subtitle, postDate, photoFileName } = post

  return (
    <NCLink
      to={`/news/${encodeURIComponent(post.slug)}`}
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        key={id}
        direction="column"
        w="full"
        border="1px"
        borderColor="gray.800"
        shadow="sm"
        role="group"
      >
        {photoFileName && (
          <AspectRatio ratio={1 / 1}>
            <Photo fileName={photoFileName} fill={true} alt="postHeroImage" />
          </AspectRatio>
        )}
        <Box p={{ base: '2', sm: '4' }}>
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
        </Box>
      </Flex>
    </NCLink>
  )
}

export default PostCard
