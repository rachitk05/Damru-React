
import React from 'react';
import Header from './header';
import MainSection from './main';
import Events from './events';
import Footer from './footer';
import "../styles/events.css"

function EventPage() {
    return (
        <div>
            <Header />
            <MainSection />
            <Events />
            <Footer />
        </div>
    );
}

export default EventPage;
