"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

// Global Partners
const partners = [
  { name: "Quality of Life Program", logo: "/images/partners/quality-of-life.png" },
  { name: "CUFA", logo: "/images/partners/cufa.png" },
  { name: "Van Wagner", logo: "/images/partners/van-wagner.png" },
  { name: "Rio Prefeitura", logo: "/images/partners/rio-prefeitura.png" },
  { name: "Globo", logo: "/images/partners/globo.png" },
  { name: "Estado", logo: "/images/partners/estado.png" },
];

// Legends
const legends = [
  { name: "Ronaldo Nazário", image: "/images/legends/ronaldo-nazario.png" },
  { name: "Thierry Henry", image: "/images/legends/thierry-henry.png" },
  { name: "Kaká", image: "/images/legends/kaka.png" },
  { name: "Cafu", image: "/images/legends/cafu.png" },
  { name: "Rivaldo", image: "/images/legends/rivaldo.png" },
  { name: "Ruud Gullit", image: "/images/legends/ruud-gullit.png" },
];

// Animated stars background
function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={
            {
              left: star.left,
              top: star.top,
              "--duration": star.duration,
              "--delay": star.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// Floating particles
function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `-20px`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 10}s`,
      size: `${2 + Math.random() * 4}px`,
    }));
  }, []);

  return (
    <div className="stars-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              "--float-duration": p.duration,
              "--float-delay": p.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Background layers */}
      <div className="bg-spotlight" />
      <div className="bg-pattern" />
      <div className="golden-rays" />
      {mounted && <StarField />}
      {mounted && <FloatingParticles />}
      <div className="noise-overlay" />

      <main className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-[40px] sm:py-[60px] min-h-screen">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f7c12d]/30 to-transparent" />

        {/* Logo Section */}
        <div className="animate-fade-in-scale text-center mb-[30px] sm:mb-[40px] relative">
          {/* Glow ring behind logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] rounded-full bg-gradient-radial from-[#f7c12d]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <Image
            src="/images/wlc_logo_new.png"
            alt="World Legends Cup 2026"
            width={342}
            height={866}
            className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto animate-pulse-glow relative z-10"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="animate-fade-in-up delay-200 text-center mb-[40px] sm:mb-[50px] max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.1em] uppercase text-white mb-6 leading-tight">
            Coming <span className="gold-text">Soon</span>
          </h1>

          <p className="font-[family-name:var(--font-bebas)] font-light text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed px-4">
            The first-of-its-kind knockout tournament bringing together football
            legends from around the globe. Where legacy meets glory.
          </p>
        </div>

        {/* Legends Section */}
        <div className="animate-fade-in-up delay-400 w-full max-w-5xl mx-auto mb-[50px] sm:mb-[70px]">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 px-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#f7c12d]/40" />
            <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.5em] uppercase text-[#f7c12d]/70">
              The Legends
            </p>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#f7c12d]/40" />
          </div>

          <div className="flex justify-center items-end flex-wrap gap-4 sm:gap-6 md:gap-8 px-4">
            {legends.map((legend, i) => (
              <div
                key={legend.name}
                className="group relative flex flex-col items-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Legend image container */}
                <div className="relative w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] overflow-hidden rounded-t-full">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070808] via-transparent to-transparent z-10 pointer-events-none" />

                  <Image
                    src={legend.image}
                    alt={legend.name}
                    width={200}
                    height={250}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Legend name */}
                <p className="font-[family-name:var(--font-bebas)] text-[10px] sm:text-xs tracking-[0.15em] uppercase text-white/40 group-hover:text-[#f7c12d]/80 transition-colors duration-500 mt-2 text-center">
                  {legend.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Partners */}
        <footer className="animate-fade-in-up delay-600 text-center mt-auto w-full pt-[30px] sm:pt-[40px]">
          {/* Section header with decorative lines */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 px-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#f7c12d]/40" />
            <p className="font-[family-name:var(--font-bebas)] text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#f7c12d]/60">
              Global Partners
            </p>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#f7c12d]/40" />
          </div>

          {/* Partner logos grid with uniform containers */}
          <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8 md:gap-10 mb-14 sm:mb-16 px-6 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="partner-logo-container group relative flex items-center justify-center w-[100px] sm:w-[120px] md:w-[140px] h-[50px] sm:h-[60px] md:h-[70px] rounded-lg bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-[#f7c12d]/20 hover:scale-105"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#f7c12d]/5 to-transparent pointer-events-none" />

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={70}
                  className="max-w-[80%] max-h-[70%] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 brightness-100 group-hover:brightness-110"
                />
              </div>
            ))}
          </div>

          <div className="divider-glow mb-8" />

          <p className="font-[family-name:var(--font-bebas)] font-light text-[10px] sm:text-xs tracking-[0.2em] text-white/25 pb-8 sm:pb-12">
            &copy; 2026 World Legends Cup. All Rights Reserved.
          </p>
        </footer>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f7c12d]/20 to-transparent" />
      </main>
    </>
  );
}
