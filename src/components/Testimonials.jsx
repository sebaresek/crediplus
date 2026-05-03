import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, initial: 'J', name: 'Juliana T.', text: 'Excelente desde todo punto de vista! Hasta el servicio de atención es destacable.', color: '#C8C2E5' },
  { id: 2, initial: 'M', name: 'Micaela F.', text: 'Excelente servicio. Siempre me ayuda a salir adelante. Super confiable y recomendado.', color: '#E89957' },
  { id: 3, initial: 'F', name: 'Facundo S.', text: 'El funcionamiento de es excelente... Pedí la cotización, me confirmaron y recibí el dinero al instante.', color: '#D88D8E' },
  { id: 4, initial: 'L', name: 'Leandro P.', text: 'Aprobación inmediata, plata en el acto real. Me salvó siempre a fin de mes. La voy a seguir usando.', color: '#7DA0CA' },
  { id: 5, initial: 'F', name: 'Florencia M.', text: 'La mejor opción cuando necesito plata urgente. Las cuotas son claras y sin sorpresas.', color: '#88C9A1' },
];

const Shape = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonials.length - itemsPerView + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="relative py-24 bg-[#F2F7FA] overflow-hidden">
      {/* Elementos decorativos movidos abajo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 relative px-8 mt-10 md:mt-0">
          <div className="relative inline-block max-w-fit mx-auto">
            {/* Top Left */}
            <Shape size={20} className="absolute -top-6 -left-10 md:-top-6 md:-left-20 text-[#9eaebc] opacity-60 rotate-12" />
            <div className="absolute top-4 -left-12 md:top-4 md:-left-32 w-2.5 h-2.5 rounded-full bg-[#d0dbe5] opacity-80"></div>
            <div className="absolute -top-8 left-2 md:-top-12 md:left-12 w-1.5 h-1.5 rounded-full bg-[#b5c5d3] opacity-60"></div>
            <Shape size={24} className="absolute hidden md:block top-10 -left-48 text-[#c6d4e1] opacity-70 rotate-35" />
            
            {/* Top Right */}
            <div className="absolute -top-4 right-4 md:-top-6 md:right-16 w-2 h-2 rounded-full bg-[#b5c5d3] opacity-60"></div>
            <Shape size={16} className="absolute top-0 -right-10 md:top-6 md:-right-24 text-[#b5c5d3] opacity-60 -rotate-12" />
            <Shape size={24} className="absolute hidden md:block -top-10 -right-36 text-[#d0dbe5] opacity-80 rotate-45" />
            
            {/* Bottom */}
            <div className="absolute hidden md:block -bottom-10 left-1/4 w-1.5 h-1.5 rounded-full bg-[#c6d4e1] opacity-70"></div>
            <Shape size={22} className="absolute -bottom-8 -right-8 md:-bottom-8 md:right-1/4 text-[#9eaebc] opacity-50 rotate-22" />
            <Shape size={16} className="absolute hidden md:block bottom-2 -right-48 text-[#d0dbe5] opacity-80 -rotate-15" />

            <h2 className="text-[22px] sm:text-[2rem] md:text-[3rem] font-black uppercase tracking-[-0.03em] leading-[1.2] relative z-10 mx-auto whitespace-nowrap">
              <span className="text-[#a4b4c4]">Hacé como nuestros</span><br />
              <span className="text-blue-900">miles de usuarios</span>
            </h2>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:gap-6 max-w-6xl mx-auto">
          {/* Mobile Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between md:hidden pointer-events-none z-20 px-1">
            <button onClick={prevSlide} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-blue-900 hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-blue-900 hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] pointer-events-auto transition-all active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button onClick={prevSlide} className="hidden md:flex p-3 text-blue-900 hover:bg-blue-900/10 rounded-full transition-colors shrink-0 active:scale-95">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="overflow-hidden flex-1 w-full relative z-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out pb-4"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="shrink-0 px-3 md:px-5 w-full"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white p-8 md:p-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col justify-start min-h-80 rounded-sm">
                     <div 
                       className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8"
                       style={{ backgroundColor: t.color }}
                     >
                       {t.initial}
                     </div>
                     <h4 className="text-[16px] xl:text-[18px] font-bold text-[#8a99a8] mb-3">{t.name}</h4>
                     <p className="text-[#a4b2c0] text-[14px] xl:text-[15px] font-semibold leading-[1.6]">
                       {t.text}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="hidden md:flex p-3 text-blue-900 hover:bg-blue-900/10 rounded-full transition-colors shrink-0 active:scale-95">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
