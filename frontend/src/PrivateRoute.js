import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import LoginPage from "./components/containers/Login";

function PrivateRoute({children}) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (!user) {
        return <LoginPage/>;
        // navigate('/login')
        console.log('navigate')
    }
    return children;
}
export default PrivateRoute;