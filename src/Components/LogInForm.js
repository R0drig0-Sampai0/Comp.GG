import './SignUpForm.css'
import NavBar from './NavBar';
import Footer from "./Footer";

/*    API    */
import { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';

function LogInForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState("");

    

    /*----------------------------------------------- LOG IN ------------------------------------------------------------------*/
    useEffect(() => {
        console.log("Component mounted");
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            console.log("Fetching data...");
            const response = await Axios.get("https://api.sheety.co/037d88aaecba761271a0507a7ef574e9/user/userLogin");
            console.log("Data fetched successfully:", response.data.userLogin);
            setLogin(response.data.userLogin);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleLogin = () => {
        console.log("Button was clicked")
        const user = login.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // Set authenticated to true if login is successful
            setAuthenticated(true);
            // Perform any other actions upon successful login
        } else {
            // Set loginError if login fails
            setLoginError("Invalid username or password");
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

            <div id="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default LogInForm;