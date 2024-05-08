import React from 'react';
import '../styles/styles.css'; // Ensure styles are properly imported

const AboutUs = () => {
    return (
        <div className='sec'>
        <div id="portfolio" className="section-fluid-main">
            <div className="container">
                <h1 className="sub-title">More About Us</h1>
                <div className="section-row">
                    <div className="section-col">
                        <div className="section">
                            <div className="section-in">
                                <a href="https://rishihood.edu.in/schools-of-rishihood/">
                                    <img src="https://damru.rishihood.edu.in/images/School-of-Rishihood-Banner%20(1).png" alt="Schools of Rishihood"/>
                                </a>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>School and Departments</h2>
                        </div>
                    </div>
                    <div className="section-col">
                        <div className="section">
                            <div className="section-in">
                                <a href="club and society.html">
                                    <img src="https://damru.rishihood.edu.in/images/Gallery-banner-1%20(2).png" alt="Clubs and Societies"/>
                                </a>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Clubs and Societies</h2>
                        </div>
                    </div>
                    <div className="section-col">
                        <div className="section">
                            <div className="section-in">
                                <a href="https://rishihood.edu.in/gallery/">
                                    <img src="https://damru.rishihood.edu.in/images/6466360f89b1e1b97d4f837b_nsmain%20(1).png" alt="Gallery"/>
                                </a>
                            </div>
                        </div>
                        <div className="hover-text">
                            <h2>Gallery</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
