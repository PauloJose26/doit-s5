import { createContext, useCallback, useState, useContext, ReactNode } from "react";

import { api } from "../services/api";


interface AuthProviderProps{
    children: ReactNode
}

interface User{
    id: string;
    name: string;
    email: string;
}

interface AuthState{
    accessToken: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData{
    user: User;
    accessToken: string;
    SignIn: (credentials: SignInCredentials) => Promise<void>;
    SignOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [data, setData] = useState<AuthState>(() => {
        const accessToken = localStorage.getItem("@Doit:accessToken");
        const user = localStorage.getItem("@Doit:user");

        if(accessToken && user){
            return { accessToken, user: JSON.parse(user) } as AuthState;
        }

        return {} as AuthState;
    });

    const SignIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post("/login", { email, password });

        const { accessToken, user } = response.data as AuthState;
        localStorage.setItem("@Doit:accessToken", accessToken);
        localStorage.setItem("@Doit:user", JSON.stringify(user));

        setData({ accessToken, user });
    }, []);

    const SignOut = useCallback(() => {
        localStorage.clear();
        localStorage.clear();

        setData({} as AuthState);
    }, []);

    return(
        <AuthContext.Provider value={ { 
            accessToken: data.accessToken, user: data.user, SignIn, SignOut } }>
            { children }
        </AuthContext.Provider>
    );
};
