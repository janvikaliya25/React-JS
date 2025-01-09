
import React, { useState } from "react";
import "./Logsign.css";
import Swal from "sweetalert2";

function Logsing() {
    const [state, setState] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [arr, setArr] = useState([]);
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");

 
    const handleSignup = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required for signup.",
                icon: "error",
            });
            return;
        }

        const existingUser = arr.find((user) => user.email === email);
        if (existingUser) {
            Swal.fire({
                title: "Error!",
                text: "Email already registered. Please use a different email.",
                icon: "warning",
            });
            return;
        }

        const obj = { username, email, password };
        setArr([...arr, obj]);

        Swal.fire({
            title: "Success!",
            text: "Signup successful!",
            icon: "success",
        });

        setUsername("");
        setEmail("");
        setPassword("");
        setState(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!logEmail || !logPassword) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required for login.",
                icon: "error",
            });
            return;
        }

        const user = arr.find(
            (user) => user.email === logEmail && user.password === logPassword
        );

        if (user) {
            Swal.fire({
                title: "Welcome!",
                text: "You have logged in successfully.",
                icon: "success",
            });
        } else if(e.email!=logEmail) {
            Swal.fire({
                title: "Error!",
                text: "Invalid email. Please try again.",
                icon: "error",
            });
        }
        else if(e.password!=logPassword) {
            Swal.fire({
                title: "Error!",
                text: "Invalid password. Please try again.",
                icon: "error",
            });
        }

        setLogEmail("");
        setLogPassword("");
    };

    return (
        <div id="main" className="w-50 m-auto mt-5">
            <h1 className="text-center">Login/Signup</h1>
            <div id="form">
                {state ? (
                    <div id="login" className="mt-5 p-3">
                        <h1 className="text-center">Login Form</h1>
                        <div className="p-5 w-75 m-auto mt-3">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setLogEmail(e.target.value)}
                                    value={logEmail}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setLogPassword(e.target.value)}
                                    value={logPassword}
                                    className="form-control"
                                />
                                <br />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleLogin}
                                >
                                    Submit
                                </button>
                                <br />
                                <br />
                            </form>
                            <hr />
                            <p
                                className="text-center"
                                onClick={() => setState(false)}
                            >
                                New to Flipkart? Create an account
                            </p>
                        </div>
                    </div>
                ) : (
                    <div id="signup" className="mt-5">
                        <h1 className="text-center mt-5">Signup Form</h1>
                        <div className="p-5 w-75 m-auto mt-3">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="form-control"
                                />
                                <br />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleSignup}
                                >
                                    Submit
                                </button>
                                <br />
                                <br />
                            </form>
                            <hr />
                            <p
                                className="text-center"
                                onClick={() => setState(true)}
                            >
                                Existing User? Log in
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Logsing;
