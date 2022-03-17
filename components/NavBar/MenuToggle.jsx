import React from 'react'
import { Box } from '@chakra-ui/react'
import { CgMenu as MenuIcon, CgClose as CloseIcon } from 'react-icons/cg'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon size={40} /> : <MenuIcon size={40} />}
    </Box>
  )
}

export default MenuToggle
