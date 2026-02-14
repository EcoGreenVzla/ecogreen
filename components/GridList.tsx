import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gridListData } from '../data/gridListData';

interface GridListProps {
  id: string; 
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20 } 
  },
};

const GridList: React.FC<GridListProps> = ({ id }) => {
  const data = gridListData[id];

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
              whileHover={{ scale: 1.03 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              // Quitamos h-64 fijo para que el box se adapte al contenido de imagen + texto
              className="group flex flex-col rounded-sm shadow-lg overflow-hidden bg-white border border-gray-100"
            >
              <Link to={item.href} className="flex flex-col h-full">
                
                {/* 1. CONTENEDOR DE IMAGEN: 
                    Definimos una altura (ej. h-70) para que todas las fotos sean uniformes.
                    Usamos object-cover para que la imagen ocupe todo su espacio sin deformarse.
                */}
                <div className="h-70 w-full overflow-hidden">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* 2. BLOQUE DE TEXTO INFERIOR:
                    - Eliminamos 'absolute', 'bottom-0', etc.
                    - flex-grow asegura que si hay textos de distintas longitudes, 
                      el bloque azul se estire para igualar las alturas en la misma fila.
                */}
                <div className="bg-ecogreen-blue px-4 py-4 flex-grow flex items-center justify-center">
                  <h3 className="font-gotcha text-[1.4em] tracking-[0px] m-0 text-white text-center leading-tight uppercase">
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