import { Button } from '@chakra-ui/react'

const NCButton = ({ children, ...props }) => {
  return (
    <Button
      variant="solid"
      size={props.size ?? 'lg'}
      px="4"
      borderRadius="full"
      bgColor="white"
      color="black"
      w="44"
      fontSize={props.fontSize ?? 'xl'}
      casing="uppercase"
      fontWeight="bold"
      _hover={{
        bgColor: 'black',
        color: 'white',
        border: '2px solid white',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default NCButton
