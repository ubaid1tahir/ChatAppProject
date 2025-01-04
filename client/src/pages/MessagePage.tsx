import { signOut } from "firebase/auth";
import { auth } from "../services/firebase-config";

const MessagePage = () => {
    const handleLogout = async () => {
        await signOut(auth);
        alert("You have been logged out.");
    };

    return (
        <div>
            <h2>Welcome to the Message Page</h2>
            <p>This page is only accessible to logged-in users.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default MessagePage;
