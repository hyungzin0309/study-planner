import React, {useState, useContext} from 'react';
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../UserContext";
import style from "./Form.css"
import axios from "axios";


    export function LoginForm() {
     const { login } = useContext(UserContext);
        const [inputId, setInputId] = useState('')
        const [inputPw, setInputPw] = useState('')
        const navigate = useNavigate();

        // login 버튼 클릭 이벤트
        const onClickLogin = () => {
            axios.post('http://localhost:8080/api/login', qs.stringify({
                loginId: 'portal',
                password: 'clovirsm123!'
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(res => {
                    localStorage.setItem('plannerUser', JSON.stringify(res.data));
                    login(res.data);
                    navigate('/')
                })
                .catch(error => {
                    console.error(error);
                });
        };

        const onclickSignUp = ()=>{
            navigate('/signup');
        }

        return (
            <div className="form-container">
                <h2>Login</h2>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    value={inputId}
                    onChange={(e) => setInputId(e.target.value)}
                />
                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={inputPw}
                    onChange={(e) => setInputPw(e.target.value)}
                />
                <button className="form-button" onClick={onClickLogin}>Login</button>
                <button className="form-button" onClick={onclickSignUp}>Sign Up</button>
            </div>
        )
    }

export default LoginForm;