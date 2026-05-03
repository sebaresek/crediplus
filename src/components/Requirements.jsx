import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  "Ser mayor de 18 años con DNI vigente",
  "Poseer una cuenta bancaria (CBU/CVU) propia.",
  "Número de teléfono y correo electrónico personal",
  "Una prenda o garantía (objeto de valor como empeño).",
];

export default function Requirements() {
  return (
    <section id="requisitos" className="py-15 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-4xl md:rounded-[3rem] p-6 md:p-20 shadow-xl shadow-slate-200 border border-slate-100 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          
          <div className="px-2 md:px-0">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Requisitos mínimos para tu libertad financiera</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 text-balance">
              Obtené dinero en el acto dejando un objeto de valor como respaldo. Sin recibo de sueldo ni trámites largos.
            </p>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 text-slate-700 font-medium text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mx-auto max-w-sm md:max-w-none">
            <div className="aspect-square bg-blue-600 rounded-3xl md:rotate-3 shadow-2xl relative z-10 overflow-hidden flex flex-col justify-center items-center text-white p-8 md:p-12 text-center">
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Todo listo?</h3>
               <p className="text-blue-100 mb-8 text-sm md:text-base">El proceso toma menos de 5 minutos. Aceptamos smartphones, notebooks, consolas y herramientas.</p>
               <button 
                  onClick={() => window.open('https://wa.me/5493765074537', '_blank')}
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/10 cursor-pointer"
               >
                  Consultar por WhatsApp
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
