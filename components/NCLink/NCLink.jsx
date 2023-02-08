import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NCLink = ({ children, variant = 'link', to = '/', target, ...props }) => {
  if (variant === 'button') {
    return (
      <Link
        as="a"
        href={to}
        target={target}
        display="flex"
        justifyContent="center"
        size={props.size ?? 'lg'}
        px="4"
        py="2"
        borderRadius="full"
        bgColor="white"
        color="black"
        w={props.width ?? '44'}
        fontSize={props.fontSize ?? 'xl'}
        casing="uppercase"
        fontWeight="bold"
        border="2px solid white"
        _hover={{
          textDecoration: 'none',
          bgColor: 'black',
          color: 'white',
          border: '2px solid white',
          cursor: 'pointer',
        }}
        {...props}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link as={NextLink} href={to} target={target} {...props}>
        {children}
      </Link>
    )
  }
}

export default NCLink
