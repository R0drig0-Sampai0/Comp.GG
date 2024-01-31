import './SignUpForm.css'
import NavBar from './NavBar';
import Footer from "./Footer";
import UserDashboard from './UserDashboard';
import Axios from 'axios';

/*    API    */
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function LogInForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState([]);
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

    /*----------------------------------------------- LOG IN ------------------------------------------------------------------*/
    const handleLogin = () => {
        // checks if the username and password match with the ones in the API
        const user = login.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // Successful login
            setAuthenticated(true);
            setLoginError("");
            navigate('/UserDashboard')
        } else {
            // Invalid User
            setAuthenticated(false);
            setLoginError("Wrong Credentials.");
        }
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

            {authenticated ? (
                <div id="UserDashboard">
                    <UserDashboard />
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div id="input">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
    )
}

export default LogInForm;