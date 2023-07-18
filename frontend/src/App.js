import React, {useEffect} from 'react'
import LoginForm from './pages/login/Login'
import SignUpForm from './pages/login/SignUp'
import Main from './pages/Main'
import CreateTicket from './pages/ticket/CreateTicket'
import Ticket from './pages/ticket/Ticket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from "./PrivateRoute";
import CommonLayout from "./pages/common/CommonLayout"
import CreatePlan from "./pages/plan/CreatePlan";
import Plan from "./pages/plan/Plan";
import { useLoadUser } from './components/loadUser';


function App() {

    const { user, loadUser } = useLoadUser();

    useEffect(() => {
        loadUser();
    }, []);
// 빈 배열을 넣어주면 컴포넌트가 처음 마운트 될 때만 실행됩니다.

    return (
        <UserProvider> {}
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/" element={<PrivateRoute><CommonLayout><Main /></CommonLayout></PrivateRoute>} />
                        <Route path="/ticket/create" element={<PrivateRoute><CommonLayout><CreateTicket/></CommonLayout></PrivateRoute>} />
                        <Route path="/ticket" element={<PrivateRoute><CommonLayout><Ticket/></CommonLayout></PrivateRoute>} />
                        <Route path="/plan/create" element={<PrivateRoute><CommonLayout><CreatePlan/></CommonLayout></PrivateRoute>} />
                        <Route path="/plan" element={<PrivateRoute><CommonLayout><Plan/></CommonLayout></PrivateRoute>} />
                    </Routes>
                </Router>
        </UserProvider>
    );
}

export default App;