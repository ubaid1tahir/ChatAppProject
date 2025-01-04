import { signOut } from "firebase/auth";
import { auth } from "../services/firebase-config";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface LayoutProps {
    header?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header }) => {
    const [user] = useAuthState(auth);
    const handleLogout = async () => {
        await signOut(auth);
        alert("You have been logged out.");
    };
    return (
        <div className="h-16 rounded-md bg-indigo-600 text-white flex items-center justify-between px-4">
            {header && (
                <div className="h-16 rounded-md bg-indigo-600 text-white flex items-center px-4">
                    {header}
                </div>
            )}

            {/* Logout Button */}
            {user && <button
                onClick={handleLogout}
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
                Logout
            </button>}
        </div>
    );
};

export default Layout;
