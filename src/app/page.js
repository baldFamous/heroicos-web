'use client';

import React, { useState, useEffect } from 'react';
import {
  Dumbbell,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Instagram,
  ClipboardList,
  Activity,
  TrendingUp
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

  /* =========================
     METODOLOGÍA
  ==========================*/
  const methodology = [
    {
      title: "Diagnóstico",
      icon: <ClipboardList />,
      desc: "Evaluación inicial de fuerza, postura y composición corporal."
    },
    {
      title: "Programación",
      icon: <Activity />,
      desc: "Plan estructurado con cargas adaptadas a tu fisiología."
    },
    {
      title: "Evolución",
      icon: <TrendingUp />,
      desc: "Ajustes progresivos cada 4 semanas según desempeño."
    }
  ];

  /* =========================
     PLANES
  ==========================*/
  const plans = [
    {
      id: 'inicial',
      title: '"Heroicos Inicial"',
      desc: 'Conoce tu cuerpo y los beneficios de entrenar de forma guiada.',
      price: '$120.000',
      cardBg: 'bg-white',
      titleColor: 'text-black',
      lineColor: 'bg-black',
      descColor: 'text-black',
      priceBg: 'bg-white',
      priceColor: 'text-black',
      features: [
        '15 días Personalizados',
        'evaluación inicio-final',
        'planificación mensual',
        'polera heroicos',
        'gimnasio a elección'
      ]
    },
    {
      id: 'fitness',
      title: '"Heroicos Fitness"',
      desc: 'Desarrolla musculatura y fuerza entrenando como un Héroe, logrando masa magra con bajo % graso.',
      price: '$150.000',
      cardBg: 'bg-[#fcf30d]',
      titleColor: 'text-black',
      lineColor: 'bg-black',
      descColor: 'text-black',
      priceBg: 'bg-[#fcf30d]',
      priceColor: 'text-black',
      popular: true,
      features: [
        '20 días Personalizados',
        'evaluación Inbody',
        'evaluación inicio-final',
        'planificación mensual',
        'polera heroicos',
        'gimnasio a elección'
      ]
    },
    {
      id: 'elite',
      title: '"Heroicos Elite"',
      desc: 'Explota tu máximo potencial y convierte en un héroe nivel elite preparado para todo.',
      price: '$220.000',
      cardBg: 'bg-[#1e1e1e]',
      titleColor: 'text-[#fcf30d]',
      lineColor: 'bg-[#fcf30d]',
      descColor: 'text-[#fcf30d]',
      priceBg: 'bg-[#1e1e1e]',
      priceColor: 'text-[#fcf30d]',
      features: [
        '40 días Personalizados',
        'evaluación Inbody',
        'evaluación inicio-final',
        'planificación Deportiva bimensual',
        'polera heroicos',
        'gimnasio a elección'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#fcf30d] selection:text-black">

      {/* =========================
          NAVBAR
      ==========================*/}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-zinc-800' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#fcf30d] flex items-center justify-center rounded-sm rotate-3">
              <Dumbbell className="text-black" size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">
              HEROICOS <span className="text-[#fcf30d]">FITNESS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold uppercase text-xs tracking-widest">
            <a href="#inicio" className="hover:text-[#fcf30d]">Inicio</a>
            {/*<a href="#metodo" className="hover:text-[#fcf30d]">Método</a>*/}
            <a href="#planes" className="hover:text-[#fcf30d]">Planes</a>
            <a href="https://www.instagram.com/m/heroicos_fit_chile" target="_blank" rel="noopener noreferrer" className="bg-[#fcf30d] text-black px-6 py-2 rounded-full">
              Inscribirme
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-3xl font-black uppercase italic">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="#metodo" onClick={() => setIsMenuOpen(false)}>Método</a>
          <a href="#planes" onClick={() => setIsMenuOpen(false)}>Planes</a>
          <a href="https://www.instagram.com/m/heroicos_fit_chile" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-[#fcf30d]">
            Inscribirme
          </a>
        </div>
      )}

      {/* =========================
          HERO
      ==========================*/}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
          <img
            src="fondo.webp"
            alt="Entrenamiento Personalizado Heroicos Fitness"
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <p className="text-[#fcf30d] font-black tracking-[0.4em] uppercase mb-4 text-sm">
            Academia Fitness Personalizada
          </p>

          <h1 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter italic uppercase">
            ESCULPE TU <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              HÉROE INTERIOR
            </span>
          </h1>

          <a href="#planes" className="bg-[#fcf30d] text-black px-10 py-5 rounded-sm font-black text-lg inline-flex items-center gap-2 hover:bg-white transition-all group">
            VER PLANES
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* =========================
          MÉTODO HEROICO
      ==========================
      <section id="metodo" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-black italic mb-10 uppercase">
              EL MÉTODO <span className="text-[#fcf30d]">HEROICO</span>
            </h2>

            <div className="space-y-8">
              {methodology.map((m, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-3 bg-black rounded-lg text-[#fcf30d]">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase">{m.title}</h4>
                    <p className="text-zinc-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800 rounded-3xl h-96 flex items-center justify-center text-zinc-600 font-bold">
            [Espacio para Video / Transformaciones]
          </div>

        </div>
      </section>
*/}
      {/* =========================
          PLANES
      ==========================*/}
      <section id="planes" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase">
              NUESTROS <span className="text-[#fcf30d]">PLANES</span>
            </h2>
            <div className="w-24 h-2 bg-[#fcf30d] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map(plan => (
              <div
                key={plan.id}
                onMouseEnter={() => setActivePlan(plan.id)}
                onMouseLeave={() => setActivePlan(null)}
                className={`flex flex-col gap-4 transition-all duration-500
                  ${activePlan === plan.id ? 'scale-105 z-10' : 'scale-100'}
                `}
              >
                <div className={`relative flex flex-col rounded-[2.5rem] p-8 h-full ${plan.cardBg}`}>
                  <div className="mb-6">
                    <h3 className={`text-4xl leading-none font-black italic tracking-tighter ${plan.titleColor}`}>
                      {plan.title}
                    </h3>
                    <div className={`w-3/4 h-[3px] mt-2 mb-4 ${plan.lineColor}`}></div>
                    <p className={`font-bold leading-tight text-lg ${plan.descColor}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <p className={`font-bold text-lg mb-2 ${plan.descColor}`}>Incluye:</p>
                    <ul className={`space-y-1 ${plan.descColor}`}>
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 font-bold text-lg leading-snug">
                          <span className="mt-0.5 text-xl">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href="https://www.instagram.com/m/heroicos_fit_chile" target="_blank" rel="noopener noreferrer" className={`block rounded-full py-4 shadow-lg text-center transition-opacity hover:opacity-90 ${plan.priceBg}`}>
                  <span className={`text-5xl font-black tracking-tighter ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          FOOTER
      ==========================*/}
      <footer id="contacto" className="bg-black py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#fcf30d] flex items-center justify-center rounded-sm">
              <Dumbbell className="text-black" size={18} />
            </div>
            <span className="font-black text-2xl uppercase italic">
              HEROICOS <span className="text-[#fcf30d]">FITNESS</span>
            </span>
          </div>

          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            Más información en Instagram:
            <span className="text-[#fcf30d] font-bold"> @HEROICOS_FIT_CHILE</span>
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="https://www.instagram.com/heroicos_fit_chile/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 rounded-full hover:bg-[#fcf30d] hover:text-black transition-all"
            >
              <Instagram size={24} />
            </a>
          </div>

          <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">
            © 2024 Academia Heroicos Fitness — Santiago, Chile
          </p>

        </div>
      </footer>

    </div>
  );
}
