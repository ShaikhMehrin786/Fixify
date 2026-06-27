import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {

            setUser(JSON.parse(storedUser));

        }

        setLoading(false);

    }, []);

    const login = async (credentials) => {

        const response = await authService.login(credentials);

        localStorage.setItem(
            "access",
            response.data.access
        );

        localStorage.setItem(
            "refresh",
            response.data.refresh
        );

        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        setUser(response.data.user);

        return response.data.user;

    };

    const logout = async () => {

        const refresh = localStorage.getItem("refresh");

        try {

            if (refresh) {

                await authService.logout(refresh);

            }

        }

        catch (error) {

            console.log(error);

        }

        localStorage.removeItem("access");

        localStorage.removeItem("refresh");

        localStorage.removeItem("user");

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                login,

                logout,

                isAuthenticated: !!user

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}