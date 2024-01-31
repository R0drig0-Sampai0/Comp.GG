import React, { useState } from "react";
import './Tournaments.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Tournaments() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTournaments, setFilteredTournaments] = useState([]);

    // Sample tournament data
    const tournaments = [
        { id: 1, name: "Tournament 1" },
        { id: 2, name: "Tournament 2" },
        { id: 3, name: "Tournament 3" },
        { id: 4, name: "Tournament 4" },
        { id: 5, name: "Tournament 5" }
    ];

    // Function to handle search query
const handleSearch = () => {
    // Filter tournaments based on search query
    const filtered = tournaments.filter(tournament =>
        tournament.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && !(/^\d/.test(searchQuery))
    );
    setFilteredTournaments(filtered);
};

    // Function to handle input change in search bar
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div id="navbar-container">
                <NavBar />
            </div>

            <div id="create-tournament-container">
                <div id="create-tournament">
                    <button id="create-tournament-btn">
                        <Link id="links" to="/CreateEvent">Organize an Event</Link>
                    </button>
                </div>
            
                <div id="search-container">
                    <input 
                        type="text"
                        id="searchInput" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={handleInputChange} 
                    />
                    <button id="searchButton" onClick={handleSearch}>Go</button>
                </div>
            </div>

            <div id="upcoming-tournaments-container">
                <h1>Upcoming Tournaments</h1>
                {filteredTournaments.length > 0 ? (
                    filteredTournaments.map(tournament => (
                        <div key={tournament.id} className="box-upcoming-tournaments">
                            <h2>{tournament.name}</h2>
                        </div>
                    ))
                ) : (
                    tournaments.map(tournament => (
                        <div key={tournament.id} className="box-upcoming-tournaments">
                            <h2>{tournament.name}</h2>
                        </div>
                    ))
                )}
                
                <div className="box-upcoming-tournaments">
                    <h2>Tournament 1</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Apex de merda</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Rocket é incrível</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Pavelski lover</h2>
                </div>

                <div className="box-upcoming-tournaments">
                    <h2>Subscription</h2>
                </div>
            </div>
            
            <div id="live-tournaments-container">
                <h1>Live Tournaments</h1>

                <div className="box-live-tournaments">
                    <h2>Antes assim do que assado</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Antigamente é que era</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>O Rodrigo é linde</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Rodrigo carrega-me</h2>
                </div>

                <div className="box-live-tournaments">
                    <h2>Estamos na merda</h2>
                </div>
            </div>

            <div id="finished-tournaments-container">
                <h1>Recently Finished</h1>

                <div className="box-finished-tournaments">
                    <h2>Tivesses vindo a tempo</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Já acabou seu boi</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Jantastes e não te inscreveste</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>A pé e uns de carro</h2>
                </div>

                <div className="box-finished-tournaments">
                    <h2>Tournament 5</h2>
                </div>
            </div>

            <div id="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default Tournaments;