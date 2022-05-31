import { getLayout } from '@components/SiteLayout'

import {
  Button,
  Container,
  Text,
  Input,
  FormLabel,
  FormControl,
} from '@chakra-ui/react'

export default function Contact() {
  return (
    <Container>
      <Text textColor={'white'} fontSize="2xl" pb="4">
        Join the DNS Family for free guest list to our events!
      </Text>
      <form id="contact" data-netlify="true" method="POST" name="contact">
        <Input type="hidden" name="form-name" value="contact"></Input>
        <FormControl>
          <FormLabel textColor={'white'}>Email</FormLabel>
          <Input
            textColor={'white'}
            id="email"
            type="email"
            name="email"
            required={true}
          ></Input>
          <FormLabel textColor={'white'}>Phone</FormLabel>
          <Input textColor={'white'} id="tel" type="tel" name="tel"></Input>
        </FormControl>
        <Button type="submit" mt="8" float="right">
          Submit
        </Button>
      </form>
    </Container>
  )
}

Contact.getLayout = getLayout
