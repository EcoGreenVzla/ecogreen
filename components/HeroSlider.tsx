
import React, { useState, useEffect, useCallback } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';

const sliderImages = [
  'https://tumuro.com/media/slider/muros-de-contencion1.webp',
  'https://tumuro.com/media/slider/muros-de-contencion2.webp',
  'https://tumuro.com/media/slider/muros-de-contencion3.webp',
  'https://tumuro.com/media/slider/muros-de-contencion4.webp',
  'https://tumuro.com/media/slider/muros-de-contencion5.webp',
  'https://tumuro.com/media/slider/muros-de-contencion6.webp'
];

// FIX: Explicitly type textVariants as Variants to resolve the type error where `ease` was inferred as a generic string.
const textVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: 'easeIn' } }
};

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800" aria-roledescription="carousel" aria-label="Proyectos destacados">
      <div className="w-full h-full flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliderImages.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img src={src} alt={`Proyecto destacado ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Text Overlay and Mobile Controls Container */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 md:p-12 lg:p-24">
        <div className='flex flex-col items-center md:items-end'>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-ecogreen-blue/70 p-6 md:p-8 text-center md:text-right text-white max-w-xl"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">
                        Soluciones Verdes
                    </h2>
                    <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                        La mejor alternativa tecnológica y económica
                    </p>
                </motion.div>
            </AnimatePresence>
            {/* Mobile-only Arrows */}
            <div className='flex md:hidden mt-6 space-x-8'>
                <motion.button
                    onClick={prevSlide}
                    className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon className="h-8 w-8" />
                </motion.button>
                <motion.button
                    onClick={nextSlide}
                    className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next slide"
                >
                    <ChevronRightIcon className="h-8 w-8" />
                </motion.button>
            </div>
        </div>
      </div>

      {/* Desktop-only Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-12 w-12 md:h-16 md:w-16" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-12 w-12 md:h-16 md:w-16" />
      </motion.button>

      {/* Dots Pagination */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {sliderImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-3 h-3 rounded-full transition-colors"
              animate={currentIndex === index ? "active" : "inactive"}
              variants={{
                  active: { backgroundColor: '#54c70e', scale: 1.2 },
                  inactive: { backgroundColor: '#ffffff', scale: 1 }
              }}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
