import './SignUpForm.css'
import NavBar from './NavBar';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

    /*----------------------------------------------- SIGN UP ------------------------------------------------------------------*/
    const addUser = () => {
        let body = {
            userLogin: {
                username: newUsername,
                email: newEmail,
                password: newPassword
            }
        };

        console.log("Request Body:", JSON.stringify(body));

        fetch("https://api.sheety.co/037d88aaecba761271a0507a7ef574e9/user/userLogin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then(json => {
                console.log("Response:", json);
                if (json.errors) {
                    console.error("Error adding user:", json.errors);
                } else {
                    console.log("User added successfully:", json.userLogin);
                    navigate('/');
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
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
                        />
                    </div>

                    <div id="input">
                        <input
                            type="email"
                            placeholder="Email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>

                    <div id="input">
                        <input
                            type="password"
                            placeholder="Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div id="submit-container">
                    <div id="submit" onClick={addUser}>
                        Sign Up
                    </div>
                </div>
                <div id="login" className="login-link">
                    <Link to='/LogIn' className="login-link-text">
                        Don't have an account yet? Log in!  
                    </Link>
                </div>
            </div>

            <div id="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default SignUpForm;