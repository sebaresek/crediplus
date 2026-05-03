import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "¿Cómo renovar mi préstamo?",
    answer: "Si no podés pagar el total al vencimiento, podés abonar solo el interés generado y renovar por el mismo periodo. Es una opción ideal para no perder tu objeto y ganar tiempo."
  },
  {
    question: "¿Qué artículos aceptan como garantía?",
    answer: "Aceptamos electrodomésticos, electrónica (smartphones, notebooks, consolas como PS5) y herramientas eléctricas de marca. Deben estar en excelente estado físico y funcionamiento."
  },
  {
    question: "¿Hay costos ocultos?",
    answer: "No. El costo de almacenamiento y seguro de tu objeto es de $0. Solo pagás el interés pactado al inicio."
  },
  {
    question: "¿Qué pasa si me atraso con el pago?",
    answer: "El interés diario por atraso es del 2%. Esperamos un máximo de 3 días hábiles luego del vencimiento."
  },
  {
    question: "¿Puedo pagar antes del vencimiento?",
    answer: "Sí, podés cancelar tu préstamo antes de la fecha pactada retirando tu objeto en el acto. Los intereses pactados no se modifican."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[3rem] font-black uppercase tracking-[-0.03em] leading-[1.2] mb-4">
            <span className="text-[#a4b4c4]">Preguntas </span><br className="md:hidden"/>
            <span className="text-blue-900">Frecuentes</span>
          </h2>
          <p className="text-slate-500 font-medium">Resolvé todas tus dudas rápido y fácil.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-blue-300">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold transition-colors ${isOpen ? 'text-blue-900' : 'text-slate-800 group-hover:text-blue-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isOpen ? 'bg-blue-50 text-blue-900' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50/50'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}