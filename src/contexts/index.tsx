import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../style/theme";

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
    <ChakraProvider theme={ theme }>{ children }</ChakraProvider>
);
