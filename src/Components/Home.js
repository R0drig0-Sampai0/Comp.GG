import React from 'react';
import NavBar from './NavBar';
import Boxes from './Boxes';
import './Home.css'
import Footer from './Footer';
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div id="navbar-container">
                <NavBar />
            </div>
            <div id="introduction">
                <h1 id="header1">
                    Take gaming to another level!
                </h1>
                <h2 id="header2">
                    Hello! In this website we showcase a variety of tournaments created by the comunity and you can participate on them
                    or even create your own events. So what are you waiting for? Gather your friends and start competing!
                    <br />
                    If you want to start competing create an account and head to our tournament secction. There you will find all the tournaments
                    for a lot a different games. Once you have chosen the one you want to participate you only have to 
                </h2>
            </div>
            <div id="boxes-container">
                <h1 id="featured-games">Featured Games</h1>
                <Boxes />
            </div>
            <div id="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default Home;