import React from 'react'
import Login from './containers/Login'
import Main from './containers/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserProvider } from './UserContext';

function App() {
    return (
        <UserProvider> {/* UserProvider를 앱의 최상위에 위치시킵니다. */}
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;