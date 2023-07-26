import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

function Main() {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/plan');
    }, [navigate]);

}
export default Main;