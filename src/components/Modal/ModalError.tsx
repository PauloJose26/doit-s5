import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../style/theme";

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  error: string;
}

export const ModalError = ({ isOpen, onClose, error }: ModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" alignItems="center">
          <Center bg="red.600" w="30px" h="30px" mr="7px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold">Oops!</Text>
          <Center
            bg="red.600"
            outline="none"
            borderRadius="5px"
            _hover={{
              bg: "red.700",
            }}
            onClick={onClose}
            as="button"
            w="32px"
            h="32px"
            ml="auto"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody>
          <Text color="gray.400" textAlign="center">
            Ocorreu algum erro: <b>{ error }</b>
          </Text>
          <Button
            bg="red.500"
            color="white"
            w="100%"
            _hover={{
              bg: "red.600",
            }}
            padding="25px 0"
            fontSize="19px"
            onClick={onClose}
            mt="5"
          >
            Tentar novamente
          </Button>
        </ModalBody>
        <ModalFooter>
          <Text textAlign="center" color="gray.400">
            Você já pode tentar novamente, <b>clicando</b> no botão acima ou
            aguarde alguns minutos...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
