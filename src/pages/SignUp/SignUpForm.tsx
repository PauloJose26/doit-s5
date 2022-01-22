import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { Input } from "../../components/Form/Input";

interface SignUpFormProps {
    handleSignUp: ()=> void;
    errors: DeepMap<FieldValues, FieldError>;
    register: UseFormRegister<SignUpData>;
    loading: boolean;
}
interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}


export const SignUpForm = ({ handleSignUp, errors, register, loading }: SignUpFormProps) => {
  return (
    <Grid
      as="form"
      onSubmit={ handleSignUp }
      action="post"
      mt="4"
      w={["100%", "100%", "50%", "50%"]}
      padding="30px 25px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      autoComplete="off"
    >
      <Heading size="lg">Crie sua conta</Heading>
      <VStack marginTop="6" spacing="5">
        <Input
          placeholder="Digite seu Nome"
          label="Nome"
          type="text"
          error={errors.name}
          icon={FaEnvelope}
          {...register("name")}
        />
        <Box w="100%">
          <Input
            placeholder="Digite seu E-mail"
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
        <Input
          placeholder="Confirme sua Senha"
          type="password"
          label="Confirme a Senha"
          error={errors.confirm_password}
          icon={FaLock}
          {...register("confirm_password")}
        />
      </VStack>
      <Button
        mt="15px"
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
        Finalizar cadastro
      </Button>
    </Grid>
  );
};
