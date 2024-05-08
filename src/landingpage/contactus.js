import React, { useState } from 'react';
import '../styles/styles.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('Sending...');

        try {
            // Example POST method implementation:
            const response = await fetch('https://your-backend-url.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Network response was not ok.');
            setMessage('Message sent successfully');
        } catch (error) {
            console.error('Error!', error);
            setMessage('Failed to send message');
        }

        setFormData({
            Name: '',
            Email: '',
            Message: ''
        });
    };

    return (
        <div id="contact" className="container">
            <h1 className="sub-title">Contact Us</h1>
            <div className="row">
                <div className="contact-left">
                    <p><i className="fas fa-paper-plane"></i> fest@rishihood.edu.in</p>
                    <p><i className="fas fa-phone-square-alt"></i> +91 9811336095</p>
                    <a href="/" download className="btn btn2">Download Brochure</a>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Your Name" required value={formData.Name} onChange={handleChange} />
                        <input type="email" name="Email" placeholder="Your Email" required value={formData.Email} onChange={handleChange} />
                        <textarea name="Message" rows="6" placeholder="Your Message" required value={formData.Message} onChange={handleChange}></textarea>
                        <button type="submit" className="btn btn3">SUBMIT</button>
                    </form>
                    <span id="msg">{message}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
