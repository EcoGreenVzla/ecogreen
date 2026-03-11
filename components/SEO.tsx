import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl = 'https://tumuro.com'
}) => {
  
  // ESTO ES LO QUE LEEN LAS IA: Un esquema estructurado de tu empresa
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness", // Le dice a la IA tu rubro exacto
    "name": "EcoGreen",
    "url": "https://tumuro.com",
    "logo": "https://tumuro.com/images/ecogreen-logo.png",
    "description": "Empresa especializada en sistemas de muros de contención flexibles y rígidos, estabilización de taludes, obras hidráulicas y control de erosión ambiental.",
    "areaServed": "Venezuela", // O los países donde operen
    "sameAs": [
      // Aquí van los links de tus redes sociales
      "https://instagram.com/ecogreen",
      "https://linkedin.com/company/ecogreen"
    ]
  };

  return (
    <Helmet>
      <title>{title} | EcoGreen</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Script mágico para las Inteligencias Artificiales */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;