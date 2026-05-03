import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import LegalLayout from '@/components/LegalLayout';

// Pages
import Home from '@/pages/Home';
import LegalInformation from '@/pages/LegalInformation';
import TermsAndConditions from '@/pages/TermsAndConditions';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import ConsumerProtection from '@/pages/ConsumerProtection';
import RefundPolicy from '@/pages/RefundPolicy';
import CostsAndRates from '@/pages/CostsAndRates';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route element={<LegalLayout />}>
          <Route path="/informacion-legal" element={<LegalInformation />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
          <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/defensa-del-consumidor" element={<ConsumerProtection />} />
          <Route path="/boton-de-arrepentimiento" element={<RefundPolicy />} />
          <Route path="/costos-y-tasas" element={<CostsAndRates />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
