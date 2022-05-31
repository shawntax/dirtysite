import NavBarContainer from './NavBarContainer'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import NavModal from './NavModal'
import MenuLinks from './MenuLinks'
import SocialLinks from './SocialLinks'
import { useDisclosure } from '@chakra-ui/react'

const NavBar = (props) => {
  const { isHomePage = false } = props

  const { getButtonProps, getDisclosureProps, isOpen, onToggle, onClose } =
    useDisclosure()

  return isOpen ? (
    <NavModal
      isOpen={isOpen}
      onClose={onClose}
      getDisclosureProps={getDisclosureProps}
    />
  ) : (
    <NavBarContainer isHomePage={isHomePage} isOpen={isOpen} {...props}>
      <Logo w={{ base: '52', md: '60', xl: '80' }} orientation="horizontal" />
      <MenuLinks isOpen={isOpen} />
      <SocialLinks isOpen={isOpen} />
      <MenuToggle {...getButtonProps()} toggle={onToggle} isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar
