import { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'

const NavBarContainer = ({ children, ...props }) => {
  const { isHomePage } = props
  const variants = {
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      boxShadow: 'none',
      borderBottom: 'none',
      transition: { duration: 0.3 },
    },
    below: {
      backgroundColor: '#000',
      boxShadow: '0px 10px 30px 0px rgba(0,0,0,0.5)',
      borderBottom: '1px solid #171923',
      transition: { duration: 0.3 },
    },
  }

  const { scrollYProgress } = useViewportScroll()
  const control = useAnimation()

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest === 0) {
        control.start('top')
      } else {
        control.start('below')
      }
    })
  }, [scrollYProgress, control])

  return (
    <Flex
      as={motion.div}
      initial={
        isHomePage && {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: 'none',
        }
      }
      variants={isHomePage && variants}
      animate={isHomePage && control}
      bg="black"
      borderBottom="1px"
      borderBottomColor="gray.900"
      boxShadow="none"
      position="fixed"
      minH="16"
      zIndex={900}
      align="center"
      justify="space-between"
      w="100%"
      color="white"
      px={{ base: '4', md: '8' }}
      py="4"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer
