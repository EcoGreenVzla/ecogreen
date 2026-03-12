
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EngineeringBusiness",
  "name": "EcoGreen Ingeniería",
  "url": "https://tumuro.com",
  "logo": "https://media.tumuro.com/media/icons/favicon.png",
  "description": "Expertos en sistemas de contención sostenibles, control de erosión y estabilización de taludes en Venezuela.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "VE",
    "addressLocality": "Caracas" 
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "ventas y soporte técnico",
    "url": "https://tumuro.com/contactanos"
  },
  "sameAs": [
    "https://www.facebook.com/ecogreen",
    "https://x.com/ecogreen",
    "https://www.instagram.com/ecogreen"
  ]
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
