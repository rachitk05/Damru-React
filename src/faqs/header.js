import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="logo damrulogo">
                <img src="https://damru.rishihood.edu.in/images/COLOUR_WITHOUTBCG%20(1).png" alt="Damru logo" />
            </div>
            <button className="nav-toggle">
                <span className="hamburger"></span>
            </button>
            <div className="smalllogo">
                <a href="#welcome-section" className="logolink">
                    <img src="https://damru.rishihood.edu.in/images/COLOUR_WITHOUTBCG%20(1).png" alt="Damru logo" className="smalldamrulogo" />
                </a>
            </div>
            <nav className="nav" id="navbar">
                <ul className="nav__list" id="navlinkitems">
                    <li className="nav__item" id="homeid"><Link to="/" className="nav__link">Home</Link></li>
                    {/* <li className="nav__item"><a href="https://rishihood.edu.in/" className="nav__link" id="aboutheader">About</a></li> */}
                    <li className="nav__item" id="homeid"><Link to="/events" className="nav__link">Events</Link></li>
                    <li className="nav__item" id="homeid"><Link to="/ca-portal" className="nav__link">CA Portal</Link></li>
                    <li className="nav__item" id="homeid"><Link to="/faqs" className="nav__link">FAQs</Link></li>
                    <li className="nav__item" id="homeid"><Link to="/contact-us" className="nav__link">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
