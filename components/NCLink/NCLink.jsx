import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NCLink = ({ children, ...props }) => (
  <NextLink href={props.href} passHref>
    <Link>{children}</Link>
  </NextLink>
)

export default NCLink
