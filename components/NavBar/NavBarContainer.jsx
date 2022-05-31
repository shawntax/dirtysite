import { Box } from '@chakra-ui/react'

const NavBarContainer = ({
  clientWindowHeight,
  isOpen,
  children,
  ...props
}) => {
  const bgColor = {
    base: isOpen ? 'black' : clientWindowHeight > 250 ? 'black' : '',
    xl: isOpen ? (clientWindowHeight > 250 ? 'black' : 'transparent') : '',
  }
  return (
    <Box
      position={props.fixed ? 'fixed' : 'static'}
      zIndex={900}
      bg={bgColor}
      w="100%"
      py={8}
      px={{ base: '5', sm: '20' }}
      d={{ base: 'block', xl: 'flex' }}
      pb={{ base: isOpen && props.fixed ? '100vh' : '8', xl: '8' }}
      transitionDuration="500ms"
      {...props}
    >
      {children}
    </Box>
  )
}

export default NavBarContainer
