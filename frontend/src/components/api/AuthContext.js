import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginRequest from "./LoginRequest";
import signupRequest from "./SignupRequest";


const AuthContext = createContext(false);

//Custom hook
export const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {
        console.error("No auth context");
    }

    return context;
}

//Checks if token is valid
const isTokenValid = () => {
    try {
        const token = sessionStorage.getItem("token");
        if(!token) return false;
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
    const [user, setUser] = useState(null);

    useEffect(() => {
        setIsAuthenticated(isTokenValid(sessionStorage.getItem("token")))
    },[])

    const login = async (username, password) => {
        try {
            const {response, data} = await LoginRequest(username, password);
            setUser(data);
            setIsAuthenticated(isTokenValid());

            return response;
        } catch (error){
            throw new Error("Wrong username and password");
        }
    }

    const signUp = async (username, email, password) => {
        return await signupRequest(username, email, password);

    }

    const value = {
        isAuthenticated,
        user,
        login,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (Component) => {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate();

        const context = useContext(AuthContext);

        if (!context.isAuthenticated) {
            navigate("/login");
        }

        return <Component {...props} />;
    }
}

export default AuthContext;




