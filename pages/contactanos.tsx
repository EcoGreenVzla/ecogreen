import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTES Y DATA ---
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// --- OpenLayers (Mapa) ---
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

const Contactanos: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const pageID = 'ID-contacto.tsx';

  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const theme = {
    layout: { paddingVertical: 'py-16 md:py-24', backgroundColor: '#FFFFFF', maxWidthResponsive: 'w-[99%] md:max-w-[80%]' },
    typography: { titleFontFamily: "font-gotcha", titleSize: 'text-4xl md:text-5xl', contactFontFamily: "'Open Sans', sans-serif", labelSize: '14px', infoSize: '22px' },
    colors: { primaryBlue: '#0E306F', primaryGreen: '#0e306f', labelColor: '#0E306F', infoColor: '#555555' },
    form: { borderRadius: 'rounded-none', padding: 'p-8 md:p-12' }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      } else { setStatus('error'); }
    } catch (error) { setStatus('error'); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!mapRef.current) return;
    const coordinate = fromLonLat([-66.7760, 10.4180]);
    const markerEl = document.createElement('div');
    markerEl.className = 'custom-pin-wrapper';
    markerEl.innerHTML = `<div class="pin-main-body" style="border-color: #0E306F"><img src="https://tumuro.com/media/icons/favicon.png" class="pin-favicon" /></div><div class="pin-tip" style="background-color: #0E306F"></div>`;
    const overlay = new Overlay({ element: markerEl, positioning: 'bottom-center', stopEvent: false });
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new XYZ({ url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', crossOrigin: 'anonymous' }) })],
      view: new View({ center: coordinate, zoom: 13 }),
    });
    map.addOverlay(overlay);
    overlay.setPosition(coordinate);
    setTimeout(() => map.updateSize(), 800);
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className="w-full m-0 p-0">
      <HeroSliderResponsive data={sliderData[pageID]} />
      <section className={`${theme.layout.paddingVertical}`}>
        <div className={`container mx-auto px-6 ${theme.layout.maxWidthResponsive}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h2 className={`${theme.typography.titleFontFamily} ${theme.typography.titleSize} uppercase tracking-tight`} style={{ color: theme.colors.primaryBlue }}>Información de Contacto</h2>
              <div className="space-y-8" style={{ fontFamily: theme.typography.contactFontFamily }}>
                <div><h4 style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }} className="font-bold uppercase mb-1">Dirección</h4><p style={{ fontSize: theme.typography.infoSize, color: theme.colors.infoColor }}>Urbanización Lomas De La Lagunita, Edo. Miranda. Caracas, Venezuela.</p></div>
                <div><h4 style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }} className="font-bold uppercase mb-1">Móvil</h4><p className="font-semibold" style={{ fontSize: theme.typography.infoSize, color: theme.colors.primaryBlue }}>+58 (424) 201-9069</p></div>
                <div><h4 style={{ fontSize: theme.typography.labelSize, color: theme.colors.labelColor }} className="font-bold uppercase mb-1">Email</h4><p style={{ fontSize: theme.typography.infoSize, color: theme.colors.primaryGreen }}>tumuroecogreen@gmail.com</p></div>
              </div>
            </div>
            <div className={`bg-white ${theme.form.padding} shadow-2xl border-l-8`} style={{ borderLeftColor: theme.colors.primaryGreen }}>
              <AnimatePresence>
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-[#0E306F] mb-4">¡ENVIADO!</h3>
                    <p className="text-gray-500">Pronto te contactaremos.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-[#4BA406] font-bold">VOLVER</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" placeholder="NOMBRE" required className="w-full px-4 py-4 border-b outline-none" />
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="EMAIL" required className="w-full px-4 py-4 border-b outline-none" />
                    <input name="telefono" value={formData.telefono} onChange={handleChange} type="tel" placeholder="TELÉFONO" required className="w-full px-4 py-4 border-b outline-none" />
                    <input name="asunto" value={formData.asunto} onChange={handleChange} type="text" placeholder="ASUNTO" required className="w-full px-4 py-4 border-b outline-none" />
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} placeholder="MENSAJE" required className="w-full px-4 py-4 border-b outline-none"></textarea>
                    <button type="submit" disabled={status === 'sending'} className="w-full text-white font-bold py-5" style={{ backgroundColor: theme.colors.primaryGreen }}>
                      {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <style>{`.custom-pin-wrapper{display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3));cursor:pointer}.pin-main-body{width:60px;height:60px;background-color:white;border-radius:50%;border:4px solid;display:flex;align-items:center;justify-content:center;overflow:hidden;z-index:2}.pin-favicon{width:75%;height:75%;object-fit:contain}.pin-tip{width:16px;height:16px;transform:rotate(45deg) translateY(-8px);z-index:1}`}</style>
      <section className="w-full h-[550px] bg-white border-t"><div ref={mapRef} className="w-full h-full" /></section>
    </div>
  );
};

export default Contactanos;