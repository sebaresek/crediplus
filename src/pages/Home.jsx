import React from 'react';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Requirements from '@/components/Requirements';
import ButtonSupport from '@/components/ButtonSupport';
import FAQ from '@/components/FAQ';

const Home = () => (
  <main>
    <Hero />
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute top-1/2 -right-24 w-125 h-125 bg-green-50 rounded-full blur-3xl opacity-40"></div>
      </div>
      <ButtonSupport />
      <Calculator />
      <Features />
      <Requirements />
      <Testimonials />
      <FAQ />
    </div>
  </main>
);

export default Home;
