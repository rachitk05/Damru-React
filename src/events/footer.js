import React from 'react';
import '../styles/footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // Import specific icons
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Socialicons from '../socialicons';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-logo">
                <img src="https://damru.rishihood.edu.in/images/BLACK.png" alt="Logo"/>
            </div>
            <div className="address">
                <h2>Contact</h2>
                <address>Rishihood University, Sonipat, 131021, Haryana, India.</address>
                <p>© 2024 All rights reserved.</p>
            </div>
            <div className='social'>
            <Socialicons/>
            </div>
        </footer>
    </>
    );
};

export default Footer;
