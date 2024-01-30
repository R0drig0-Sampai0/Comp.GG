import React from "react";
import './Footer.css';
import { FaInstagram, FaDiscord, FaTwitch } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <section className="footer-content">

                    <div className="social-media-container">
                        <div className="social-link">
                            <FaInstagram className="icon-instagram" />
                        </div>


                        <div className="social-link">
                            <FaDiscord className="icon-discord" />
                        </div>


                        <div className="social-link">
                            <FaTwitch className="icon-twitch" />
                        </div>
                    </div>

                    <div>
                        <h4 className="copyright">©2024 Todos os direitos reservados.</h4>
                    </div>

                    <div className="footer-links">
                        <a className="footer-link">Privacidade</a><span className="dot">&#8226;</span>
                        <a className="footer-link">Termos</a><span className="dot">&#8226;</span>
                        <a className="footer-link">Apoiar</a><span className="dot">&#8226;</span>
                        <a className="footer-link">Cookies Settings</a>
                    </div>

                </section>
            </footer>
        </>
    )
};
export default Footer;