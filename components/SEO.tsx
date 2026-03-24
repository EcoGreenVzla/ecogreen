import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  schemas?: any[];
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Ingeniería Especializada", 
  description = "Empresa número 1 en muros de contención, control de erosión y estabilización de taludes en Venezuela.", 
  canonicalUrl = 'https://tumuro.com',
  keywords = "Muros, Muros de Contención, Muros de Gavión, Control de Erosión, Estabilización de Taludes, Protección de Riberas, Muros de Concreto Armado, Pantallas Atirantadas, Micropilotes, Taludes, Sistemas de Drenajes, Proyectos, Construcción, Muros Ecologicos",
  schemas = []
}) => {
  
  // Schema por defecto solo si no se envía ninguno específico
  const defaultStructuredData = {
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

  // Determinar qué schemas renderizar
  const schemasToRender = schemas.length > 0 ? schemas : [defaultStructuredData];

  return (
    <Helmet>
      <title>{`${title} | EcoGreen`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Etiquetas Open Graph (Mejora cómo se comparte en WhatsApp y Redes, y sirve para AI Search) */}
      <meta property="og:title" content={`${title} | EcoGreen`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="EcoGreen Ingeniería" />

      <link rel="canonical" href={canonicalUrl} />
      
      {/* Mapeo dinámico de Schemas para SEO Técnico y de IA */}
      {schemasToRender.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
