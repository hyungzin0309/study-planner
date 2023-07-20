import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import LoginPage from "./pages/login/Login";

function PrivateRoute({children}) {
    console.log(localStorage.getItem("plannerUser"))
    const user = JSON.parse(localStorage.getItem("plannerUser"));
    if (!user) {
        return <LoginPage/>;
    }
    return children;
}
export default PrivateRoute;