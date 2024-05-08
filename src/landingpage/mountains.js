import React, { useEffect } from 'react';
import '../styles/styles.css';  // Assuming all styles are correctly placed under styles.css

const Mountains = () => {
    useEffect(() => {
        const handleScroll = () => {
            const stars = document.getElementById('stars');
            const moon = document.getElementById('moon');
            const mountains_behind = document.getElementById('mountains_behind');
            const text = document.getElementById('text');
            const btn = document.getElementById('btn');

            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            text.style.marginRight = value * 5 + 'px';
            text.style.marginTop = value * 0.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section style={{backgroundColor: "black"}}>
            <img src="https://damru.rishihood.edu.in/stars.png" id="stars" alt="Stars"/>
            <img src="https://damru.rishihood.edu.in/images/moon-overlay.png" id="moon" alt="Moon"/>
            <img src="https://damru.rishihood.edu.in/mountains_behind.png" id="mountains_behind" alt="Mountains Behind"/>
            <h2 id="text">Damru</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6vYDpiyrZuvC6jBrwR6Afj7uP3yO4vMRdBnal0pOUAfditA/viewform?usp=sf_link" id="btn">Explore</a>
            <img src="https://damru.rishihood.edu.in/mountains_front.png" id="mountains_front" alt="Mountains Front"/>
        </section>
    );
};

export default Mountains;
