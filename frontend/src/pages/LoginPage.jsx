import { useNavigate } from "react-router-dom";
import {useState} from "react";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const toSignUp = () => {
        navigate("/signup");
    }

    const toHome = (username, password) => {
        try {
            const response = LoginRequest(username, password);
            if(response.ok) {

            }
        } catch (error) {
            console.error('API fetch error:', error);
        }
    }

    return (
        <div className="LoginPage">
            <div className = "LoginContainer">
                <h1>Sign in</h1>
                <form onSubmit={toHome(username, password)}>
                    <p1>Username</p1>
                    <input className = "LoginInput" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <p2>Password</p2>
                    <input className = "LoginInput" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type = "submit" >Login</button>
                </form>
            </div>
            <p1>Need an account?</p1>
            <button type="button" onClick={toSignUp}> Sign up</button>
        </div>
    );
}

export default LoginPage;