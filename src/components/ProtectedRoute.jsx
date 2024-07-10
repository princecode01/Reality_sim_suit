import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProtectedRoute({ userData, children }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (userData != null || localStorage.getItem('user') != null) {
            return children;
        }
        else {
            navigate("/login")
        }
    }, [navigate, userData, children])
}

export default ProtectedRoute
