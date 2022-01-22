import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";
import { useAuth } from "../../contexts/AuthContext";

interface LoginData {
  email: string;
  password: string;
}



export const Login = () => {
  const { SignIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().required("* Campo obrigatório").email("* E-mail inválido"),
    password: yup.string().required("* Campo Obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginData) => {
    setLoading(true);
    SignIn(data)
      .then(() => setLoading(false))
      .catch((err) => {
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
        <LoginInfo />
        <LoginForm 
          handleSignIn={ handleSubmit(handleLogin) } 
          register={ register } 
          errors={ errors }
          loading={ loading }
        />
      </Flex>
    </Flex>
  );
};
