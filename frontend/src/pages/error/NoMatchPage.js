import React from "react";
import {useNavigate} from "react-router-dom";

function NoMatchPage() {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'skyblue', // 하늘색 배경
        color: 'white', // 텍스트 색상
        fontSize: '2em'
    };

    const navigate = useNavigate();

    const goToMain = ()=>{
        navigate("/")
    }

    return (
        <div style={pageStyle}>
            <p>404 페이지를 찾을 수 없습니다.</p>
            <span onClick={goToMain}> 메인 화면으로 </span>
        </div>
    );
}

export default NoMatchPage;