'use client';

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Zap, 
  Target, 
  Instagram, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      id: 'inicial',
      title: 'HEROICOS INICIAL',
      subtitle: 'PLAN CAMBIO FÍSICO',
      price: '$120.000',
      color: 'bg-white text-black',
      accent: 'border-zinc-200',
      features: [
        'Evaluación inicial-final',
        'Entrenamiento funcional',
        'Entrenamiento full body',
        'Polera heroicos de regalo',
        'Mensualidad GYM incluida'
      ],
      description: 'El punto de partida para tu transformación.'
    },
    {
      id: 'fitness',
      title: 'HEROICOS FITNESS',
      subtitle: 'PLAN MUSCULACIÓN',
      price: '$150.000',
      color: 'bg-[#D9E021] text-black',
      accent: 'border-[#D9E021]',
      popular: true,
      features: [
        'Evaluación Inicial - Final',
        'Entrenamiento de Fuerza',
        'Aumento de masa Muscular',
        'Bajar % Graso',
        'Polera heroicos',
        'Mensualidad GYM'
      ],
      description: 'Construye una estética poderosa y funcional.'
    },
    {
      id: 'elite',
      title: 'HEROICOS ELITE',
      subtitle: 'PLAN DEPORTIVO',
      price: '$220.000',
      color: 'bg-zinc-900 text-white',
      accent: 'border-zinc-700',
      features: [
        'Evaluación inicial-final',
        'Batería de test inicial y final',
        'Entrenamiento Fuerza-Potencia',
        'Entrenamiento de Resistencia',
        'Planificación Deportiva',
        'Polera heroicos',
        'Mensualidad GYM'
      ],
      description: 'Rendimiento máximo para atletas exigentes.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D9E021] selection:text-black">
      {/* Navegación */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D9E021] flex items-center justify-center rounded-sm rotate-3">
              <Dumbbell className="text-black" size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">HEROICOS <span className="text-[#D9E021]">FITNESS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold uppercase text-xs tracking-widest">
            <a href="#inicio" className="hover:text-[#D9E021] transition-colors">Inicio</a>
            <a href="#metodo" className="hover:text-[#D9E021] transition-colors">Método</a>
            <a href="#planes" className="hover:text-[#D9E021] transition-colors">Planes</a>
            <a href="#contacto" className="bg-[#D9E021] text-black px-6 py-2 rounded-full hover:scale-105 transition-transform">Inscribirme</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-3xl font-black tracking-widest uppercase italic">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="#metodo" onClick={() => setIsMenuOpen(false)}>Método</a>
          <a href="#planes" onClick={() => setIsMenuOpen(false)}>Planes</a>
          <a href="#contacto" className="text-[#D9E021]" onClick={() => setIsMenuOpen(false)}>Inscribirme</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
            alt="Heroicos Background" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <p className="text-[#D9E021] font-black tracking-[0.4em] uppercase mb-4 text-sm">Academia Fitness Personalizada</p>
          <h1 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter italic uppercase">
            ESCULPE TU <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>HÉROE INTERIOR</span>
          </h1>
          <div className="flex flex-col md:row gap-4 justify-center items-center">
            <a href="#planes" className="bg-[#D9E021] text-black px-10 py-5 rounded-sm font-black text-lg flex items-center gap-2 hover:bg-white transition-all group">
              VER PLANES <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Sección Planes */}
      <section id="planes" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 italic uppercase">NUESTROS <span className="text-[#D9E021]">PLANES</span></h2>
            <div className="w-24 h-2 bg-[#D9E021] mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                onMouseEnter={() => setActivePlan(plan.id)}
                onMouseLeave={() => setActivePlan(null)}
                className={`relative flex flex-col rounded-3xl transition-all duration-500 overflow-hidden border-2 ${plan.accent} 
                  ${activePlan === plan.id ? 'scale-105 z-10' : 'scale-100'} 
                  ${plan.color}`}
              >
                <div className="p-10 pb-4 text-center">
                  <h3 className="text-3xl font-black mb-1 italic leading-tight">{plan.title}</h3>
                  <p className="text-[10px] font-black tracking-[0.3em] mb-8 opacity-70 uppercase underline decoration-2 underline-offset-4">{plan.subtitle}</p>
                </div>

                <div className="px-10 flex-grow">
                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight">
                        <CheckCircle2 size={18} className="shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 pt-4 mt-auto">
                  <div className="text-center mb-8">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <p className="text-[10px] font-bold opacity-60 mt-1 uppercase">Suscripción Mensual</p>
                  </div>
                  <button className={`w-full py-5 rounded-xl font-black text-sm tracking-widest transition-all uppercase
                    ${plan.id === 'fitness' ? 'bg-black text-[#D9E021] hover:bg-zinc-800' : 
                      plan.id === 'elite' ? 'bg-[#D9E021] text-black hover:bg-white' : 
                      'bg-black text-white hover:bg-zinc-800'}`}>
                    Inscribirme ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer id="contacto" className="bg-black py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#D9E021] flex items-center justify-center rounded-sm">
              <Dumbbell className="text-black" size={18} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">HEROICOS <span className="text-[#D9E021]">FITNESS</span></span>
          </div>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">Si quieres más información de nuestros entrenamientos, visita nuestro Instagram <span className="text-[#D9E021] font-bold">@HEROICOS_FIT_CHILE</span></p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.instagram.com/heroicos_fit_chile/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-[#D9E021] hover:text-black transition-all">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">© 2024 Academia Heroicos Fitness - Santiago, Chile</p>
        </div>
      </footer>
    </div>
  );
}