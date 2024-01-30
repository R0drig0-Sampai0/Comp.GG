import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {

    return (
        <nav id="navbar">
            <div id="navbar-container">
                <div id="navbar-titles-container">
                    <Link to="/" id="navbar-title">
                        Comp.GG
                    </Link>
                    <h5 id="navbar-subtitle">Community Through Competition</h5>
                </div>
                <ul id="nav-links-container">
                    <li id="nav-item">
                        <Link to='/' id="nav-links">
                            Home
                        </Link>
                    </li>
                    <li id="nav-item">
                        <Link to='/Explore' id="nav-links">
                            Explore
                        </Link>
                    </li>
                    <li id="nav-item">
                        <Link to='/Tournaments' id="nav-links">
                            Tournaments
                        </Link>
                    </li>
                    <li id="nav-item">
                        <Link to='/SignUp' id="nav-links">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

