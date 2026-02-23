import { useState } from "react";
import "./Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword("");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="login-card w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-[#FF4500] mb-2">
                    Food Recipes
                </h1>

                <p className="text-center text-gray-500 mb-6">Login to your account</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FF4500] text-white py-2 rounded-md hover:bg-[#e03e00] transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <span className="text-[#FF4500] cursor-pointer">Sign up</span>
                </p>
            </div>
        </div>
    );
}

export default Login;