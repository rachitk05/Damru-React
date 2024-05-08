import React from 'react';
import Header from './header';
import FAQs from './faq'; 
import ContactForm from './contactform';
import Footer from './footer';
import "../styles/faqs.css"
const FaqPage = () => {
  return (
    <div>
      <Header />
      <FAQs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default FaqPage;