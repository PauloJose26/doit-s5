import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

import { theme } from "../../style/theme";
import { ModalCreateTask } from "../Modal/ModalCreateTask";
import { Input } from "./Input";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";

interface SearchData{
  title: string;
}

export const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { searchTask } = useTasks();
  const { accessToken } = useAuth();

  const { handleSubmit, register } = useForm<SearchData>();

  const handleSearch = ({ title }: SearchData) => {
    searchTask(title, accessToken);
  };

  return (
    <>
    <ModalCreateTask isOpen={ isOpen } onClose={ onClose } />
    <Flex
      mt="6"
      w="100%"
      flexDirection={["column", "column", "row"]}
      paddingX={["4", "8"]}
      paddingY="2"
      paddingBottom="6"
      borderBottom="1px"
      borderColor="gray.50"
    >
      <Flex as="form" onSubmit={ handleSubmit(handleSearch) }>
        <Input
          placeholder="Pesquisar por tarefa"
          w={["100%", "100%", "35vw"]}
          h="60px"
          { ...register("title") }
        />
        <Center
          borderRadius="8px"
          as="button"
          type="submit"
          w="65px"
          h="60px"
          fontSize="2xl"
          bg="purple.600"
        >
          <FaSearch color={theme.colors.white} />
        </Center>
      </Flex>
      <Button
        type="button"
        bg="purple.500"
        color="white"
        paddingX="16"
        ml={["0", "0", "4"]}
        w={["100%", "100%", "auto"]}
        h="60px"
        borderRadius="8px"
        onClick={ onOpen }
        _hover={{
          bg: "purple.600",
        }}
      >
        Adicionar uma nova tarefa
      </Button>
    </Flex>
    </>
  );
};
