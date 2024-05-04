import React, { useState, createContext, useContext } from "react";
import { login, register } from "../api";

interface IAuthContext {
    token: string;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
    token: "",
    login: async () => { },
    register: async () => { },
    logout: () => { }
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

    const handleLogout = () => {
        console.log("Handle Logout");
        setToken("");
    }

    return (
        <AuthContext.Provider value={{ token, login: handleLogin, register: handleRegister, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
