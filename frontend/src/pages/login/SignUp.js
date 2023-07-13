import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        // 여기에 회원가입 로직을 추가하십시오.
        console.log(`Signing up with username: ${username}, email: ${email} and password: ${password}`);
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