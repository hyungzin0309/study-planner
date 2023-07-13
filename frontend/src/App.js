import React from 'react'
import LoginForm from './pages/login/Login'
import SignUpForm from './pages/login/SignUp'
import Main from './pages/Main'
import CreateTicket from './pages/CreateTicket'
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
                        <Route path="/create-ticket" element={<PrivateRoute><CommonLayout><CreateTicket/></CommonLayout></PrivateRoute>} />
                    </Routes>
                </Router>
        </UserProvider>
    );
}

export default App;