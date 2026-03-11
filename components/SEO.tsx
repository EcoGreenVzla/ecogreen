import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Ingeniería Especializada", 
  description = "Especialistas en muros de contención y control de erosión.", 
  canonicalUrl = 'https://tumuro.com'
}) => {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "EcoGreen",
    "url": "https://tumuro.com",
    "logo": "https://tumuro.com/ecogreen-logo.png",
    "description": description,
    "areaServed": "Venezuela",
    "sameAs": [
      "https://instagram.com/ecogreenvzla",
      "https://linkedin.com/company/ecogreen"
    ]
  };

  return (
    <Helmet>
      {/* CORRECCIÓN: Sin espacios dentro de la etiqueta title para evitar errores de Helmet */}
      <title>{`${title} | EcoGreen`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;