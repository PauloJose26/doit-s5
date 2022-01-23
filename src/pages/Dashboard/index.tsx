import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";
import { TasksList } from "./TasksList";
import { FirstTask } from "./FirstTask";
import { NotFound } from "./NotFound";

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
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

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

  if (notFound) {
    return (
      <NotFound
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
        taskNotFound={taskNotFound}
      />
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TasksList handleClick={handleClick} loading={loading} tasks={tasks} />
      )}
    </>
  );
};
