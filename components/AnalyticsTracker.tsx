import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// 1. Inicializamos GA4 con TU ID REAL
ReactGA.initialize("G-BWR8HT54CS");

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // 2. Cada vez que cambia la ruta (location), le avisa a Google
    ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search,
        title: document.title
    });
  }, [location]);

  return null; // Este componente es invisible en tu web
};

export default AnalyticsTracker;