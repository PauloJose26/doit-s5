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
  createTask: (data: Omit<Task, "id">, accessToken: string) => Promise<void>;
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

  const createTask = useCallback(async (data: Omit<Task, "id">, accessToken: string) => {
    api.post("/task", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response: AxiosResponse<Task>) => setTasks((oldTasks) => [...oldTasks, response.data]))
    .catch(err => console.log(err));
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};
