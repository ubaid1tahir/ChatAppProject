import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase-config";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError(""); // Reset error message
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User signed up successfully!");
        } catch (error: any) {
            console.error("Error signing up:", error.message);
            setError(error.message); // Set error message
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Signup;
