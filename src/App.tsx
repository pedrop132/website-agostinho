/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Key, 
  Droplets,
  Zap, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  MapPin,
  Star,
  Settings,
  Tv,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'unclogging',
    title: 'Desentupimentos',
    description: 'Serviço mecanizado para esgotos, pias e colunas.',
    icon: Wrench,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 'plumbing',
    title: 'Canalização',
    description: 'Reparação de fugas, torneiras e roturas de água.',
    icon: Droplets,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 'locks',
    title: 'Portas e Fechaduras',
    description: 'Abertura de portas e mudança de fechaduras urgente.',
    icon: Key,
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    id: 'blinds',
    title: 'Estores',
    description: 'Instalação e reparação de estores manuais e elétricos.',
    icon: Settings,
    color: 'text-slate-600',
    bg: 'bg-slate-50'
  },
  {
    id: 'appliances',
    title: 'Eletrodomésticos',
    description: 'Instalação de máquinas de lavar, fornos e frigoríficos.',
    icon: Tv,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  }
];

const LOCATIONS = [
  'Grande Lisboa', 'Margem Sul', 'Cascais', 'Oeiras', 'Sintra', 'Alverca'
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // SEO Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Agostinho Raimundo Reparações",
      "image": "https://picsum.photos/seed/repair/800/600",
      "@id": "",
      "url": window.location.origin,
      "telephone": "+351969998234",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lisboa e Margem Sul",
        "addressLocality": "Lisboa",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.7223,
        "longitude": -9.1393
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": []
    });
    document.head.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(script);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const PHONE_NUMBER = "969998234";
  const DISPLAY_PHONE = "969 998 234";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      {/* Mobile-First Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="font-black text-lg leading-none text-blue-700 uppercase tracking-tighter">Agostinho Raimundo</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Reparações Multiserviços</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="hidden sm:flex bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold items-center gap-2"
            >
              <Phone className="w-3 h-3" />
              {DISPLAY_PHONE}
            </a>
            <button className="p-2 bg-slate-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6"
          >
            <div className="flex flex-col gap-4">
              {['Início', 'Serviços', 'Sobre', 'Zonas'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xl font-bold text-left py-4 border-b border-slate-100 flex justify-between items-center"
                >
                  {item} <ChevronRight size={18} className="text-slate-300" />
                </button>
              ))}
              <div className="mt-8 p-6 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <p className="text-blue-600 font-bold mb-2">Ligue Agora 24h</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-3xl font-black text-blue-800 block mb-4">
                  {DISPLAY_PHONE}
                </a>
                <p className="text-xs text-blue-400 uppercase font-bold tracking-widest">365 Dias por Ano</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero - Mobile Focused */}
        <section id="início" className="pt-24 pb-12 bg-white">
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Clock size={12} /> Emergências S.O.S 24 Horas
              </div>
              <h1 className="text-4xl font-black leading-tight mb-4 tracking-tight">
                Reparações de <span className="text-blue-600">Emergência</span> em sua Casa
              </h1>
              <p className="text-slate-500 text-sm mb-8 px-4">
                Mais de 35 anos de experiência em reparações urgentes. Serviço especializado tipo bombeiros para desentupimentos e inundações com garantia de 1 ano.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className="bg-blue-600 text-white p-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 active:scale-95 transition-transform"
                >
                  <Phone className="w-6 h-6 fill-current" />
                  Ligue Agora
                </a>
                <div className="flex gap-2">
                  <div className="flex-1 bg-slate-900 text-white p-4 rounded-2xl text-center">
                    <p className="text-[10px] uppercase font-bold opacity-60">Experiência</p>
                    <p className="text-lg font-black">+35 Anos</p>
                  </div>
                  <div className="flex-1 bg-emerald-500 text-white p-4 rounded-2xl text-center">
                    <p className="text-[10px] uppercase font-bold opacity-60">Garantia</p>
                    <p className="text-lg font-black">1 Ano</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Services Grid */}
        <section id="serviços" className="py-12 px-4">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                <div className={`${service.bg} ${service.color} w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center`}>
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-lg leading-none mb-1">{service.title}</h3>
                  <p className="text-slate-500 text-xs">{service.description}</p>
                </div>
                <ChevronRight size={20} className="ml-auto text-slate-200" />
              </div>
            ))}
          </div>
        </section>

        {/* About / Context */}
        <section id="sobre" className="py-12 bg-slate-900 text-white rounded-[3rem] mx-2 px-6">
          <h2 className="text-2xl font-black mb-6">Reparações e Emergências</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A Agostinho Raimundo é uma empresa líder em reparações de emergência. Atuamos com a rapidez de bombeiros em desentupimentos e roturas. Temos como lema a satisfação e garantia de 1 ano para o nosso cliente.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <ShieldCheck className="text-emerald-400" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Garantia de Serviços</p>
                <p className="text-xs text-slate-500">Todos os serviços prestados pelos nossos técnicos têm garantia de 1 ano.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Clock className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Serviço Permanente S.O.S</p>
                <p className="text-xs text-slate-500">Disponíveis 24 horas, 365 dias por ano, incluindo feriados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations - Mobile Optimized List */}
        <section id="zonas" className="py-12 px-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-xl font-black mb-4 text-center">Onde Atuamos</h2>
            <p className="text-slate-500 text-xs text-center mb-8">
              Minimizamos os custos de deslocação para apresentar os melhores preços do mercado.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {LOCATIONS.map(loc => (
                <span key={loc} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-100">
                  {loc}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Atendimento em toda a</p>
              <p className="font-black text-slate-800">Grande Lisboa & Margem Sul</p>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile-First Footer */}
      <footer className="px-6 py-12 text-center text-slate-400">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Agostinho Raimundo Reparações</p>
        <p className="text-xs mb-8">Satisfação e Garantia de 1 Ano para o Cliente</p>
        <div className="flex justify-center gap-8 mb-8">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
        </div>
        <p className="text-[10px]">© 2026 Todos os direitos reservados.</p>
      </footer>

      {/* Bottom Sticky Action Bar - CRITICAL FOR MOBILE */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-4 z-50 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <Phone size={20} className="fill-current" />
          Ligue Agora
        </a>
        <button 
          onClick={() => scrollToSection('serviços')}
          className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <Wrench size={24} />
        </button>
      </div>
    </div>
  );
}
