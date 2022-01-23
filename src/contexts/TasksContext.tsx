import { AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";

import { api } from "../services/api";

interface TasksProviderProps {
  children: ReactNode;
}

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TasksContextData {
  tasks: Task[];
  notFound: boolean;
  taskNotFound: string;
  createTask: (data: Omit<Task, "id">, accessToken: string) => Promise<void>;
  loadTasks: (userId: string, accessToken: string) => Promise<void>;
  deleteTask: (idTask: string, accessToken: string) => Promise<void>;
  updateTask: (
    task: Task,
    userId: string,
    accessToken: string
  ) => Promise<void>;
  searchTask: (taskTitle: string, accessToken: string) => Promise<void>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useAuth must be used within an TasksContext");
  }

  return context;
};
export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);
  const [notFound, setNotFound] = useState(false);
  const [taskNotFound, setTaskNotFound] = useState("");

  const loadTasks = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTasks([...response.data]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createTask = useCallback(
    async (data: Omit<Task, "id">, accessToken: string) => {
      await api
        .post("/tasks", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<Task>) =>
          setTasks((oldTasks) => [...oldTasks, response.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  const deleteTask = useCallback(
    async (idTask: string, accessToken: string) => {
      await api
        .delete(`/tasks/${idTask}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          setTasks((oldTasks) => [
            ...oldTasks.filter((item) => item.id !== idTask),
          ]);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const updateTask = useCallback(
    async (task: Task, userId: string, accessToken: string) => {
      await api
        .patch(
          `/tasks/${task.id}`,
          { completed: !task.completed, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          setTasks((oldTasks) => [
            ...oldTasks.map((item) => {
              if (item.id === task.id) {
                return { ...item, completed: !task.completed };
              }
              return { ...item };
            }),
          ]);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const searchTask = useCallback(
    async (taskTitle: string, accessToken: string) => {
      const response = await api.get(`/tasks?title_like=${taskTitle}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.data.length) {
        setNotFound(true);
        setTaskNotFound(taskTitle);
      } else {
        setNotFound(false);
        setTaskNotFound("");
      }
      setTasks(response.data);
    },
    []
  );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        notFound,
        taskNotFound,
        createTask,
        loadTasks,
        deleteTask,
        updateTask,
        searchTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
