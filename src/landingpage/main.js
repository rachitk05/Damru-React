import React, { useEffect, useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import Mountains from './mountains';
import Slideshow from './slideshow';
import AboutUs from './aboutus';
import ContactUs from './contactus';
import Footer from './footer';
import SocialIcons from './socialicons';

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3100); // simulate loading time
  }, []);

    return (
      !isLoaded &&  (<div>
            <Header />
            <Navbar />
            <Mountains />
            <Slideshow />
            <AboutUs />
            <ContactUs />
            <Footer />
            <SocialIcons />
        </div>)
    );
}

export default Main;
