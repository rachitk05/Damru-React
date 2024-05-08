import React from 'react';
import Header from './header';
import TeamSection from './teamcard';
import Footer from './footer';
import "../styles/contactus.css"

const ContactusPage = () => {
    return (
        <div>
            <Header/>
            <TeamSection className="team-container" />
            <Footer />
        </div>
    );
}

export default ContactusPage;