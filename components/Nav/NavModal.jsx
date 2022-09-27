import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import SocialLinks from './SocialLinks'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NavModal = ({ ...props }) => {
  const { getDisclosureProps, isOpen, onClose } = props

  const { events } = useRouter()

  // hook into Next's route events to close modal on navigation
  useEffect(() => {
    events.on('routeChangeStart', onClose)
    return () => {
      events.off('routeChangeStart', onClose)
    }
  }, [onClose, events])

  return (
    <Modal
      {...getDisclosureProps()}
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      size="full"
      color="white"
    >
      <ModalOverlay bg="black" />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader bg="black" color="white">
          <Center>
            <Logo w={{ base: '24', md: '32' }} orientation="vertical" />
          </Center>
        </ModalHeader>
        <ModalBody overflow="hidden" bg="black" color="white">
          <MenuLinks isOpen={isOpen} />
          <SocialLinks isOpen={isOpen} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NavModal
