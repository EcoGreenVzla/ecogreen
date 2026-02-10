import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
// --- Nuevos imports para Leaflet ---
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importante para que el mapa se vea bien
import L from 'leaflet';

import FacebookIcon from '../components/icons/FacebookIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

// --- Configuración del Icono Personalizado en Leaflet ---
// Leaflet no detecta automáticamente los iconos por defecto en React a veces, así que definimos uno propio.
const customIcon = new L.Icon({
    iconUrl: "https://tumuro.com/media/icons/favicon.png",
    iconSize: [40, 40], // Tamaño del icono
    iconAnchor: [20, 40], // Punto del icono que corresponde a la ubicación (centro abajo)
    popupAnchor: [0, -40] // Donde sale el popup si lo hubiera
});

// --- Local Icon Components for Contact Info ---
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

// --- Animation Variants ---
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
    // Coordenadas: Lomas de La Lagunita, Caracas (Aprox)
    const position: [number, number] = [10.4345, -66.8370];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Formulario enviado (simulación).');
    };

    return (
        <>
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

            {/* Sección del Mapa con Leaflet (Estilo Oscuro) */}
            <section className="w-full h-[450px] bg-gray-900 relative z-0">
                <MapContainer 
                    center={position} 
                    zoom={15} 
                    scrollWheelZoom={false} 
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Capa de Mapa Oscura (CartoDB Dark Matter Map) - Gratuita */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            EcoGreen <br /> Urbanización Lomas De La Lagunita.
                        </Popup>
                    </Marker>
                </MapContainer>
            </section>
        </>
    );
};

export default Contactanos;