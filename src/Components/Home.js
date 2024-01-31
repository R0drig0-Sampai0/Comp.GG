import React from 'react';
import NavBar from './NavBar';

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
                <h1 id="title">
                    Take gaming to another level!
                </h1>
                <div id="text-container">
                    <div id="text1-container">
                        <h2 id="text1">
                            Hello! In this website we showcase a variety of tournaments created by the comunity and you can participate on them
                            or even create your own events. So what are you waiting for? Gather your friends and start competing!
                        </h2>
                    </div>
                    <div id="text2-container">
                        <h2 id="text2">
                            If you want to start competing go to our tournament section. There you will find all the tournaments
                            for a lot a different games. Once you have chosen the one you want to participate you only have to register for it.
                        </h2>
                    </div>
                </div>
                <div id="text3-container">
                    <h2 id="text3">
                        To participate and create events you need an account so go ahead and sign up or, if you already have an
                        account log in and get ready to game!
                    </h2>
                </div>
            </div>
            <div id="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default Home;