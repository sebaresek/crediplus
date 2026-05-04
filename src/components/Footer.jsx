import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-300 py-15 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-15 lg:mb-20">
          
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div 
                className="h-9 md:h-11 w-36 md:w-44 bg-blue-100 opacity-90 hover:opacity-100 transition-opacity" 
                style={{
                  WebkitMaskImage: `url('/logo.png')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center',
                  maskImage: `url('/logo.png')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                }} 
              />
            </div>
            <p className="max-w-xs leading-relaxed text-sm text-slate-500">
              Préstamos con garantía prendaria en Argentina. 
              Tecnología y transparencia para ayudarte cuando más lo necesitás.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-900/50 border border-slate-800 rounded-xl hover:text-blue-500 hover:border-blue-500/50 transition-all group">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577166879699" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-900/50 border border-slate-800 rounded-xl hover:text-blue-500 hover:border-blue-500/50 transition-all group">
                <Facebook className="w-5 h-5"/>
              </a>
            </div>
          </div>

          <div className="lg:pl-12">
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em] opacity-50">Atención al Cliente</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="https://wa.me/5493765074537?text=Hola,%20me%20gustaría%20solicitar%20un%20crédito." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Soporte</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:crediplus.arr@gmail.com" className="hover:text-white transition-colors">crediplus.arr@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="hover:text-white transition-colors">Posadas, Argentina</span>
              </li>
            </ul>
          </div>

          <div className="lg:pl-12">
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em] opacity-50">Información Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/informacion-legal" className="hover:text-white transition-colors inline-block">Información Legal</Link></li>
              <li><Link to="/terminos-y-condiciones" className="hover:text-white transition-colors inline-block">Términos y condiciones</Link></li>
              <li><Link to="/politicas-de-privacidad" className="hover:text-white transition-colors inline-block">Políticas de privacidad</Link></li>
              <li><Link to="/defensa-del-consumidor" className="hover:text-white transition-colors inline-block">Defensa del consumidor</Link></li>
              {/* <li><Link to="/boton-de-arrepentimiento" className="hover:text-white transition-colors inline-block">Botón de arrepentimiento</Link></li> */}
              <li><Link to="/costos-y-tasas" className="hover:text-white transition-colors inline-block">Costos y tasas</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-12 block lg:hidden" />

        <div className="pt-0 lg:pt-12 border-t border-slate-900/50">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between  mb-0 lg:mb-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-[10px] leading-relaxed text-slate-600">
                © {currentYear} Crediplus Todos los derechos reservados. Préstamos personales con garantía prendaria (empeño). 
                Interés por plazo: 15 días (35%), 1 mes (50%), hasta 12 meses (170%). Interés diario por mora: 2%. 
                Ejemplo: Para un préstamo de $10.000 a 1 mes, el total a pagar será de $15.000. 
                Sujeto a evaluación del estado físico del objeto dejado en garantía.
              </p>
              <p className="text-[10px] text-slate-500">
                Crediplus opera bajo el modelo de empeño de bienes muebles.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/30 border border-slate-800/50 rounded-xl">
                 <ShieldCheck className="w-4 h-4 text-green-500/50" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">GARANTÍA SEGURA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/30 border border-slate-800/50 rounded-xl">
                 <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">VALUACIÓN INMEDIATA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
