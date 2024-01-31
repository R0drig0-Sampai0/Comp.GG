import { Link } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'
import { AiOutlineUser } from "react-icons/ai";

function NavBar() {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

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
                    <li id="user" onClick={toggleDropdown}>
                        <AiOutlineUser id="user-ico" />
                        {dropdownVisible && (
                            <ul id="dropdown-menu">
                                <li>
                                    <Link to='/SignUp'>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

