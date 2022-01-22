import {
  Box,
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

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonMessage: string;
  onClick: () => void;
  secundaryText: string;
}

export const ModalSuccess = ({
  isOpen,
  onClose,
  buttonMessage,
  message,
  onClick,
  secundaryText,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" alignItems="center">
          <Center bg="purple.600" w="30px" h="30px" mr="7px" borderRadius="5px">
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
            <Box
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Text>
          <Button
            bg="purple.500"
            color="white"
            _hover={{
              bg: "purple.600",
            }}
            fontSize="19px"
            w="100%"
            mt={3}
            padding="25px 0"
            onClick={onClick}
          >
            <Box
              dangerouslySetInnerHTML={{
                __html: buttonMessage,
              }}
            />
          </Button>
        </ModalBody>
        <ModalFooter>
          <Text color="gray.400" textAlign="center">
            <Box
              dangerouslySetInnerHTML={{
                __html: secundaryText,
              }}
            />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
