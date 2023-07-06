import React from 'react'
import Login from './containers/Login'
import Main from './containers/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigate} from "react-router-dom";

function App () {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default App;