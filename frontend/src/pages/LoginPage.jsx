import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../components/context/AuthContext";
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(AuthContext);

    useEffect(() => {
        if (context.isAuthenticated) {
            navigate("/homepage");
        }
    }, [context.isAuthenticated, navigate]);


    const toSignUp = () => {
        navigate("/signup");
    }

    const toHome = async (username, password) => {
        try {
             await context.login(username, password);
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <div className="login-page">
            <div className = "login-container">
                <h1>Sign in</h1>
                <form onSubmit= {(e) =>
                {
                    e.preventDefault();
                    toHome(username, password)
                }}>
                    <p>Username</p>
                    <input className = "LoginInput" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <p>Password</p>
                    <input className = "LoginInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type = "submit" >Login</button>
                </form>
            </div>
            <p>Need an account?</p>
            <button type="button" onClick={toSignUp}> Sign up</button>
        </div>
    );
}

export default LoginPage;