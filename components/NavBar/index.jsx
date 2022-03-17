import React, { useState } from 'react'
import Logo from './Logo'
import NavBarContainer from './NavBarContainer'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo
        w={{
          base: '90px',
          md: '150px',
        }}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar
