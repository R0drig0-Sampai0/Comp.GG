import './SignUpForm.css'
import NavBar from './NavBar';
import Footer from "./Footer";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* API */
import { useState } from "react";
import { useEffect } from "react";

function SignUpForm() {
    const navigate = useNavigate();

    // State for user registration
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [userAdded, setUserAdded] = useState(false);

    // State for user login
    const [usedusername, setUsername] = useState("");
    const [usedpassword, setPassword] = useState("");
    const [usedlogin, setLogin] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState("");

    // State for updating username
    const [newUpdatedUsername, setNewUpdatedUsername] = useState("");

    // Fetch user data from API
    const fetchData = () => {
        Axios.get("https://sheetdb.io/api/v1/e5yzqf59suepx?sheet=User_Login")
            .then((res) => {
                setLogin(res.data);
            });
    };

    // Login handling
    const handleLogin = () => {
        if (!usedusername || !usedpassword) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Check if the username and password match with the ones in the API
        const user = usedlogin.find(
            (user) => user.Username === usedusername && user.Password === usedpassword
        );

        if (user) {
            // Successful login
            setAuthenticated(true);
            setLoginError("");
            console.log("User Logged In Successfully");
        } else {
            // Invalid User
            setAuthenticated(false);
            setLoginError("Wrong Credentials. Please try again");
        }
    };

    // Add a new user
    const addUser = () => {
        // Check if any of the required fields are empty
        if (!newUsername || !newEmail || !newPassword) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Send a POST request to add a new user
        fetch("https://sheetdb.io/api/v1/e5yzqf59suepx?sheet=User_Login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        Username: newUsername,
                        Password: newPassword,
                        Email: newEmail
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                fetchData();
                setUserAdded(true);
            })
    }

    // Remove a user
    const removeUser = () => {
        if (usedusername) {
            // Send a DELETE request to remove a user
            fetch(
                `https://sheetdb.io/api/v1/e5yzqf59suepx/Username/${usedusername}?sheet=User_Login`,
                {
                    method: "DELETE",
                    headers: {
                        'Accept': "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    fetchData();
                    navigate('/');
                })
                .catch((error) => {
                    console.error("Error deleting user:", error);
                });
        }
    };

    // Update username
    const updateUsername = () => {
        fetch(
            `https://sheetdb.io/api/v1/e5yzqf59suepx/Username/${usedusername}?sheet=User_Login`,
            {
                method: "PATCH",
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        'Username': newUpdatedUsername
                    }
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                fetchData();
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            {userAdded ? (
                <>
                    <div id="navbar-container">
                        <NavBar />
                    </div>

                    {authenticated ? (
                        <div id="UserDashboard">

                            <div id="profile-pic-container">
                                <h1 id="dashboardtext">Hello {usedusername}</h1>
                                <div id="profile-pic"></div>
                            </div>
                            <div id="change-username-container">
                                <h1 id="dashboardtext">Change Username</h1>
                                <input id="change-username"
                                    type="text"
                                    placeholder="Username"
                                    value={newUpdatedUsername}
                                    onChange={(e) => setNewUpdatedUsername(e.target.value)}
                                />
                                <div id="submit-new-username" onClick={updateUsername}>
                                    Set new Username
                                </div>
                            </div>
                            <div id="delete-container">
                                <h1 id="dashboardtext">Delete Account</h1>
                                <div id="delete-btn" onClick={removeUser}>Delete</div>
                            </div>
                        </div>
                    ) : (

                        <div id="container">

                            <div id="header">
                                <h2 id="text">Log In</h2>
                                <div id="underline"></div>
                            </div>

                            <div id="inputs">
                                <div id="input">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={usedusername}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>

                                <div id="input">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={usedpassword}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {loginError && (
                                <div id="login-error">{loginError}</div>
                            )}
                            <div id="forgot-password">Forgot your password? <span>Click here!</span></div>
                            <div id="submit-container">
                                <div id="submit" onClick={handleLogin}>
                                    Log in
                                </div>
                            </div>
                        </div>
                    )}

                    <div id="footerSignUp-container">
                        <Footer />
                    </div>
                </>
            ) : (
                <>
                    <div id="navbar-container">
                        <NavBar />
                    </div>

                    <div id="container">
                        <div id="header">
                            <h2 id="text">Sign Up</h2>
                            <div id="underline"></div>
                        </div>

                        <div id="inputs">
                            <div id="input">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div id="input">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div id="input">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div id="submit-container">
                            <div id="submit" onClick={addUser}>
                                Sign Up
                            </div>
                        </div>
                        <div id="login" className="login-link">

                        </div>
                    </div>

                    <div id="footerSignUp-container">
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}

export default SignUpForm;