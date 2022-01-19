import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

import LogoPrimary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/Input";

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Flex
      as="main"
      color="white"
      padding="10px 15px"
      h="100vh"
      bgGradient="linear(to-r, purple.700 60%, white 40%)"
      w="100%"
    >
      <Flex w="100%" flexDirection="row" justifyContent="center" align="center">
        <Grid w="50%" paddingRight="100px">
          <Image src={LogoPrimary} alt="doit" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            flexível e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          mt="4"
          w="50%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack marginTop="6" spacing="5">
            <Input placeholder="Digite seu Login" icon={ FaEnvelope } { ...register("word") } />
            <Input placeholder="Digite sua Senha" icon={ FaLock } { ...register("password") } />
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
