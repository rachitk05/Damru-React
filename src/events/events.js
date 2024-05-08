import React from 'react';
import EventCard from './eventcard';
import "../styles/events.css"

function Events() {
    const eventDetails = [
        {
            image: 'https://damru.rishihood.edu.in/assets/Dj%20night.jpg',
            title: 'DJ Night',
            description: 'Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It\'s the perfect blend of music and celebration.',
            link: ''
        },
        {
            image: 'https://damru.rishihood.edu.in/images/Bgmi.jpg',
            title: 'BGMI Tournament',
            description: 'Damru\'s BGMI Tournament: Join the action-packed battlegrounds of BGMI in Damru\'s tournament. Showcasing skill, strategy, and fierce competition, it\'s the ultimate battleground for gaming enthusiasts.',
            link: 'https://unstop.com/competitions/damrus-bgmi-tournament-rishihood-university-haryana-876424'
        },
        {
            image:"https://damru.rishihood.edu.in/images/Event324381214Img.jpg",
            title : "Solo Western Dance",
            description: "Experience the thrill of Solo Western Dance Competition! Showcase your talent, style, and creativity on stage. Join us for a dynamic and expressive dance competition.",
            link: "https://unstop.com/competitions/solo-western-dance-competition-rishihood-university-haryana-880034"
        },
        {
            image:"https://damru.rishihood.edu.in/images/solodance.jpg",
            title : "Solo Classical Dance",
            description: "Engage in the enchanting world of Solo Classical Dance Competition. Express grace, tradition, and skill as a solo performer, captivating audiences with the timeless artistry of classical dance.",
            link: "https://unstop.com/competitions/solo-classical-dance-competition-damru-rishihood-university-haryana-879986"
        },
        {
            image:"https://damru.rishihood.edu.in/images/LONELY.png",
            title : "Solo Singing Competition",
            description: "Elevate your voice in our Solo Singing Competition! Showcase your talent, captivate the audience, and compete for the top spot in an evening filled with melodious performances.",
            link: "https://unstop.com/p/solo-singing-competition-damru-2024-rishihood-university-haryana-882128"
        },
        {
            image:"https://damru.rishihood.edu.in/images/duo.avif",
            title : "Duet Dance Competition",
            description: "Engage in the enchanting world of Solo Classical Dance Competition. Express grace, tradition, and skill as a solo performer, captivating audiences with the timeless artistry of classical dance.",
            link: "https://unstop.com/o/LluMQTG?lb=QSt7vxGc"
        },
        {
            image:"https://damru.rishihood.edu.in/images/Groupdance.png",
            title : "Group Dance Competition",
            description: "",
            link: ""
        },
        {
            image:"https://damru.rishihood.edu.in/images/101108-Luongo-eminem-lede_owldxs.jpeg",
            title : "Rap Battle",
            description: "Immerse in the rhythmic spectacle of our Group Dance Competition, where teams unite in choreographic brilliance. A fusion of talent, energy, and creativity, promising an electrifying and unforgettable performance.",
            link: "https://unstop.com/p/group-dance-competition-damru-rishihood-university-haryana-880101"
        },
        {
            image:"https://damru.rishihood.edu.in/assets/Classical%20Music%20Night.jpg",
            title : "Classical Music",
            description: "A rap battle is a dynamic verbal duel where artists showcase their lyrical prowess, creativity, and wit. It's a rhythmic exchange of words, often competitive and entertaining.",
            link: "https://unstop.com/p/rap-battle-competition-damru-2024-rishihood-university-haryana-883020"
        },
        {
            image:"https://damru.rishihood.edu.in/assets/Beyond%20Competitions:%20Live%20Music%20Extravaganza.jpeg",
            title : "🎤 Live Music Extravaganza! 🎉",
            description: "Apart from these exciting competitions, get ready for live performances from renowned artists and bands that will set the stage ablaze. It's an opportunity to witness musical brilliance at its best!",
            link: "#"
        },
        
       
    ];

    return (
        <div className="container">
            <h1 className="eventshead">ALL EVENTS<br/></h1>
            {eventDetails.map(event => (
                <EventCard key={event.title} event={event} />
            ))}
        </div>
    );
}

export default Events;
