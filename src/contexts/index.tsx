import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../style/theme";

import { AuthProvider } from "./AuthContext";

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
    <AuthProvider>
        <ChakraProvider theme={ theme }>{ children }</ChakraProvider>
    </AuthProvider>
);
