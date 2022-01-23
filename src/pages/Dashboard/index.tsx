import { useEffect, useState } from "react";
import { Box, Grid, useDisclosure } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { accessToken, user } = useAuth();
  const { tasks, loadTasks } = useTasks();

  const [ selectedTask, setSelectedTask ] = useState<Task>({} as Task);

  const {
    isOpen: isTaskDetailOpen,
    onClose: onTaskDetailClose,
    onOpen: onTaskDetailOpen,
  } = useDisclosure();

  const handleClick = (task: Task) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  return (
    <>
      <ModalTaskDetail isOpen={isTaskDetailOpen} onClose={onTaskDetailClose} task={ selectedTask } />
      <Box>
        <Header />
        <SearchBox />
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
          gap={7}
          padding="8"
          mt="8"
        >
          {tasks.map((item) => (
            <Card key={item.id} task={item} onClick={ handleClick } />
          ))}
        </Grid>
      </Box>
    </>
  );
};
