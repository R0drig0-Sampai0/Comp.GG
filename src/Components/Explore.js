import React, { useEffect } from "react";
import './Explore.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Explore() {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return (
        <>

            <div id="navbar-container">
                <NavBar />
            </div>          
            
                <div id="news-container">
                
                <div className="box-main-news">
                        <h2>Main news 1</h2>
                    </div>


                    <div className="box-news">
                        <h2>News 1</h2>
                    </div>

                    <div className="box-news">
                        <h2>News 2</h2>
                    </div>

                    <div className="box-news">
                        <h2>News 3</h2>
                    </div>

                    

                </div>
                
                <div id="news-container">
                    
                
                    
                    <div className="box-news">
                        <h2>News 4</h2>
                    </div>

                    <div className="box-news">
                        <h2>News 5</h2>
                    </div>

                    <div className="box-news">
                        <h2>News 6</h2>
                    </div>

                    <div className="box-main-news">
                        <h2>Main news 2</h2>
                    </div>

                </div>
            


            <div id="footer-container">
            <Footer />
            </div>
        </>
    )
}

export default Explore;
