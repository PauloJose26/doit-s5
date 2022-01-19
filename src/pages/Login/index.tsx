import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import { FaEnvelope, FaLock } from "react-icons/fa";

import LogoPrimary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/Input";


interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [ loading, setLoading ] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo Obrigatório")
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema)
  });

  const handleLogin = (data: LoginData) => {
  };

  return (
    <Flex
      as="main"
      color="white"
      padding="10px 15px"
      h="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      w="100%"
    >
      <Flex w="100%" flexDirection="row" justifyContent="center" align="center">
        <Grid w="100%" paddingRight="100px">
          <Image src={LogoPrimary} alt="doit" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            flexível e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          onSubmit={ handleSubmit(handleLogin) }
          action="post"
          mt="4"
          w="50%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
          autoComplete="off"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack marginTop="6" spacing="5">
            <Box w="100%">
              <Input 
                placeholder="Digite seu Login"
                label="Login"
                type="email"
                error={ errors.email }
                icon={ FaEnvelope }
                { ...register("email") } 
              />
              { !errors.email && <Text ml="1" mt="1" color="gray.300">Exemplo: nome@email.com</Text> }
            </Box>
            <Input 
              placeholder="Digite sua Senha"
              type="password"
              label="Senha"
              error={ errors.password }
              icon={ FaLock }
              { ...register("password") } 
            />
          </VStack>
          <VStack marginTop="4" spacing="5">
            <Button 
                isLoading={ loading }
                type="submit"
                bg="purple.800"
                w="100%"
                h="50px"
                color="white"
                borderRadius="8px"
                _hover={{
                  bg: "purple.900"
                }}
              >Entrar</Button>
              <Text color="gray.400">Ainda não possui uma conta ? </Text>
              <Button 
                isLoading={ loading }
                type="button"
                bg="gray.100"
                w="100%"
                h="50px"
                color="gray.300"
                borderRadius="8px"
                _hover={{
                  bg: "gray.200"
                }}
              >Entrar</Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
