import {useContext, useState} from "react";
import AuthContext from "../components/api/AuthContext";
import {useNavigate} from "react-router-dom";

function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await context.signUp(username, email, password);
            // If we reach here, signup was successful
            alert("Sign up successfully");
            navigate("/login");
        } catch (error) {
            alert("Sign up failed, Username/Email already exists!");
        }
    }

    return (
        <div className="signup-page">
            <h1>Create a new account</h1>
            <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
                <p>Password</p>
                <input name="password" type="text" onChange={(e) => setPassword(e.target.value)} />
                <p>Email</p>
                <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignupPage;