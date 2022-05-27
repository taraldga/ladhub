import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'

function Login() {
  return (
    <VStack spacing={'10px'}>
      <Heading>Log in</Heading>
      <Container>
        <Input placeholder='Username'/>
        <Input placeholder='Password' />
        <Button>Login</Button>
      </Container>
    </VStack>
  );
}

export default Login;