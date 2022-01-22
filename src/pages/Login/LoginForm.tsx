import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/Form/Input";

interface LoginFormProps {
    handleSignIn: ()=> void;
    errors: DeepMap<FieldValues, FieldError>;
    register: UseFormRegister<LoginData>;
    loading: boolean;
}
interface LoginData {
  email: string;
  password: string;
}


export const LoginForm = ({ handleSignIn, errors, register, loading }: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      as="form"
      onSubmit={ handleSignIn }
      action="post"
      mt="4"
      w={["100%", "80%", "50%", "50%"]}
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
            error={errors.email}
            icon={FaEnvelope}
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <Input
          placeholder="Digite sua Senha"
          type="password"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
      </VStack>
      <VStack marginTop="4" spacing="5">
        <Button
          isLoading={loading}
          type="submit"
          bg="purple.800"
          w="100%"
          h="50px"
          color="white"
          borderRadius="8px"
          _hover={{
            bg: "purple.900",
          }}
        >
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta ? </Text>
        <Button
          isLoading={loading}
          type="button"
          bg="gray.100"
          w="100%"
          h="50px"
          color="gray.300"
          borderRadius="8px"
          onClick={ () => history.push("/signup") }
          _hover={{
            bg: "gray.200",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
