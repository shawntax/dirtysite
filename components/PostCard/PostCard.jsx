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
        // h={{ base: 'auto', sm: '2xs' }}
        border="1px"
        borderColor="gray.800"
        shadow="sm"
        role="group"
      >
        <AspectRatio ratio={4 / 3}>
          {photoFileName ? (
            <Photo fileName={photoFileName} fill={true} />
          ) : (
            <Image
              src="https://placehold.co/600x400/png"
              fill={true}
              alt="hero"
            />
          )}
        </AspectRatio>
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
