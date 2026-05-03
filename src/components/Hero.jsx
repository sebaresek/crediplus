import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24 md:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 mt-8">
              <Zap className="w-3 h-3" />
              Aprobación inmediata en 5 minutos
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight px-4 text-balance">
              El crédito que necesitás, <br />
              <span className="text-blue-900 font-black">sin letra chica.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed italic font-serif">
              Préstamos personales 100% online con las mejores tasas del mercado. 
              Simple, rápido y transparente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#simulador" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
              Ver Simulador
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Entidad regulada BCRA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
