
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useLocation } from "react-router-dom";

function WithAuthenticationCheck(Component, props) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (!user && location.pathname !== '/login') {
        navigate('/login');
        return null;
    }

    return <Component {...props} />;
}
export default WithAuthenticationCheck;