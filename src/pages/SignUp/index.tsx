import { Flex, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";
import { ModalError } from "../../components/Modal/ModalError";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { useHistory } from "react-router-dom";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const SignUp = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const signUpSchema = yup.object().shape({
    name: yup.string().required("* Campo obrigatório"),
    email: yup
      .string()
      .required("* Campo obrigatório")
      .email("* E-mail inválido"),
    password: yup.string().required("* Campo Obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "* Senhas diferentes"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);

    api
      .post("/users", { name, email, password })
      .then((response) => {
        console.log(response);
        reset();
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        console.log({ ...err });
        setLoading(false);
        onModalErrorOpen();
      });
  };

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  return (
    <>
      <ModalError
        error="O e-mail já está em uso"
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
      />
      <ModalSuccess
        buttonMessage="Ir para o login"
        onClick={() => history.push("/")}
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
        message="Seu cadastro deu super certo, <b>vamos lá</b>"
        secundaryText="Você já pode começar criando <b>suas listas</b> de tarefas agora
        mesmo..."
      />
      <Flex
        as="main"
        color="white"
        padding={["10px 15px", "10px 15px", "30px", "30px"]}
        h={["auto", "auto", "100vh", "100vh"]}
        overflow="auto"
        justifyContent="center"
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
        ]}
        w="100%"
      >
        <Flex
          w={["100%", "100%", "90%", "70%"]}
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          justifyContent="center"
          align="flex-start"
        >
          <GoBackButton top="25" right="25" />
          <SignUpForm
            handleSignUp={handleSubmit(handleSignUp)}
            register={register}
            errors={errors}
            loading={loading}
          />
          <SignUpInfo />
        </Flex>
      </Flex>
    </>
  );
};
