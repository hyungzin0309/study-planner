import React from 'react'
import LoginForm from './pages/login/Login'
import SignUpForm from './pages/login/SignUp'
import Main from './pages/Main'
import CreateTicket from './pages/ticket/CreateTicket'
import Tickets from './pages/ticket/Tickets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import CommonLayout from "./pages/common/CommonLayout"
import CreatePlan from "./pages/plan/CreatePlan";
import Plans from "./pages/plan/Plans";
import NoMatchPage from "./pages/error/NoMatchPage";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

    return (
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/" element={<PrivateRoute><CommonLayout><Main /></CommonLayout></PrivateRoute>} />
                        <Route path="/ticket/create/:planId" element={<PrivateRoute><CommonLayout><CreateTicket/></CommonLayout></PrivateRoute>} />
                        <Route path="/tickets/:planId" element={<PrivateRoute><CommonLayout><Tickets/></CommonLayout></PrivateRoute>} />
                        <Route path="/plan/create" element={<PrivateRoute><CommonLayout><CreatePlan/></CommonLayout></PrivateRoute>} />
                        <Route path="/plan" element={<PrivateRoute><CommonLayout><Plans/></CommonLayout></PrivateRoute>} />
                        <Route path="*" element={<PrivateRoute><NoMatchPage/></PrivateRoute>}/>
                    </Routes>
                </Router>
    );
}

export default App;