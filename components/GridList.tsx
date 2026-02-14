import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gridListData } from '../data/gridListData';

interface GridListProps {
  id: string; // El ID que usaremos para buscar en la data
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

  // Si no hay data para ese ID, no renderizamos nada (o podrías retornar un mensaje de error)
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
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
                  <h3 className="text-white text-base font-black uppercase tracking-tighter text-center leading-tight">
                    {/* Manejo de títulos con saltos de línea si es necesario, aunque en la data ya están planos */}
                    {item.title}
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