import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import CAPortal from './caportal/caportal';
import EventPage from './events/eventpage';
import FaqPage from "./faqs/faqPage";
import ContactusPage from './contactus/contactusPage';
import Home from './landingpage/home';

function RootComponent() {
  const router = useNavigate();
  useEffect(() => {
    router('/home');
  }, [router])
  return <></>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cap-portal/",
    element: <CAPortal/>
  },
  {
    path: "/events/",
    element: <EventPage /> 
  },
  {
    path: "/faqs/",
    element: <FaqPage />
  },
  {
    path: "/contact-us",
    element: <ContactusPage/>
  },
  {
    path: "/home",
    element: <Home/>
  }
]);

function App() {
  return <Home />
}

export default App;
