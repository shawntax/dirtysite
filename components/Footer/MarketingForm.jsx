import { useForm } from 'react-hook-form'
import axios from 'axios'
import safeAwait from 'safe-await'

import {
  Box,
  Flex,
  Text,
  Heading,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export default function MarketingForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    setError,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(values),
    }

    let URL
    if (process.env.NODE_ENV === 'development') {
      URL = `http://localhost:3000/api/newsletter-signup`
    } else if (process.env.VERCEL_ENV === 'preview') {
      URL = `${process.env.VERCEL_URL}/api/newsletter-signup`
    } else {
      URL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/newsletter-signup`
    }

    const [error, res] = await safeAwait(axios(URL, options))

    if (error) {
      const {
        response: {
          data: { message: errorMessage },
        },
      } = error
      setError('email', { type: 'server', errorMessage })
    } else {
      console.log(res)
    }
  }

  const NAME_REGEX = /^\b([A-ZÀ-ÿ-,a-z. ']+[ ]*)+$/

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <Flex direction="column">
      <Flex direction="column" align="center" mb="4">
        <Heading as="h2" size="lg" mb="2">
          DNS Newsletter
        </Heading>
        <Text fontSize="xl">The latest updates in your inbox</Text>
      </Flex>
      {isSubmitSuccessful ? (
        <Text>Success! Check your inbox.</Text>
      ) : (
        <Box w={{ base: 'full', lg: '60%' }} mx="auto">
          <form onSubmit={handleSubmit(onSubmit)} name="marketing-newsletter">
            <FormControl>
              <Input
                type="text"
                id="form_email"
                name="username"
                sx={{ display: 'none !important' }}
                tabIndex="-1"
                autoComplete="false"
                {...register('username', { required: false })}
              />
            </FormControl>
            <FormControl isInvalid={errors.name} pb="2">
              <FormLabel fontSize="lg" htmlFor="name" mb="-2">
                First name
              </FormLabel>
              <Input
                id="name"
                type="text"
                size="md"
                variant="flushed"
                htmlSize={20}
                w={{ base: 'full', sm: 'auto' }}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Give us a name, please!',
                  },
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Name cannot be more than 20 characters',
                  },
                  pattern: {
                    value: NAME_REGEX,
                    message: 'Name contains invalid characters',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel fontSize="lg" htmlFor="email" mb="-2">
                Email
              </FormLabel>
              <Input
                id="email"
                type="email"
                size="md"
                variant="flushed"
                htmlSize={20}
                w={{ base: 'full', sm: 'full' }}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Give us an email, please!',
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Invalid email address',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              w="full"
              fontSize="xl"
              borderRadius="full"
              mt="6"
              py="4"
              bgColor="white"
              color="black"
              isLoading={isSubmitting}
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Box>
      )}
    </Flex>
  )
}
