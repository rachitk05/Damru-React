import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const nextSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 3);  // Assuming there are 3 slides
        };

        const interval = setInterval(nextSlide, 2000); // Change image every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            <div className="mySlides fade" style={{display: slideIndex === 0 ? 'block' : 'none'}}>
                <img src="https://images.firstpost.com/wp-content/uploads/2020/05/14.jpg" style={{width: '100%'}} alt="Slide 1"/>
            </div>
            <div className="mySlides fade" style={{display: slideIndex === 1 ? 'block' : 'none'}}>
                <img src="https://static.wixstatic.com/media/a0968f_3191e061e1154874a0b8ea97873c00c2~mv2.jpeg/v1/fill/w_1024,h_714,al_c,q_85/a0968f_3191e061e1154874a0b8ea97873c00c2~mv2.jpeg" style={{width: '100%'}} alt="Slide 2"/>
            </div>
            <div className="mySlides fade" style={{display: slideIndex === 2 ? 'block' : 'none'}}>
                <img src="https://i.ytimg.com/vi/kdhvoZRUMAs/maxresdefault.jpg" style={{width: '100%'}} alt="Slide 3"/>
            </div>
        </div>
    );
};

export default Slideshow;
