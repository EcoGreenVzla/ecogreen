import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TextoCollapsableProps {
  title: string;
  iconSrc?: string;
  introContent: React.ReactNode;      // El HTML que siempre se ve
  expandedContent?: React.ReactNode;  // El HTML oculto (Opcional)
}

const TextoCollapsable: React.FC<TextoCollapsableProps> = ({
  title,
  iconSrc,
  introContent,
  expandedContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          
          {/* 1. Encabezado Dinámico */}
          <div className="flex items-center mb-8">
            {iconSrc && <img src={iconSrc} alt={`Icono ${title}`} className="w-16 h-16 mr-6" />}
            <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">
              {title}
            </h2>
          </div>

          {/* 2. Contenido Principal (Siempre visible) */}
          {/* Aquí controlamos la apariencia global de los <p>, <ul>, etc. */}
          <div className="text-xl text-gray-700 leading-relaxed mb-6">
            {introContent}
          </div>

          {/* 3. Contenido Oculto (Acordeón Animado) */}
          {expandedContent && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 border-t border-gray-200 mt-4">
                    {expandedContent}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* 4. Botón Condicional (Solo se renderiza si hay expandedContent) */}
          {expandedContent && (
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