import React, { useState, createContext, useContext } from "react";
import { login, register } from "../api";

interface IAuthContext {
    token: string;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
    token: "",
    login: async () => { },
    register: async () => { }
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string>("");

    const handleLogin = async (email: string, password: string) => {
        console.log("Handle Login");

        try {
            const response = await login(email, password);
            console.log("Login token: " + response);
            setToken(response);
        }
        catch (error) {
            console.log("Login error: " + error);
        }
    }

    const handleRegister = async (email: string, password: string) => {
        console.log("Handle Register");

        try {
            await register(email, password);
            const response = await login(email, password);
            console.log("Register token: " + response);
            setToken(response);
        }
        catch (error) {
            console.log("Register error: " + error);
        }
    }

    return (
        <AuthContext.Provider value={{ token, login: handleLogin, register: handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
