import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Info, HelpCircle, ShieldCheck } from 'lucide-react';

export default function Calculator() {
  const [amount, setAmount] = useState(50000);
  const [term, setTerm] = useState("3 meses");
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);
  
  const terms = [ "30 días", "2 meses", "3 meses", "6 meses", "9 meses", "12 meses"];

  const calculateInstallment = () => {
    let total = amount;
    let cuota = 0;

    if (term === "15 días") {
        total *= 1.35; // +35%
        cuota = total;
    } else if (term === "30 días") {
        total *= 1.50; // +50%
        cuota = total;
    } else if (term === "2 meses") {
        total *= 1.70; // +70%
        cuota = total / 2;
    } else if (term === "3 meses") {
        total *= 1.90; // +90%
        cuota = total / 3;
    } else if (term === "6 meses") {
        total *= 2.30; // +130%
        cuota = total / 6;
    } else if (term === "9 meses") {
        total *= 2.50; // +150%
        cuota = total / 9;
    } else if (term === "12 meses") {
        total *= 2.70; // +170%
        cuota = total / 12;
    }
    
    setTotalToPay(total);
    setMonthlyInstallment(cuota);
  };

  useEffect(() => {
    calculateInstallment();
  }, [amount, term]);

  const formattingOptions = {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', formattingOptions).format(value);
  };

  const isDays = term.includes("días");

  const handleWhatsAppRedirect = () => {
    const mensaje = `Me interesa solicitar un préstamo de ${formatCurrency(amount)} para pagar en ${term}.`;
    const encodedMessage = encodeURIComponent(mensaje);
    const linkWhatsApp = `https://wa.me/3765074537?text=${encodedMessage}`;
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <section id="simulador" className="py-12 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Controles */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="px-4 lg:px-0">
              <div className="flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-4xl font-bold text-blue-900 z-1 pb-1">
                  Simulá tu préstamo
                </h2>
                {/* <img 
                  alt="Préstamo rápido" 
                  src="https://cdn.prod.website-files.com/63091bbd808ef433808b70cd/67fae7be7de0cd9c38fd389f_DolarOficial.avif" 
                  className="w-16 h-16 object-contain -ml-4 "  
                /> */}
              </div>
              <p className="text-lg text-slate-600 z-20">Elegí el monto y el plazo que mejor se adapte a vos.</p>
            </div>

            {/* Selector de Monto */}
            <div className="space-y-6 px-4 lg:px-0">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Monto a solicitar</label>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-2xl md:text-3xl font-bold text-blue-600 shadow-sm w-full sm:w-auto text-center">
                  {formatCurrency(amount)}
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 touch-none select-none"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>$10.000</span>
                <span>$1.000.000</span>
              </div>
            </div>

            {/* Selector de Plazo */}
            <div className="space-y-6">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-widest block">Plazo de devolución</label>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {terms.map((p) => (
                   <button
                    key={p}
                    onClick={() => setTerm(p)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all border whitespace-nowrap cursor-pointer ${
                      term === p 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Columna de Resultados */}
          <motion.div 
            layout
            className="bg-[#132338] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-blue-400 font-semibold uppercase tracking-widest text-xs md:text-sm">
                  {isDays ? "Pago único de:" : "Tu cuota mensual será de:"}
                </p>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black truncate">{formatCurrency(monthlyInstallment)}</div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 text-center lg:text-left">
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-1">Total a devolver</p>
                  <p className="text-lg md:text-2xl font-bold truncate">{formatCurrency(totalToPay)}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-1 flex items-center justify-center lg:justify-start gap-1">
                    Tasa Aplicada <HelpCircle className="w-3 h-3" />
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-green-400">
                    <span className="text-sm md:text-lg font-medium">+</span>{Math.round(((totalToPay / amount) - 1) * 100)}%
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex gap-3">
                <Info className="w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Préstamos a tasa fija en pesos argentinos. Los porcentajes aplicados dependen exclusivamente del plazo seleccionado. Sujeto a aprobación crediticia inmediata.
                </p>
              </div>

              <motion.button
                onClick={handleWhatsAppRedirect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 py-5 rounded-2xl text-xl font-bold hover:bg-blue-500 cursor-pointer transition-colors"
              >
                ¡Lo quiero ahora!
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
