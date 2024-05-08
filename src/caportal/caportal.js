import React from 'react';
import Header from './header';
import MainSection from './main';
import AboutSection from './aboutsection';
import BenefitsSection from './benefits';
import ResponsibilitySection from './responsisblity';
import Footer from './footer';
import "../styles/caportal.css"

function CAPortal() {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutSection />
      <BenefitsSection />
      <ResponsibilitySection />
      <Footer />
    </div>
  );
}

export default CAPortal;
