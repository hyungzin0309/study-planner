import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import qs from "qs";
import api from "../../components/api";

export function SignupForm() {
    const [loginId, setLoginId] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        api.post("/api/user/register", qs.stringify({
            loginId: loginId,
            email: email,
            password: password,
            username: username
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                navigate('/login')
            })
            .catch(error => {
                console.error(error);
            });
    };

    const onClickLogin = () => {
        navigate('/login');
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <input
                className="form-input"
                type="text"
                placeholder="Login ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
            />
            <input
                className="form-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-button" onClick={handleSignup}>Sign Up</button>
            <button className="form-button" onClick={onClickLogin}>Login</button>
        </div>
    );
}

export default SignupForm;