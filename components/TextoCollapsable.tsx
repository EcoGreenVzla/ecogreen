import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextoData } from '../data/textosData';

interface Props {
  data: TextoData | undefined;
}

const TextoCollapsable: React.FC<Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          
          <div className="flex items-center mb-8">
            {data.iconSrc && <img src={data.iconSrc} alt={`Icono ${data.title}`} className="w-16 h-16 mr-6" />}
            <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">
              {data.title}
            </h2>
          </div>

          <div className="text-xl text-gray-700 leading-relaxed mb-6">
            {data.introContent}
          </div>

          {data.expandedContent && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 border-t border-gray-200 mt-4">
                    {data.expandedContent}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {data.expandedContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 bg-ecogreen-blue text-white font-bold text-sm uppercase px-6 py-3 rounded-full hover:bg-ecogreen-green transition-colors focus:outline-none"
            >
              {isExpanded ? 'Cerrar ▲' : 'Leer Mas ▼'}
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default TextoCollapsable;