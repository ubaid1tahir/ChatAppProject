import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase-config";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>; // Show a loading indicator while checking authentication
    if (!user) return <Navigate to="/login" />; // Redirect to login if not authenticated

    return <>{children}</>;
};

export default ProtectedRoute;
