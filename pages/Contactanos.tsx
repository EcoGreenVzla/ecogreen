import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';

// --- OpenLayers Imports ---
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css'; // Importante para los estilos base del mapa

// --- Iconos Locales ---
import FacebookIcon from '../components/icons/FacebookIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

// --- ESTILOS CSS (Inyectados en JS) ---
const styles = `
  /* Estilo del PIN AZUL Personalizado */
  .custom-pin {
    background-color: #FFFFFF;
    width: 3rem;
    height: 3rem;
    display: block;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 3px solid #004857; /* Azul EcoGreen Oscuro */
    box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .custom-pin:hover {
    transform: rotate(45deg) scale(1.1);
    background-color: #006070;
  }

  .custom-pin::after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.6rem 0 0 0.6rem;
    background-image: url('https://tumuro.com/media/icons/favicon.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    transform: rotate(-45deg); /* Contrarrestar la rotación del pin */
    border-radius: 50%;
  }

  /* Estilo del Popup */
  .ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #cccccc;
    bottom: 50px;
    left: -50px;
    min-width: 180px;
    text-align: center;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    color: #333;
    display: none; /* Oculto por defecto */
    z-index: 100;
  }
  
  .ol-popup::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
  
  .ol-popup.visible {
    display: block;
    animation: fadeIn 0.3s;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// --- Componentes de Iconos SVG ---
const LocationMarkerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);
const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

// --- Animaciones ---
const textVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } }
};
const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ecogreen-green" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
      {children}
    </motion.a>
);

const Contactanos: React.FC = () => {
    // Coordenadas: Lomas De La Lagunita, Caracas
    // OpenLayers usa [Lon, Lat]
    const coordinates = [-66.8370, 10.4345];
    
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);

    // --- Inicialización del Mapa OpenLayers ---
    useEffect(() => {
        if (!mapRef.current) return;
        if (mapInstance.current) return; // Evitar doble inicialización

        // 1. Crear el elemento HTML para el Pin
        const pinElement = document.createElement('div');
        pinElement.className = 'custom-pin';

        // 2. Crear el elemento HTML para el Popup
        const popupElement = document.createElement('div');
        popupElement.className = 'ol-popup';
        popupElement.innerHTML = '<strong>EcoGreen</strong><br/>Urb. Lomas De La Lagunita';
        
        // Mostrar popup al hacer click en el pin
        pinElement.addEventListener('click', () => {
             popupElement.classList.toggle('visible');
        });

        // 3. Crear los Overlays (Capas HTML sobre el mapa)
        const markerOverlay = new Overlay({
            element: pinElement,
            position: fromLonLat(coordinates),
            positioning: 'center-center', // Centrar el div en la coordenada
            stopEvent: false
        });

        const popupOverlay = new Overlay({
            element: popupElement,
            position: fromLonLat(coordinates),
            positioning: 'bottom-center',
            offset: [0, -45], // Subirlo un poco respecto al punto
            stopEvent: false
        });

        // 4. Inicializar el Mapa
        mapInstance.current = new Map({
            target: mapRef.current,
            layers: [
                // Capa CartoDB Dark Matter (Estilo Oscuro Gratuito)
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                        attributions: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                    })
                })
            ],
            view: new View({
                center: fromLonLat(coordinates),
                zoom: 15
            }),
            overlays: [markerOverlay, popupOverlay]
        });

        // Limpieza al desmontar
        return () => {
            if (mapInstance.current) {
                mapInstance.current.setTarget(undefined);
                mapInstance.current = null;
            }
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Formulario enviado (simulación).');
    };

    return (
        <>
            <style>{styles}</style>
            <title>Contáctanos | EcoGreen</title>
            <meta name="description" content="Póngase en contacto con EcoGreen para soluciones de ingeniería. Estamos listos para atenderle." />

            <section className="relative w-full h-[50vh] max-h-[500px] overflow-hidden bg-gray-800">
                <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://tumuro.com/media/contactanos/header-contactanos.webp')` }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                    <motion.div variants={textVariants} initial="initial" animate="animate" className="bg-ecogreen-blue/70 p-6 md:p-8 text-center text-white max-w-3xl">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">CONTÁCTANOS</h1>
                        <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">ESTAMOS LISTOS PARA ATENDERTE.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <motion.div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-ecogreen-blue mb-6">Información de Contacto</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-start">
                                <LocationMarkerIcon className="w-6 h-6 mr-4 text-ecogreen-green flex-shrink-0 mt-1" />
                                <span>Urbanización Lomas De La Lagunita, Edo. Miranda, Caracas, Venezuela.</span>
                            </div>
                            <div className="flex items-start">
                                <PhoneIcon className="w-6 h-6 mr-4 text-ecogreen-green flex-shrink-0 mt-1" />
                                <span>+58 (424) 201-9069 / +58 (212) 961-1234</span>
                            </div>
                            <div className="flex items-start">
                                <EnvelopeIcon className="w-6 h-6 mr-4 text-ecogreen-green flex-shrink-0 mt-1" />
                                <span>info@ecogreen.com</span>
                            </div>
                        </div>
                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-ecogreen-blue mb-4">Síguenos en Redes</h3>
                            <div className="flex space-x-6">
                                <SocialIcon href="#"><FacebookIcon className="h-6 w-6" /></SocialIcon>
                                <SocialIcon href="#"><TwitterIcon className="h-6 w-6" /></SocialIcon>
                                <SocialIcon href="#"><InstagramIcon className="h-6 w-6" /></SocialIcon>
                                <SocialIcon href="#"><LinkedinIcon className="h-6 w-6" /></SocialIcon>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ecogreen-green focus:border-ecogreen-green" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ecogreen-green focus:border-ecogreen-green" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ecogreen-green focus:border-ecogreen-green" />
                            </div>
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                                <input type="text" id="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ecogreen-green focus:border-ecogreen-green" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ecogreen-green focus:border-ecogreen-green"></textarea>
                            </div>
                            <div>
                                <motion.button type="submit" className="w-full bg-ecogreen-green text-white font-bold py-3 px-4 rounded-md shadow-lg uppercase tracking-wider" whileHover={{ scale: 1.02, y: -2, boxShadow: "0px 5px 15px rgba(48, 148, 0, 0.4)" }} whileTap={{ scale: 0.98 }} transition={{type: 'spring', stiffness: 300}}>
                                    Enviar Mensaje
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </section>

            {/* Sección del Mapa OpenLayers (Estilo Oscuro) */}
            <section className="w-full h-[450px] bg-gray-900 relative z-0">
                 <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            </section>
        </>
    );
};

export default Contactanos;