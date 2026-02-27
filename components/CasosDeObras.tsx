import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- CONFIGURACIÓN DE RUTAS ABSOLUTAS ---
// Usamos la URL base para asegurar que las imágenes carguen siempre correctamente.
const BASE_IMG_URL = "https://tumuro.com/images/";

const OBRAS_FIJAS = [
  {
    id: 100,
    href: "/100",
    image: `${BASE_IMG_URL}ECO100.PRINCIPAL.JPG`,
    title: "ESTABILIZACIÓN Y CONTROL DE EROSIÓN",
    description: "Estabilización de talud de 30 m de alto por 120 m de largo, ubicado en la Autopista Prados del Este, a la altura del mural de la Urb. Santa Rosa de Lima. Municipio Baruta, Estado Miranda. Venezuela, 2009."
  },
  {
    id: 150,
    href: "/150",
    image: `${BASE_IMG_URL}ECO150.PRINCIPAL.JPG`,
    title: "TERRAPLÉN SOBRE SUELO BLANDO",
    description: "Construcción de Terraplén de tierra reforzada de 6 m de alto por 600 m de largo, para incrementar la altura de la margen izquierda del Rio Castán, ubicado en Valera, Estado Trujillo. Venezuela, 2012."
  },
  {
    id: 200,
    href: "/200",
    image: `${BASE_IMG_URL}ECO200.PRINCIPAL.JPG`,
    title: "ESTABILIZACIÓN Y CONTROL DE EROSIÓN",
    description: "Estabilización y Control de Erosión del Cerro El Salto, talud de 40 m de alto por 120 m de largo, ubicado en la progresiva 69+107, de la Troncal 005 que une a Tinaquillo con San Carlos, Estado Cojedes. Venezuela, 2015."
  },
  {
    id: 215,
    href: "/215",
    image: `${BASE_IMG_URL}ECO215.PRINCIPAL.jpg`,
    title: "PROTECCIÓN DE RIBERA",
    description: "Protección contra la erosión de 130 m de ribera de la margen derecha del Rio La Guama, ubicado en la progresiva 69+107 de la Troncal 005, Tinaco, Estado Cojedes. Venezuela, 2015."
  }
];

const CasosDeObras: React.FC = () => {

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (TEMA DE LA SECCIÓN)
  // ============================================================
  const theme = {
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center' as const,
      marginBottom: '2rem', // <-- AJUSTE: Espacio entre el título "CASOS DE OBRAS" y las imágenes.
      letterSpacing: '0.1em',
      color: '#8d8d8d',
      textTransform: 'uppercase' as const,
    },
    cardTitle: {
      /* INSTRUCCIÓN: 
         - El primer valor (1em) es el margen superior (espacio con la imagen).
         - El tercer valor (1em) es el margen inferior (espacio con la descripción).
      */
      margin: '1em 0 0.5em 0', 
      fontFamily: 'GotchaLight, sans-serif',
      fontSize: '1.2em',
      letterSpacing: '0px',
      color: '#686767',
      textAlign: 'center' as const,
      textTransform: 'uppercase' as const,
      lineHeight: '1.2',
    },
    cardDescription: {
      /* INSTRUCCIÓN:
         - El tercer valor (1.25em) controla el espacio debajo de la descripción.
      */
      margin: '0em 0 0em 0',
      fontFamily: 'GotchaLight, sans-serif',
      fontSize: '0.8em',
      lineHeight: '1.5em',
      letterSpacing: '0px',
      color: '#555555',
      textAlign: 'center' as const,
    },
    button: {
      backgroundColor: '#0E306F',
      color: '#FFFFFF',
      fontSize: '12px',
      letterSpacing: '1px',
      borderRadius: '30px',
      padding: '5px 30px',
      fontFamily: 'GotchaLight, sans-serif',
      textTransform: 'uppercase' as const,
      fontWeight: 'normal',
      margin: '0',
    }
  };

  return (
    <section id="main-wrapper" className="py-16 bg-white plans-background">
      <div id="main" className="container mx-auto px-4 md:px-8 lg:px-20">
        
        {/* TÍTULO PRINCIPAL */}
        <h2 style={theme.sectionTitle}>
          CASOS DE OBRAS
        </h2>

        {/* INSTRUCCIÓN DE ESPACIADO (GAP):
           - gap-x-12: Espacio horizontal entre columnas. Disminuye a gap-x-6 para juntarlas.
           - gap-y-16: Espacio vertical entre filas. Disminuye a gap-y-8 para acercarlas.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {OBRAS_FIJAS.map((obra) => (
            <motion.div 
              key={obra.id} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* IMAGEN: 'mb-2' añade un pequeño margen extra debajo de la foto */}
              <Link to={obra.href} className="block w-full overflow-hidden mb-2 group">
                <img 
                  src={obra.image} 
                  alt={obra.title} 
                  className="w-full h-[350px] object-cover" 
                />
              </Link>

              {/* TÍTULO DE LA OBRA */}
              <h3 style={theme.cardTitle}>
                {obra.title}
              </h3>

              {/* DESCRIPCIÓN DE LA OBRA */}
              <p style={theme.cardDescription}>
                {obra.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: 'mt-20' controla qué tan lejos queda el botón de las obras */}
        <footer className="mt-20 text-center">
          <div className="button-div">
            <Link 
              to="/casos-de-obras" 
              className="inline-block transition-colors hover:bg-[#4BA406]"
              style={theme.button}
            >
              VER MAS
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CasosDeObras;