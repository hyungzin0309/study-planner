import React from 'react'
import Login from './components/containers/Login'
import Main from './components/containers/Main'
import CreateTicket from './components/containers/CreateTicket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from "./PrivateRoute";
import CommonLayout from "./components/containers/common/CommonLayout"


function App() {
    return (
        <UserProvider> {}
            <CommonLayout>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
                        <Route path="/create-ticket" element={<PrivateRoute><CreateTicket/></PrivateRoute>} />
                    </Routes>
                </Router>
            </CommonLayout>
        </UserProvider>
    );
}

export default App;