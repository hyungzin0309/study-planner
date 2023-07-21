import LoginPage from "./pages/login/Login";

function PrivateRoute({children}) {
    const user = JSON.parse(localStorage.getItem("plannerUser"));
    if (!user) {
        return <LoginPage/>;
    }
    return children;
}
export default PrivateRoute;