import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'MUROS DE CONTENCIÓN',
    imageSrc: 'https://tumuro.com/media/banner-services/muros-de-contencion.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp',
    color: 'bg-ecogreen-blue',
    href: '/muros-de-contencion'
  },
  {
    title: 'CONTROL DE EROSIÓN',
    imageSrc: 'https://tumuro.com/media/banner-services/control-de-erosion.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/control-de-erosion-icon.png',
    color: 'bg-ecogreen-green',
    href: '/control-de-erosion'
  },
  {
    title: 'VIALIDAD',
    imageSrc: 'https://tumuro.com/media/banner-services/vialidad.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/vialidad-icon.png',
    color: 'bg-ecogreen-orange',
    href: '/vialidad'
  }
];

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  iconSrc: string;
  color: string;
  href: string;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, iconSrc, color, href }) => (
    <Link to={href} className="group block">
        <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.03 }} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            /* CAMBIO: rounded-lg (8px) -> rounded-sm (2px)
               Esto hace que la esquina sea casi recta, pero no "afilada" al 100%,
               manteniendo un acabado profesional.
            */
            className="relative overflow-hidden rounded-sm shadow-lg bg-white"
        >
            <div className="h-64 overflow-hidden">
                <img 
                    src={imageSrc} 
                    alt={`${title} background`}
                    className="w-full h-full object-cover" 
                />
            </div>
            
            <div className={`${color} flex items-center p-4`}>
                <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <img src={iconSrc} alt={`${title} icon`} className="h-12 w-12" />
                </div>
                
                <h3 className="font-gotcha text-[1.4em] tracking-[1px] pt-[0.5em] m-0 text-white leading-none uppercase">
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </h3>
            </div>
        </motion.div>
    </Link>
);

const bannerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={bannerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default ServiceBanner;