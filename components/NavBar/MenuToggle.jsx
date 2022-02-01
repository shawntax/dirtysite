import React from 'react'
import { Box } from '@chakra-ui/react'
import { CgMenuCake as MenuIcon, CgClose as CloseIcon } from 'react-icons/cg'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

export default MenuToggle
