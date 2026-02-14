import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gridListData } from '../data/gridListData';

interface GridListProps {
  id: string; 
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const GridList: React.FC<GridListProps> = ({ id }) => {
  const data = gridListData[id];

  // Si no hay data para ese ID, no renderizamos nada
  if (!data) {
    console.warn(`GridList: No data found for ID "${id}"`);
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">
          {data.title}
        </h3>
        
        {/* Barra divisoria verde */}
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        
        {/* Grid de Tarjetas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.items.map((item, index) => (
            <motion.div 
              key={`${item.title}-${index}`} 
              variants={cardVariants} 
              className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-64 bg-white" 
              whileHover={{ y: -8 }}
            >
              <Link to={item.href} className="flex flex-col h-full">
                <div className="h-full overflow-hidden">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                {/* Contenedor del título (Footer de la tarjeta).
                   Mantenemos el fondo azul corporativo.
                */}
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue px-4 pb-2">
                  
                  {/* APLICACIÓN DE ESTILOS "Gotcha" SOLICITADOS:
                      
                      - font-gotcha:     Aplica la fuente 'GotchaLight' (configurada en Tailwind).
                      - text-[1.4em]:    Equivale a font-size: 1.4em.
                      - tracking-[1px]:  Equivale a letter-spacing: 1px.
                      - pt-[0.5em]:      Equivale a padding-top: 0.5em.
                      - m-0:             Equivale a margin: 0.
                      - leading-none:    Ajusta el interlineado para que no quede muy separado.
                      - text-white:      Para asegurar contraste sobre el fondo azul.
                  */}
                  <h3 className="font-gotcha text-[1.4em] tracking-[1px] pt-[0.5em] m-0 text-white text-center leading-none uppercase">
                    {/* dangerouslySetInnerHTML permite que funcionen los <br> en los títulos */}
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridList;