import React from 'react';
import { Clock, MousePointer2, ShieldCheck, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Rapidez Extrema",
    description: "Evaluación instantánea. Una vez aprobado, el dinero se acredita en tu cuenta en minutos."
  },
  {
    icon: <MousePointer2 className="w-8 h-8 text-green-600" />,
    title: "100% Online",
    description: "Olvidate de las sucursales. Podés solicitar tu préstamo desde tu celular o computadora."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Máxima Seguridad",
    description: "Protegemos tus datos con los más altos estándares de encriptación bancaria."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-green-600" />,
    title: "Tasas Transparentes",
    description: "Cuotas fijas y pesos. Siempre sabrás exactamente cuánto vas a pagar desde el día uno."
  }
];

export default function Features() {
  return (
    <section className="py-15 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">¿Por qué elegir Crediplus?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Diseñamos procesos pensados para personas reales, sin burocracia ni vueltas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
