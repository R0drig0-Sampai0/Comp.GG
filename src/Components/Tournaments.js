import React, { useState, useEffect } from "react";
import './Tournaments.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

function Tournaments() {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    const [tournaments, setTournaments] = useState([]);

    const sampleTournaments = [
        { id: 1, name: "Bearded Brawls: Winter Warzone", date: "Feb 15th, 2024", game:"Brawlhalla", type:"Online", imageUrl: "https://images.start.gg/images/tournament/529828/image-c128c766250e1e6f81e4b0306dd62283.png?ehk=tcFFVBlV6JpG8w4531ZNJ%2FMh35wydDTEjQUDwJHKjSU%3D&ehkOptimized=ltrkOG9EVJNpjBiVR2xIASSiDBr%2Bb6Hk10LpVY1VdJI%3D" },
        { id: 2, name: "Skypybara Tournament 1v1 - Spring Champ", date: "Feb 15th, 2024", game:"Brawlhalla", type:"Online", imageUrl: "https://c4.wallpaperflare.com/wallpaper/272/404/12/video-games-rocketleague-rocket-league-psyonix-wallpaper-preview.jpg" },
        { id: 3, name: "Brawlhalla KUMITE 2024 - WORLD QUALIFIER", game:"Brawlhalla", date: "Feb 15th, 2024", type:"Online", imageUrl: "https://i.pinimg.com/736x/5b/a5/e0/5ba5e0f820e304181eef2f6400fcbcfc.jpg" },
        { id: 4, name: "Midwest Esports Invitational", date: "Feb 15th, 2024", game:"Rainbow Six Siege", type:"Online", imageUrl: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7vncbpiVwhRPnDmANeG7vR/f73c62b016f72b1352eb87ef36496879/sixinvitational_960x540_318429.jpg" },
        { id: 5, name: "RLCS 2024 - North America Open Qualifier #1", date: "Feb 15th, 2024", game:"Rocket League", type:"Online", imageUrl: "https://i.pinimg.com/originals/e5/d5/8b/e5d58b9e30af7bf610f245a3390364e8.png" },
        { id: 6, name: "KOMBATKLUB: PROLEAGUE: PS4 (WorldChampionship)", date: "Feb 15th, 2024", game:"Mortal Kombat", type:"Online", imageUrl: "https://i.ytimg.com/vi/CUvTVVBZDEI/sddefault.jpg" },
        { id: 7, name: "Super smash Bros qualifiers 2024", date: "Feb 15th, 2024", game:"Super Smash Bros", type:"Online", imageUrl: "https://www.smashbros.com/assets_v2/img/top/hero04_en.jpg" },
        { id: 8, name: "2024 Pokémon UCS - Aeos Cup: Asia - Oceania", date: "Feb 15th, 2024", game:"Pokemon", type:"Online", imageUrl: "https://i.ytimg.com/vi/LQl9MyE4VL0/maxresdefault.jpg" },
        { id: 10, name: "Fan BCX 2023 - World Championship", date: "Feb 15th, 2024", game:"Brawlhalla", type:"Online", imageUrl: "https://esi.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MjAxOTMyNzI0ODk2ODAyMzEx/bcx_2023.jpg" },
        { id: 11, name: "Collision 2024: North America ", date: "Feb 15th, 2024", game:"Super Smash Bros", type:"Online", imageUrl: "https://images.start.gg/images/tournament/568148/image-9a7ace2ae9e60a156e9a9f5936c658e8-optimized.jpg?ehk=wh%2FB7jipQmkfcHvQ94gOd%2FHMxzq2MGP9hgS4U1QWwcI%3D&ehkOptimized=r58TVD9CvNP0BukkUHRUFuqZuikN4tw9DEi6z6haMZg%3D&quot" },
        { id: 12, name: "Flats's Community Clash (SEA)", date: "Feb 15th, 2024", game:"Overwatch 2", type:"Online", imageUrl: "https://yt3.googleusercontent.com/Nog9kZw1tUVlZb7V00f-36a0iA3XGE-sQBdYyHExFk1qyNFhBZkUz8zksZ_pKbMAHZPuZsamfw=s900-c-k-c0x00ffffff-no-rj" },
        { id: 13, name: "MK1 North American League - NA East Regional", date: "Feb 15th, 2024", type:"Online", game:"Mortal Kombat 1", imageUrl: "https://images.start.gg/images/tournament/611342/image-1f9ba7de8ba666aadb0df9fd8f90456a-optimized.jpg?ehk=k%2F7YKhzY6sUYOY10ispTfs1ETFmxk0iYrqvrKUqkhC8%3D&ehkOptimized=xxNWesQxVE3bQNdhT1DFmvpVOlohVG4EiZ2dCFI1Wuk%3D&quot" },
    ];

    // Simulação da chamada à API usando useEffect
    useEffect(() => {
        // Aqui você substituiria pela chamada real à sua API
        setTournaments(sampleTournaments);
    }, []);

    // Função para lidar com a busca
    const handleSearch = () => {
        // Filtrar torneios com base na consulta de pesquisa
        const filtered = tournaments.filter(tournament =>
            tournament.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && !(/^\d/.test(searchQuery))
        );
        setFilteredTournaments(filtered);
    };

    // Função para lidar com a mudança de entrada na barra de pesquisa
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
                            <img src={tournament.imageUrl} />
                            <p><CiCalendar />{tournament.date}</p>
                            <h3>{tournament.game}</h3>
                            <h3><IoLocationOutline />{tournament.type}</h3>
                            <button>Participate</button>
                        </div>
                    ))
                ) : (
                    tournaments.map(tournament => (
                        <div key={tournament.id} className="box-upcoming-tournaments">
                            <h2>{tournament.name}</h2>
                            <img src={tournament.imageUrl} />
                            <p><CiCalendar />{tournament.date}</p>
                            <h3>{tournament.game}</h3>
                            <h3><IoLocationOutline />{tournament.type}</h3>
                            <button>Participate</button>
                        </div>
                    ))
                )}
            </div>     

            <div id="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default Tournaments;