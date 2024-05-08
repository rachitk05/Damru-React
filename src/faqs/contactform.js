import React, { useState } from 'react';
import "../styles/faqs.css"

const ContactForm = () => {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement actual post logic here
    setMessage('Sending...');
    // Simulate async operation
    setTimeout(() => {
      setMessage('Message sent successfully!');
      setForm({ Name: '', Email: '', Message: '' });
      setTimeout(() => setMessage(''), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <h1 class="sub-title">Contact Us</h1>
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <p><i className="fas fa-paper-plane"></i> fest@rishihood.edu.in</p>
            <p><i className="fas fa-phone-square-alt"></i> +91 9811336095</p>
            <a href="/" download className="btn btn2">Download Brochure</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required value={form.Name} onChange={handleChange} />
              <input type="email" name="Email" placeholder="Your Email" required value={form.Email} onChange={handleChange} />
              <textarea name="Message" rows="6" placeholder="Your Message" value={form.Message} onChange={handleChange}></textarea>
              <button type="submit" className="btn btn3">SUBMIT</button>
            </form>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactForm;
