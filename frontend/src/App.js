import React from 'react'
import Login from './containers/Login'
import Main from './containers/Main'
import CreateTicket from './containers/CreateTicket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <UserProvider> {}
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
                    <Route path="/create-ticket" element={<PrivateRoute><CreateTicket/></PrivateRoute>} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;