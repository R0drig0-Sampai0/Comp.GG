import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Tournaments.css'
import NavBar from './NavBar';
import Footer from './Footer'

function Tournaments() {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div id="navbar-container">
                <NavBar />
            </div>

            <div id="create-tournament-container">
                <div id="create-tournament">
                    <div id="create-tournament-btn">
                        <Link id="" to="/CreateEvent">Organize an Event</Link>
                    </div>
                    <button id="create-tournament-btn">
                        Find Events
                    </button>
                </div>
            </div>

            <div id="upcoming-tournaments-container">
                <h1>Upcoming Tournaments</h1>
                <div className="box-upcoming-tournaments">
                    <h2>Tournament 1</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Tournament 2</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Tournament 3</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Tournament 4</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Tournament 5</h2>
                </div>
            </div>
            
            <div id="live-tournaments-container">
                <h1>Live Tournaments</h1>

                <div className="box-live-tournaments">
                    <h2>Tournament 1</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Tournament 2</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Tournament 3</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Tournament 4</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Tournament 5</h2>
                </div>
            </div>

            <div id="finished-tournaments-container">
                <h1>Recently Finished</h1>

                <div className="box-finished-tournaments">
                    <h2>Tournament 1</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Tournament 2</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Tournament 3</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Tournament 4</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Tournament 5</h2>
                </div>
            </div>

            <div id="footer-container">
            <Footer />
            </div>
            
        </>
    )



}


export default Tournaments;