import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";

import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/Modal/ModalCreateTask";

export const FirstTask = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  
  return (
    <Box>
      <Header />
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Box
        mt="4"
        w="90vw"
        paddingY="16"
        paddingX={["6px", "6px", "0"]}
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading fontSize="4xl" as="h1" mt="4">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text color="gray.400" mt="6">
          Insira sua meta e mostre a você mesmo sua capacidade em cumprir{" "}
          <Text fontWeight="bold" color="gray.900" display="inline-block">
            suas atividades
          </Text>
        </Text>
        <Button
          padding="6"
          mt="6"
          bg="purple.800"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={onOpen}
        >
          Criar minha primeira tarefa
        </Button>
      </Box>
    </Box>
  );
};
