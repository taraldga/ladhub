import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import useStore, { Tokens } from "../../hooks/useStore";
import {useNavigate} from "react-router-dom"

interface LoginData {
  username: string;
  password: string;
}

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();
  const {setTokens} = useStore();
  const navigate = useNavigate();

  

  const onSubmit = async (data: LoginData) => {
    const res = await  axios.post('http://localhost:8000/api/token/', data);
    setTokens(res.data as Tokens);
    navigate(-1)
  };

  return (
    <VStack spacing={"10px"}>
      <Heading>Log in</Heading>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
            <Button colorScheme="teal" type="submit">
              Login
            </Button>
          </FormControl>
        </form>
      </Container>
    </VStack>
  );
}

export default Login;
