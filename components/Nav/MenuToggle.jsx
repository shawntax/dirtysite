import React from 'react'
import { Box } from '@chakra-ui/react'
import {
  RiMenu4Line as MenuIcon,
  RiCloseFill as CloseIcon,
} from 'react-icons/ri'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', xl: 'none' }} onClick={toggle}>
      <button>
        {isOpen ? <CloseIcon size="32" /> : <MenuIcon size="32" />}
      </button>
    </Box>
  )
}

export default MenuToggle
