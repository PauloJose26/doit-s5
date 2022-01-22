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
  VStack,
} from "@chakra-ui/react";
import {  FaClipboard, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../Form/Input";
import { theme } from "../../style/theme";
import { Textarea } from "../Form/Textarea";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";

interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TaskData {
    title: string;
    description: string;
}

const yupSchema = yup.object().shape({
  title: yup.string().required("* Campo obrigatório"),
  description: yup
    .string()
    .required("* Campo obrigatório")
    .max(100, "Máximo de 100 caracteres"),
});

export const ModalCreateTask = ({ isOpen, onClose }: ModalCreateTaskProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskData>({
    resolver: yupResolver(yupSchema),
  });

  const { user, accessToken } = useAuth();
  const { createTask } = useTasks();

  const handleCreateTask = (data: TaskData) => {
    const newData = { ...data, userId: user.id, completed: false };

    createTask(newData, accessToken);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" alignItems="center">
          <Center bg="purple.600" w="30px" h="30px" mr="7px" borderRadius="5px">
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold">Adicionar</Text>
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

        <ModalBody as="form" textAlign="center" onSubmit={ handleSubmit(handleCreateTask) }>
          <VStack spacing="5" mb="4">
            <Input
              title="Título"
              error={errors.title}
              {...register("title")}
              placeholder="Digite seu título"
            />
            <Textarea
                maxHeight="200px"
                minHeight="70px"
              title="Descrição"
              error={errors.description}
              {...register("description")}
              placeholder="Digite sua descrição"
            />
            <Button
              type="submit"
              bg="purple.500"
              color="white"
              _hover={{
                bg: "purple.600",
              }}
              padding="25px 0"
              fontSize="19px"
              w="100%"
              mt={3}
            >
              Adicionar tarefa
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
