import {
  Center,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaCube, FaTimes, FaTrash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { theme } from "../../style/theme";

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface ModalTaskDetailProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

export const ModalTaskDetail = ({
  isOpen,
  onClose,
  task,
}: ModalTaskDetailProps) => {
  const { deleteTask, updateTask } = useTasks();
  const { accessToken, user } = useAuth();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" alignItems="center">
          <Center
            bg="purple.600"
            w="30px"
            h="30px"
            mr="7px"
            borderRadius="5px"
          >
            <FaCube color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold">Visualizar</Text>
          <HStack ml="auto" spacing="2">
            <Center
                as="button"
                w="30px"
                h="30px"
                borderWidth="1px"
                borderRadius="5px"
                borderColor="gray.200"
                bg="white"
                onClick={() => {
                    deleteTask(task.id, accessToken);
                    onClose();
                }}
            >
                <FaTrash color={theme.colors.gray["300"]} />
            </Center>
            <Center
                as="button"
                w="30px"
                h="30px"
                borderWidth="1px"
                borderRadius="5px"
                borderColor={task.completed ? "purple.800" : "gray.200"}
                bg={task.completed ? "purple.800" : "white"}
                onClick={() => {
                    updateTask(task, user.id, accessToken);
                    onClose();
                }}
            >
                <FaCheck
                color={
                    task.completed ? theme.colors.white : theme.colors.gray["300"]
                }
                />
            </Center>
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
            >
                <FaTimes color={theme.colors.white} />
            </Center>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Heading as="h1" fontSize="2xl" mb="10px">{task.title}</Heading>
          <Text color="gray.400">{task.description}</Text>
        </ModalBody>

        <ModalFooter flexDirection="column" alignItems="stretch">
          <Progress
            colorScheme="purple"
            mt="2.4"
            value={task.completed ? 100 : 10}
          />
          <Text color="gray.300" mt="3">
            07 March 2021
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
