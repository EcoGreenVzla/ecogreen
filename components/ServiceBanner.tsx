
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

// Convert the framer-motion component to use react-router-dom's Link
const MotionLink = motion(Link);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, iconSrc, color, href }) => (
    <MotionLink 
        to={href} 
        className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="h-48 overflow-hidden">
            <img
                src={imageSrc}
                alt={`${title} background`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
        </div>
        <div className={`${color} flex items-center p-4`}>
            <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-150">
                <img src={iconSrc} alt={`${title} icon`} className="h-12 w-12" />
            </div>
            <h3 className="text-white text-base font-bold uppercase tracking-wide">{title}</h3>
        </div>
    </MotionLink>
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