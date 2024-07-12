import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user') == null) {
            navigate("/login")
        }

    }, [navigate, children])
    return children;
}

export default ProtectedRoute
