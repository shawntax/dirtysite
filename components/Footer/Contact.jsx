import React from 'react'
import { Button, Center, FormControl, Input, Text, Box } from '@chakra-ui/react'
import { RiMailSendLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <>
      <Center bg="black">
        <Text color="white" pt="10">
          Sign up for free guest list to our events!
        </Text>
      </Center>
      <Center bg="black" pt="10">
        <Box d="" bg="" w="100%">
          <Center>
            <form id="contact" data-netlify="true" method="POST" name="contact">
              <Input type="hidden" name="form-name" value="contact" />
              <FormControl d="">
                <Input
                  borderColor={'gray.800'}
                  textColor={'white'}
                  w=""
                  id="email"
                  type="email"
                  name="email"
                  required={true}
                  placeholder="Email"
                  d=""
                  borderRightRadius="0"
                  verticalAlign={'middle'}
                />
                <Button
                  d=""
                  type="submit"
                  ml=""
                  verticalAlign={'middle'}
                  borderLeftRadius="0"
                  bg="gray.800"
                  color="gray.300"
                  _hover={{ bg: 'white', color: 'black' }}
                >
                  <RiMailSendLine size={30} />
                </Button>
              </FormControl>
            </form>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Contact
