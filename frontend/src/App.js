import React from 'react'
import LoginForm from './pages/login/Login'
import SignUpForm from './pages/login/SignUp'
import Main from './pages/Main'
import CreateTicket from './pages/ticket/CreateTicket'
import Ticket from './pages/ticket/Ticket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from "./PrivateRoute";
import CommonLayout from "./pages/common/CommonLayout"


function App() {
    return (
        <UserProvider> {}
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/" element={<PrivateRoute><CommonLayout><Main /></CommonLayout></PrivateRoute>} />
                        <Route path="/ticket/create" element={<PrivateRoute><CommonLayout><CreateTicket/></CommonLayout></PrivateRoute>} />
                        <Route path="/ticket" element={<PrivateRoute><CommonLayout><Ticket/></CommonLayout></PrivateRoute>} />
                    </Routes>
                </Router>
        </UserProvider>
    );
}

export default App;