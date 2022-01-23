import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";

import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";



interface Task {
    id: string;
    title: string;
    description: string;
    userId: string;
    completed: boolean;
}
interface NotFoundProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task;
    taskNotFound: string;
}


export const NotFound = ({ isOpen, onClose, task, taskNotFound}: NotFoundProps) => {
    return (
        <>
        <ModalTaskDetail
          isOpen={isOpen}
          onClose={onClose}
          task={task}
        />
        <Box>
          <Header />
          <SearchBox />
          <Center mt="4" textAlign="center" display="flex" flexDir="column">
            <Heading size="lg">Não encontramos resultados para: </Heading>
            <Text fontSize="xl">{ taskNotFound }</Text>
            <Box
              mt="6"
              w={["80%", "40%"]}
              padding="6"
              boxShadow="base"
              bg="white"
            >
              <Stack>
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  height="20px"
                  borderRadius="20px"
                  w="70%"
                />
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  height="20px"
                  borderRadius="20px"
                  w="45%"
                />
              </Stack>
              <Stack mt="8">
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  height="15px"
                  borderRadius="15px"
                />
                <Skeleton
                  startColor="gray.100"
                  endColor="gray.200"
                  height="15px"
                  borderRadius="15px"
                />
              </Stack>
            </Box>
          </Center>
        </Box>
      </>  
    );
};