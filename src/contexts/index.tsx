import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../style/theme";
import { AuthProvider } from "./AuthContext";
import { TasksProvider } from "./TasksContext";

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
    <AuthProvider>
        <TasksProvider>
            <ChakraProvider theme={ theme }>{ children }</ChakraProvider>
        </TasksProvider>
    </AuthProvider>
);
