import React, {useState, useContext} from 'react';
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import style from "./Form.css"
import api from "../../components/api";


    export function LoginForm() {
        const [inputId, setInputId] = useState('portal')
        const [inputPw, setInputPw] = useState('clovirsm123!')
        const navigate = useNavigate();

        // login 버튼 클릭 이벤트
        const onClickLogin = () => {
            api.post('/api/login', qs.stringify({
                loginId: inputId,
                password: inputPw
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(res => {
                    localStorage.setItem('plannerUser', JSON.stringify(res.data));
                    navigate('/')
                })
                .catch(error => {
                    console.error(error);
                });
        };

        const pressEnter = (event) => {
            console.log(1)
            if (event.key === 'Enter') {
                onClickLogin()
            }
        }


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
                    onKeyDown={pressEnter}
                />
                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={inputPw}
                    onChange={(e) => setInputPw(e.target.value)}
                    onKeyDown={pressEnter}
                />
                <button className="form-button" onClick={onClickLogin}>Login</button>
                <button className="form-button" onClick={onclickSignUp}>Sign Up</button>
            </div>
        )
    }

export default LoginForm;