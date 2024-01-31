import './SignUpForm.css'
import NavBar from './NavBar';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


/*    API    */
import { useState } from "react";
import { useEffect } from "react";

function SignUpForm() {

    const navigate = useNavigate();

    // declares a state variable "newUsername" which will be used to create a new user account
    const [newUsername, setNewUsername] = useState("");
    // declares a state variable "newPassword" which will be used to create a new user account
    const [newPassword, setNewPassword] = useState("");
    // declares a state variable "newEmail" which will be used to create a new user account
    const [newEmail, setNewEmail] = useState("");
    // declares a state variable "authenticated" which will ckeck if the user has been added
    const [userAdded, setUserAdded] = useState(false);

    const [usedusername, setUsername] = useState("");
    const [usedpassword, setPassword] = useState("");
    const [usedlogin, setLogin] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState("");

    // fetches the data user data from the API (GET)
    const fetchData = () => {
        Axios.get("https://sheetdb.io/api/v1/e5yzqf59suepx?sheet=User_Login")
            .then((res) => {
                setLogin(res.data);
            }
            );
    };

    const handleLogin = () => {

        if (!usedusername || !usedpassword) {
            alert("Please fill in all the required fields.");
            return;
        }

        // checks if the username and password match with the ones in the API
        const user = usedlogin.find(
            (user) => user.Username === usedusername && user.Password === usedpassword
        );

        if (user) {
            // Successful login
            setAuthenticated(true);
            setLoginError("");
        } else {
            // Invalid User
            setAuthenticated(false);
            setLoginError("Wrong Credentials.");
        }
    };

    const addUser = () => {

        // Check if any of the required fields are empty
        if (!newUsername || !newEmail || !newPassword) {
            alert("Please fill in all the required fields.");
            return;
        }

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
                            <h1>Hello</h1>
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