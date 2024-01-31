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
                navigate('/LogIn')
            })
    }

    useEffect(() => {
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
                        Already have an account? Log in!
                    </Link>
                </div>
            </div>

            <div id="footerSignUp-container">
                <Footer />
            </div>
        </>
    )
}

export default SignUpForm;