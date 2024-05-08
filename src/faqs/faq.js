import React, { useState } from 'react';
import "../styles/faqs.css"

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { question: "What is Damru?", answer: "Damru is an annual cultural and technical fest organized by Rishihood University." },
        { question: "When is Damru?", answer: "The fest will be held from 2nd March to 5th March 2024." },
        { question: "Where is Damru?", answer: "Damru is held at Rishihood University's campus in Sonipat, Haryana, India." },
        { question: "Who can participate in Damru?", answer: "Damru is open to all students, both from within and outside of Rishihood University." },
        { question: "What are the events in Damru?", answer: "Damru has a wide range of events, including technical, cultural, and sports events." },
        { question: "How many participants attend Damru?", answer: "Damru typically attracts a footfall of over 45,000 participants from across the country." },
        { question: "How can I register for Damru?", answer: "You can register for Damru by clicking here." },
        { question: "How can I contact Damru?", answer: "You can contact the Organizing team of Damru by clicking here." },
        { question: "How can I get updates about Damru?", answer: "You can get updates about Damru here on its official website and by following us on our social media handles." },
    ];

    return (
        <section>
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="accordion">
                    <div className={`contentBx ${index === activeIndex ? 'active' : ''}`} onClick={() => toggle(index)}>
                        <div className="label">{faq.question}</div>
                        <div className="content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default FAQs;
