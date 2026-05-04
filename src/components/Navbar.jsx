import React, { useState } from 'react';
import { Menu, X, ArrowRight, Home, Calculator, ClipboardCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/#inicio', icon: <Home className="w-5 h-5" /> },
    { name: 'Simulador', href: '/#simulador', icon: <Calculator className="w-5 h-5" /> },
    { name: 'Requisitos', href: '/#requisitos', icon: <ClipboardCheck className="w-5 h-5" /> },
    { name: 'FAQ', href: '/#faq', icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div 
              className="h-9 md:h-11 w-36 md:w-44 transition-colors" 
              style={{
                backgroundImage: `url('/logo.png')`, // La ruta desde public es solo /
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
              }} 
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
            <motion.button
              onClick={() => window.open('https://wa.me/5493765074537', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 uppercase cursor-pointer"
            >
              Solicitar Crédito
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-10 space-y-2">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-bold text-slate-700 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50/50 transition-all uppercase tracking-tight"
                >
                  <span className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </span>
                  {item.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <button 
                  onClick={() => window.open('https://wa.me/5493765074537', '_blank')}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 flex items-center justify-center gap-3 uppercase group cursor-pointer"
                >
                  Solicitar Crédito
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
              <div className="pt-8 flex justify-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50/50 border border-green-100/50">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-green-600/60 uppercase tracking-widest">BCRA Registrado</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/50 border border-blue-100/50">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-blue-600/60 uppercase tracking-widest">SSL Secure</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
