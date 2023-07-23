import React from "react";

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

    return (
        <div style={pageStyle}>
            <p>404 페이지를 찾을 수 없습니다.</p>
        </div>
    );
}

export default NoMatchPage;