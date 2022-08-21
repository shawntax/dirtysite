import { useForm } from 'react-hook-form'
import axios from 'axios'
import safeAwait from 'safe-await'

import {
  Box,
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
    formState: { isSubmitting, errors, isDirty, isValid, isSubmitSuccessful },
    setError,
  } = useForm({ mode: 'onTouched', reValidateMode: 'onBlur' })

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(values),
    }

    const [error, res] = await safeAwait(
      axios(
        `${process.env.NEXT_PUBLIC_FUNCTIONS_URL}/newsletter-signup`,
        options
      )
    )

    if (error) {
      const {
        response: { data: errorMessage },
      } = error
      setError('email', { type: 'server', errorMessage })
    } else {
      console.log(res)
    }
  }

  const NAME_REGEX = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <Box>
      <Heading as="h2" size="xl">
        Newsletter
      </Heading>
      {isSubmitSuccessful ? (
        <Text>Success! Check your inbox.</Text>
      ) : (
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
          <FormControl isInvalid={errors.name}>
            <FormLabel fontSize="2xl" htmlFor="name">
              First name
            </FormLabel>
            <Input
              id="name"
              type="text"
              size="lg"
              htmlSize={10}
              width="auto"
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
            <FormLabel fontSize="2xl" htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              size="lg"
              htmlSize={20}
              width="auto"
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
          <p>{isDirty ? 'dirty' : 'not dirty'}</p>
          <p>{isValid ? 'valid' : 'invalid'}</p>
          <Button
            mt={4}
            bgColor="white"
            color="black"
            disabled={!isValid}
            isLoading={isSubmitting}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      )}
    </Box>
  )
}
