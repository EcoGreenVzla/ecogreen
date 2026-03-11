import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Inicialización con tu ID real
ReactGA.initialize("G-BWR8HT54CS");

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Enviamos la vista de página cada vez que la ruta cambia
    ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search,
        title: document.title
    });
  }, [location]);

  return null; 
};

export default AnalyticsTracker;