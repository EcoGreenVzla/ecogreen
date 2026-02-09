
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <Link to="/contactanos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="block shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0px 15px 25px rgba(0,0,0,0.1)" }}
            >
              <picture>
                {/* Mobile Image: Shown on screens up to 768px wide */}
                <source
                  media="(max-width: 768px)"
                  srcSet="https://tumuro.com/media/banner/BANNER-HOME-mobil.webp"
                />
                {/* Desktop Image: Default image */}
                <img
                  src="https://tumuro.com/media/banner/BANNER-HOME-3.webp"
                  alt="Contáctenos para más información sobre nuestros servicios de ingeniería y construcción"
                  className="w-full h-auto object-cover"
                />
              </picture>
            </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
