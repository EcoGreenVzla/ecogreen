
import React, { useState, useMemo, useEffect } from 'react';
import { casosDeObrasData } from '../data/casosDeObras';
import { CasoDeObra } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { motion, Variants } from 'framer-motion';

type FilterType = 'all' | CasoDeObra['type'];

const FilterButton: React.FC<{
    label: string;
    onClick: () => void;
    isActive: boolean;
}> = ({ label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-nav tracking-wider font-medium rounded-md transition-colors ${
            isActive
                ? 'bg-ecogreen-green text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
        }`}
    >
        {label}
    </button>
);

const megaMenuContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut'
    }
  },
  hidden: {}
};

const columnVariants: Variants = {
   visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
   hidden: (custom: number) => ({ opacity: 0, x: custom })
};


const MegaMenuCasos: React.FC = () => {
    const [filterType, setFilterType] = useState<FilterType>('all');
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredCasos = useMemo(() => {
        return casosDeObrasData.filter(caso => {
            const typeMatch = filterType === 'all' || caso.type === filterType;
            return typeMatch;
        });
    }, [filterType]);
    
    useEffect(() => {
        setCurrentIndex(0);
    }, [filteredCasos]);

    const ITEMS_PER_PAGE = 3;
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < filteredCasos.length - ITEMS_PER_PAGE;

    const handlePrev = () => {
        if (canGoPrev) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (canGoNext) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const types: FilterType[] = ['all', 'Talud', 'Terraplén', 'Ribera'];

    return (
        <motion.div 
            className="bg-ecogreen-blue shadow-lg text-white w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={megaMenuContainerVariants}
        >
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Filters Section */}
                    <motion.div 
                        className="lg:col-span-1 border-r border-white/20 pr-6"
                        custom={-40}
                        variants={columnVariants}
                    >
                        <h3 className="font-bold text-white mb-4 uppercase text-nav tracking-wider">Filtrar Obras</h3>
                        <div>
                            <h4 className="font-semibold text-sm mb-2">Tipo de Obra</h4>
                            <div className="flex flex-wrap gap-2">
                                {types.map(t => <FilterButton key={t} label={t==='all' ? 'Todos' : t} onClick={() => setFilterType(t)} isActive={filterType === t} />)}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        className="lg:col-span-3"
                        custom={40}
                        variants={columnVariants}
                    >
                        <h3 className="font-bold text-white mb-4 uppercase text-nav tracking-wider">Casos de Obras Destacados</h3>
                         {filteredCasos.length > 0 ? (
                            <div className="relative">
                                <div className="flex items-center justify-center space-x-4">
                                    {filteredCasos.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map((caso) => (
                                        <div key={caso.id} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden w-1/3">
                                            <img src={caso.thumbnail} alt={caso.title} className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                                            <div className="p-3">
                                                <p className="text-xs text-gray-300">#{caso.id}</p>
                                                <h5 className="font-semibold text-sm truncate text-white">{caso.title}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {filteredCasos.length > ITEMS_PER_PAGE && (
                                    <>
                                        <button
                                            onClick={handlePrev}
                                            disabled={!canGoPrev}
                                            className="absolute top-1/2 -translate-y-1/2 -left-3 p-1 bg-white/20 rounded-full shadow-lg hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                            aria-label="Previous case"
                                        >
                                            <ChevronLeftIcon className="h-6 w-6 text-white" />
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            disabled={!canGoNext}
                                            className="absolute top-1/2 -translate-y-1/2 -right-3 p-1 bg-white/20 rounded-full shadow-lg hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                            aria-label="Next case"
                                        >
                                            <ChevronRightIcon className="h-6 w-6 text-white" />
                                        </button>
                                    </>
                                )}
                            </div>
                        ) : (
                             <div className="flex items-center justify-center h-44">
                                <p className="text-center text-gray-300">No se encontraron obras con los filtros seleccionados.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default MegaMenuCasos;