import React from 'react'
import { Box, ScaleFade, Spacer } from '@chakra-ui/react'
import { CgMenu as MenuIcon, CgClose as CloseIcon } from 'react-icons/cg'

const MenuToggle = ({ clientWindowHeight, isOpen, page, toggle }) => {
  return (
    <ScaleFade
      initialScale={0.1}
      in={
        clientWindowHeight > -1000 ||
        page != 'Home' ||
        (page == 'Home' && isOpen == true)
      }
      // out={clientWindowHeight < 300}
    >
      <Box
        display={{ base: 'block', xl: 'none' }}
        onClick={toggle}
        justifyContent="flex-end"
      >
        {isOpen ? (
          <Spacer>
            <CloseIcon size={40} />
          </Spacer>
        ) : (
          <MenuIcon size={40} />
        )}
      </Box>
    </ScaleFade>
  )
}

export default MenuToggle
