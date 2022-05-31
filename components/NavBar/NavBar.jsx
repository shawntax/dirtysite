import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import NavBarContainer from './NavBarContainer'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'
import { Box, Spacer } from '@chakra-ui/react'
import { useMediaQuery } from '@hooks/useMediaQuery'
const NavBar = ({ page, fixed, title }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState('')
  const [display, setDisplay] = useState('none')
  const [opacity, setOpacity] = useState(0)
  const isLargerThan1280 = useMediaQuery('1280')
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }
  const toggle = () => {
    setIsOpen(!isOpen)
    setShouldIcolorTheBackgroundBlack(!shouldIcolorTheBackgroundBlack)
    if (display === 'none') {
      setDisplay('block')
      setTimeout(
        () => setOpacity(1),
        10 // something very short
      )
    } else {
      if (display === 'block') {
        setOpacity(0)
        setTimeout(
          () => setDisplay('none'),
          420 // same as transition time
        )
      }
    }
  }
  var [isOpen, setIsOpen] = useState(false)
  var [shouldIcolorTheBackgroundBlack, setShouldIcolorTheBackgroundBlack] =
    useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  //Breakpoint for displaying nav as full screen vs. top bar.
  if (isLargerThan1280) {
    isOpen = true
    shouldIcolorTheBackgroundBlack = false
  } else {
    shouldIcolorTheBackgroundBlack = true
  }

  return (
    <>
      <NavBarContainer
        fixed={fixed}
        clientWindowHeight={clientWindowHeight}
        isLargerThan1280={isLargerThan1280}
        isOpen={isOpen}
      >
        <Box d="flex" alignItems={'center'} bg="" w="100%">
          <Logo
            clientWindowHeight={clientWindowHeight}
            isLargerThan1280={isLargerThan1280}
            page={page}
            isOpen={isOpen}
            w={{
              base: '90px',
              md: '150px',
            }}
          />
          <Spacer d={{ base: 'block', xl: 'none' }} bg=""></Spacer>
          <MenuToggle
            clientWindowHeight={clientWindowHeight}
            d={clientWindowHeight > 300 ? '' : 'none'}
            toggle={toggle}
            isOpen={isOpen}
            isLargerThan1280={isLargerThan1280}
            page={page}
          />
        </Box>
        <MenuLinks
          display={display}
          opacity={opacity}
          toggle={toggle}
          isOpen={isOpen}
          title={title}
          page={page}
          isLargerThan1280={isLargerThan1280}
        />
      </NavBarContainer>
    </>
  )
}

export default NavBar
