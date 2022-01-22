import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import { theme } from "../../style/theme";
import { ModalCreateTask } from "../Modal/ModalCreateTask";
import { Input } from "./Input";

export const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
    <ModalCreateTask isOpen={ isOpen } onClose={ onClose } />
    <Flex
      mt="6"
      w="100%"
      flexDirection={["column", "column", "row"]}
      justifyContent={["center", "center", "start"]}
      alignItems="center"
      paddingX={["4", "8"]}
      paddingY="2"
      paddingBottom="6"
      borderBottom="1px"
      borderColor="gray.50"
    >
      <Flex as="form" justifyContent="center">
        <Input
          name="title"
          placeholder="Pesquisar por tarefa"
          w={["60vw", "60vw", "35vw"]}
          h="60px"
          mr="0"
        />
        <Center
          borderRadius="8px"
          as="button"
          type="button"
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
        ml="4"
        w={["90%", "90%", "auto"]}
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
