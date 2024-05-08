import React from 'react';
import "../styles/events.css"

function EventCard({ event }) {
    return (
        <div className="card">
            <div className="lines"></div>
            <div className="imgbox">
                <img src={event.image} alt="" />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <a href={event.link}>Explore</a>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
