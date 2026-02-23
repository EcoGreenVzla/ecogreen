import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Importamos la base de datos única de las obras
import { casosDeObrasPrincipalesData } from '../data/casosDeObrasPrincipales';
// Iconos de las flechas
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const MegaMenuCasos: React.FC = () => {
    // ESTADOS (La "memoria" del componente)
    // filterType: Guarda qué categoría está seleccionada (ej: 'Talud' o 'all')
    const [filterType, setFilterType] = useState<string>('all');
    // currentIndex: Guarda en qué posición está el carrusel de obras
    const [currentIndex, setCurrentIndex] = useState(0);

    // 1. GENERADOR DE BOTONES: Busca en la data qué tipos existen (Talud, Ribera, etc.) 
    // y crea una lista sin repetir nombres para los botones del filtro.
    const categories = useMemo(() => {
        const types = casosDeObrasPrincipalesData.map(obra => obra.type);
        return Array.from(new Set(types)); 
    }, []);

    // 2. FILTRO MÁGICO: Crea una nueva lista solo con las obras que coinciden 
    // con el botón que el usuario presionó.
    const filteredCasos = useMemo(() => {
        return casosDeObrasPrincipalesData.filter(caso => 
            filterType === 'all' || caso.type === filterType
        );
    }, [filterType]);

    // EFECTO: Si el usuario cambia de filtro, el carrusel vuelve al principio (posición 0).
    useEffect(() => setCurrentIndex(0), [filterType]);

    // CONFIGURACIÓN DEL CARRUSEL (Slider)
    const ITEMS_PER_PAGE = 3; // Cuántas obras se ven al mismo tiempo
    const canGoPrev = currentIndex > 0; // ¿Hay obras hacia la izquierda?
    const canGoNext = currentIndex < filteredCasos.length - ITEMS_PER_PAGE; // ¿Hay obras hacia la derecha?

    return (
        /* --- EL GRAN CONTENEDOR DEL MENÚ ---
           bg-ecogreen-blue: Color azul de fondo.
           shadow-2xl: Sombra muy grande para dar profundidad.
           border-t: Línea blanca muy fina en la parte superior.
        */
        <motion.div className="bg-ecogreen-blue shadow-2xl text-white w-full border-t border-white/10">
            <div className="container mx-auto p-8">
                {/* DIVISIÓN: 1 columna para filtros (izquierda) y 3 para las fotos (derecha) */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    
                    {/* --- PARTE IZQUIERDA: LOS BOTONES DE FILTRO --- */}
                    <div className="lg:col-span-1 border-r border-white/20 pr-6">
                        <h3 className="font-bold mb-6 uppercase text-[11pt] tracking-widest">Filtrar Proyectos</h3>
                        <div className="flex flex-wrap gap-2">
                            {/* Botón 'TODOS': Si está activo, se pone verde (bg-ecogreen-green) */}
                            <button 
                                onClick={() => setFilterType('all')}
                                className={`px-3 py-1.5 text-[9pt] font-bold rounded transition-colors ${filterType === 'all' ? 'bg-ecogreen-green-fall text-white' : 'bg-white/10 hover:bg-white/20'}`}
                            >
                                TODOS
                            </button>
                            {/* Generamos el resto de botones (Talud, Terraplén...) automáticamente */}
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    onClick={() => setFilterType(cat)}
                                    className={`px-3 py-1.5 text-[9pt] font-bold rounded uppercase transition-colors ${filterType === cat ? 'bg-ecogreen-green text-white' : 'bg-white/10 hover:bg-white/20'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- PARTE DERECHA: LAS TARJETAS DE LAS OBRAS --- */}
                    <div className="lg:col-span-3">
                         {filteredCasos.length > 0 ? (
                            <div className="relative flex items-center group/nav">
                                <div className="flex space-x-6 w-full">
                                    {/* Recortamos la lista para mostrar solo de 3 en 3 */}
                                    {filteredCasos.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map((obra) => (
                                        <Link 
                                            key={obra.id} 
                                            to={`/casos-de-obras/${obra.id}`} // Enlace dinámico a la página de la obra
                                            /* bg-white/5: Fondo de la tarjeta casi transparente */
                                            className="group w-1/3 bg-white/90 rounded-lg overflow-hidden border border-white/10 hover:border-ecogreen-green/50 transition-all"
                                        >
                                            {/* ÁREA DE LA IMAGEN */}
                                            <div className="h-42 overflow-hidden relative">
                                                <img src={obra.image} alt={obra.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                
                                                {/* BADGE (Etiqueta de número): 
                                                    bg-ecogreen-green: Fondo Verde.
                                                    text-white: Texto Blanco.
                                                    text-sm: Letra más grande y legible.
                                                */}
                                                <div className="absolute top-2 left-2 bg-ecogreen-green-fall text-white text-[18px] px-2 py-0.5 rounded  shadow-lg">
                                                    #{obra.id}
                                                </div>
                                            </div>

                                            {/* ÁREA DE TEXTO (Debajo de la foto) */}
                                            <div className="p-3">
                                                {/* Tipo de obra en verde (ej: TALUD) */}
                                                <p className="text-[10pt] text-ecogreen-green font-bold uppercase mb-1">{obra.type}</p>
                                                
                                                {/* Título de la obra:
                                                    Se mantiene blanco (text-white) y cambia a verde solo al pasar el mouse.
                                                */}
                                                <h5 className="font-bold text-[12pt] leading-tight line-clamp-2 uppercase group-hover:text-ecogreen-green transition-colors text-ecogreen-blue">
                                                    {obra.title}
                                                </h5>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* FLECHAS DE NAVEGACIÓN: Solo aparecen si hay más de 3 obras en la lista */}
                                {filteredCasos.length > ITEMS_PER_PAGE && (
                                    <div className="absolute -right-4 -left-4 flex justify-between pointer-events-none">
                                        <button onClick={() => setCurrentIndex(prev => prev - 1)} disabled={!canGoPrev} className={`pointer-events-auto p-2 bg-ecogreen-green rounded-full shadow-lg transition-opacity ${!canGoPrev ? 'opacity-0' : 'opacity-100'}`}>
                                            <ChevronLeftIcon className="h-4 w-4" />
                                        </button>
                                        <button onClick={() => setCurrentIndex(prev => prev + 1)} disabled={!canGoNext} className={`pointer-events-auto p-2 bg-ecogreen-green rounded-full shadow-lg transition-opacity ${!canGoNext ? 'opacity-0' : 'opacity-100'}`}>
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                             /* MENSAJE DE ERROR: Si una categoría está vacía */
                             <p className="text-gray-400 italic text-center py-10">No hay obras registradas en esta categoría.</p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MegaMenuCasos;