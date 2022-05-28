import React from 'react'
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

function Login() {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = () => {

  }
  
  return (
    <VStack spacing={'10px'}>
      <Heading>Log in</Heading>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.username || errors.password}>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input id='username' placeholder='Username' {...register('username', {
              required: 'Username is required'
            })} />
            <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' placeholder='Password' {...register('password', {
              required: 'Password is required'
            })} />
            <Button colorScheme="teal" type='submit'>Login</Button>
          </FormControl>
          </form>
      </Container>
    </VStack>
  );
}

export default Login;