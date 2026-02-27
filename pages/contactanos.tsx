import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

// --- COMPONENTES ---
import HeroSliderResponsive from '../components/HeroSliderResponsive';

// --- DATA ---
import { sliderData } from '../data/sliderData';

// --- OpenLayers (Mapa) ---
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

// --- Iconos Locales ---
import FacebookIcon from '../components/icons/FacebookIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import MailIcon from '../components/icons/MailIcon';

const Contactanos: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const pageID = 'ID-contacto.tsx';

  // --- LÓGICA DE FORMSPREE (ID: xjgezgvz) ---
  const [state, handleSubmit] = useForm("xjgezgvz");

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME) - AJUSTES MEMORIZADOS
  // ============================================================
  const theme = {
    layout: {
      paddingVertical: 'py-16 md:py-24',
      backgroundColor: '#FFFFFF',
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', 
    },
    typography: {
      titleFontFamily: "font-gotcha", // Tipografía global títulos
      titleSize: 'text-4xl md:text-5xl',
      contactFontFamily: "'Open Sans', sans-serif", // Tipografía datos
      labelSize: '14px',      
      infoSize: '22px',       
      weightLight: 300,
      weightBold: 700,
    },
    colors: {
      primaryBlue: '#0E306F',
      primaryGreen: '#4BA406',
      labelColor: '#0E306F', // Etiquetas azules solicitadas
      infoColor: '#555555',
    },
    form: {
      borderRadius: 'rounded-none',
      padding: 'p-8 md:p-12',
      inputPadding: 'px-4 py-4',
    }
  };

  // --- Lógica del Mapa (PIN Favicon + Skin Google + Zoom 13) ---
  useEffect(() => {
    if (!mapRef.current) return;
    const coordinate = fromLonLat([-66.7760, 10.4180]);
    const markerEl = document.createElement('div');
    markerEl.className = 'custom-pin-wrapper';
    markerEl.innerHTML = `
      <div class="pin-main-body" style="border-color: ${theme.colors.primaryBlue}">
        <img src="https://tumuro.com/media/icons/favicon.png" alt="EcoGreen" class="pin-favicon" />
      </div>
      <div class="pin-tip" style="background-color: ${theme.colors.primaryBlue}"></div>
    `;

    const overlay = new Overlay({ element: markerEl, positioning: 'bottom-center', stopEvent: false });
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({
        source: new XYZ({
          url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
          attributions: '&copy; Google Maps',
          crossOrigin: 'anonymous' 
        }),
      })],
      view: new View({ center: coordinate, zoom: 13 }),
    });
    map.addOverlay(overlay);
    overlay.setPosition(coordinate);
    setTimeout(() => map.updateSize(), 800);
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className="w-full m-0 p-0">
      <title>Contáctanos | EcoGreen</title>

      <HeroSliderResponsive data={sliderData[pageID]} />

      <section className={`${theme.layout.paddingVertical}`} style={{ backgroundColor: theme.layout.backgroundColor }}>
        <div className={`container mx-auto px-6 ${theme.layout.maxWidthResponsive}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* 1. INFORMACIÓN (Labels Azules / Info Open Sans) */}
            <div className="space-y-12">
              <div>
                <h2 className={`${theme.typography.titleFontFamily} ${theme.typography.titleSize} uppercase mb-10 tracking-tight`} style={{ color: theme.colors.primaryBlue }}>
                  Información de Contacto
                </h2>
                
                <div className="space-y-8" style={{ fontFamily: theme.typography.contactFontFamily }}>
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-1" style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }}>Dirección</h4>
                        <p className="leading-relaxed" style={{ fontSize: theme.typography.infoSize, color: theme.colors.infoColor, fontWeight: theme.typography.weightLight }}>
                          Urbanización Lomas De La Lagunita, Edo. Miranda. Caracas, Venezuela.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-1" style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }}>Móvil</h4>
                        <p className="font-semibold" style={{ fontSize: theme.typography.infoSize, color: theme.colors.primaryBlue }}>+58 (424) 201-9069</p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-1" style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }}>Email</h4>
                        <p style={{ fontSize: theme.typography.infoSize, color: theme.colors.primaryGreen }}>tumuroecogreen@gmail.com</p>
                    </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-6 border-t border-gray-100 flex gap-4">
                  {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon].map((Icon, idx) => (
                    <motion.a key={idx} href="#" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full text-gray-400 hover:text-white transition-all" whileHover={{ backgroundColor: theme.colors.primaryBlue, scale: 1.1 }}>
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
              </div>
            </div>

            {/* 2. FORMULARIO FUNCIONAL (Formspree) */}
            <motion.div className={`bg-white ${theme.form.padding} shadow-2xl border-l-8`} style={{ borderLeftColor: theme.colors.primaryGreen, fontFamily: theme.typography.contactFontFamily }}>
              
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                    <h3 className="text-2xl font-bold text-[#0E306F] mb-4">¡GRACIAS POR CONTACTARNOS!</h3>
                    <p className="text-gray-500">Hemos recibido tu mensaje. Pronto nos pondremos en contacto contigo a través de info@tumuro.com</p>
                    <button onClick={() => window.location.reload()} className="mt-8 text-xs uppercase tracking-widest font-bold text-[#4BA406] hover:underline">Enviar otro mensaje</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input name="nombre" id="nombre" type="text" placeholder="NOMBRE" required className="w-full px-4 py-4 border-b border-gray-200 rounded-none focus:border-[#4BA406] outline-none transition-all placeholder-style" />
                    </div>
                    
                    <div>
                      <input name="email" id="email" type="email" placeholder="EMAIL" required className="w-full px-4 py-4 border-b border-gray-200 rounded-none focus:border-[#4BA406] outline-none transition-all placeholder-style" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <input name="telefono" id="telefono" type="tel" placeholder="TELÉFONO" required className="w-full px-4 py-4 border-b border-gray-200 rounded-none focus:border-[#4BA406] outline-none transition-all placeholder-style" />
                    </div>

                    <div>
                      <input name="asunto" id="asunto" type="text" placeholder="ASUNTO" required className="w-full px-4 py-4 border-b border-gray-200 rounded-none focus:border-[#4BA406] outline-none transition-all placeholder-style" />
                    </div>

                    <div>
                      <textarea name="mensaje" id="mensaje" rows={4} placeholder="MENSAJE" required className="w-full px-4 py-4 border-b border-gray-200 rounded-none focus:border-[#4BA406] outline-none transition-all placeholder-style"></textarea>
                      <ValidationError prefix="Message" field="mensaje" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <motion.button 
                      type="submit" 
                      disabled={state.submitting}
                      className={`w-full text-white font-bold py-5 uppercase tracking-widest rounded-none shadow-lg ${state.submitting ? 'opacity-50' : ''}`}
                      style={{ backgroundColor: theme.colors.primaryGreen }}
                      whileHover={{ backgroundColor: theme.colors.primaryBlue }}
                    >
                      {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .placeholder-style::placeholder {
          font-family: ${theme.typography.contactFontFamily};
          font-weight: 300; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px;
        }
        .custom-pin-wrapper { display: flex; flex-direction: column; align-items: center; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); cursor: pointer; }
        .pin-main-body { width: 60px; height: 60px; background-color: white; border-radius: 50%; border: 4px solid; display: flex; align-items: center; justify-content: center; overflow: hidden; z-index: 2; }
        .pin-favicon { width: 75%; height: 75%; object-fit: contain; }
        .pin-tip { width: 16px; height: 16px; transform: rotate(45deg) translateY(-8px); z-index: 1; }
      `}</style>

      {/* SECCIÓN DEL MAPA (GOOGLE ROADMAP LIGHT) */}
      <section className="w-full h-[550px] z-0 bg-white border-t border-gray-100">
        <div ref={mapRef} className="w-full h-full" />
      </section>
    </div>
  );
};

export default Contactanos;