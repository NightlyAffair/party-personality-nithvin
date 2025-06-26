import {createContext, useEffect, useState} from "react";


const authContext = createContext(false);

//Checks if token is valid
const isTokenValid = (token) => {
    try {
        // Split JWT into parts
        const parts = token.split('.');
        if (parts.length !== 3) return false;

        // Decode payload (base64)
        const payload = JSON.parse(atob(parts[1]));

        // Check if token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp > currentTime;

    } catch (error) {
        console.log("Invalid JWT Token");
        return false;
    }
}

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(isTokenValid(sessionStorage.getItem("token")))
    })

    return (
        <AuthContextProvider value={isAuthenticated}>
            {children}
        </AuthContextProvider>
    )
}


