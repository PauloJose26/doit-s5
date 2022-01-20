import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import { FaEnvelope, FaLock } from "react-icons/fa";

import LogoPrimary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/Input";
import { useAuth } from "../../contexts/AuthContext";


interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const { SignIn } = useAuth();
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
    setLoading(true);
    SignIn(data).then(() => setLoading(false)).catch((err) => {
      setLoading(false);
    });
  };

  return (
    <Flex
      as="main"
      color="white"
      padding={["10px 15px", "10px 15px", "0", "0"]}
      h={ ["auto", "auto", "100vh", "100vh"] }
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      w="100%"
    >
      <Flex 
        w={["100%", "100%", "90%", "70%"]} 
        flexDirection={["column", "column", "row", "row"]} 
        justifyContent="center" 
        align="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight={["0", "0","100px"]}
          paddingBottom={["20px", "20px", "0"]}
        >
          <Image src={LogoPrimary} alt="doit" boxSize={["120px", "120px", "150px", "150px"]} />
          <Heading as="h1" mt="4">O jeito fácil, grátis</Heading>
          <Text w={["auto", "350px"]}>
            flexível e atrativo de gerenciar
            <b> seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          onSubmit={ handleSubmit(handleLogin) }
          action="post"
          mt="4"
          w={["100%", "80%", "50%","50%"]}
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
