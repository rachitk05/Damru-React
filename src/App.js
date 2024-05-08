import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CAPortal from './caportal/caportal';
import EventPage from './events/eventpage';
import FaqPage from "./faqs/faqPage";
import ContactusPage from './contactus/contactusPage';
import Home from './landingpage/home';

function RootComponent() {
  useEffect(() => {
    // Redirect to '/home' when the component mounts
    window.location.href = "/home";
  }, []);

  return null; // Since this is just for redirecting, we don't need to render anything
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootComponent />} /> {/* Redirect from '/' to '/home' */}
        <Route path="/home" element={<Home />} />
        <Route path="/cap-portal" element={<CAPortal />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
        <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect all unknown routes to '/home' */}
      </Routes>
    </Router>
  );
}

export default App;
