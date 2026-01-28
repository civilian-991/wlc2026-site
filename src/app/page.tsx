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
  { name: "Arjen Robben", image: "/images/legends/arjen-robben.png" },
  { name: "Edgar Davids", image: "/images/legends/edgar-davids.png" },
  { name: "Nwankwo Kanu", image: "/images/legends/kanu.png" },
  { name: "Christian Karembeu", image: "/images/legends/karembeu.png" },
  { name: "Marcel Desailly", image: "/images/legends/marcel-desailly.png" },
  { name: "Christian Panucci", image: "/images/legends/panucci.png" },
  { name: "Clarence Seedorf", image: "/images/legends/seedorf.png" },
  { name: "Yasser Al-Qahtani", image: "/images/legends/yasser-al-qahtani.png" },
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

        {/* Rio de Janeiro Section */}
        <div className="animate-fade-in-up delay-300 w-full max-w-4xl mx-auto mb-[50px] sm:mb-[60px] px-6">
          <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
            {/* Rio skyline background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-80"
              style={{
                backgroundImage: "url('/images/rio-skyline.svg')",
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '110% auto',
              }}
            />

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#f7c12d]/20 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#f7c12d]/20 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#f7c12d]/20 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#f7c12d]/20 rounded-br-xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-5">
                <svg className="w-5 h-5 text-[#f7c12d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-[family-name:var(--font-bebas)] text-sm sm:text-base tracking-[0.3em] uppercase text-[#f7c12d]">
                  Rio de Janeiro, Brazil
                </span>
              </div>

              <p className="font-[family-name:var(--font-bebas)] font-light text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto mb-6">
                Rio de Janeiro&apos;s football scenery is a vibrant mix of legendary, massive arenas and intimate,
                community-based pitches nestled within its iconic landscape. The city is defined by its deep,
                almost religious, passion for the sport, with major historic clubs like{" "}
                <span className="text-white/80">Flamengo</span>,{" "}
                <span className="text-white/80">Fluminense</span>,{" "}
                <span className="text-white/80">Botafogo</span>, and{" "}
                <span className="text-white/80">Vasco da Gama</span> calling it home.
              </p>
            </div>
          </div>
        </div>

        {/* Legends Section - Cinematic Marquee */}
        <div className="animate-fade-in-up delay-400 w-full mb-[50px] sm:mb-[70px] overflow-hidden">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 px-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#f7c12d]/40" />
            <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.5em] uppercase text-[#f7c12d]/70">
              The Legends
            </p>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#f7c12d]/40" />
          </div>

          {/* Marquee container with fade edges */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

            {/* Scrolling marquee */}
            <div className="legends-marquee flex gap-6 sm:gap-8 py-4">
              {/* Double the legends for seamless loop */}
              {[...legends, ...legends].map((legend, i) => (
                <div
                  key={`${legend.name}-${i}`}
                  className="group relative flex-shrink-0 cursor-pointer"
                >
                  {/* Card container */}
                  <div className="relative w-[140px] sm:w-[160px] md:w-[180px] h-[200px] sm:h-[230px] md:h-[260px] overflow-hidden rounded-sm">
                    {/* Golden frame border */}
                    <div className="absolute inset-0 rounded-sm border border-[#f7c12d]/20 group-hover:border-[#f7c12d]/60 transition-all duration-500 z-20 pointer-events-none" />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#f7c12d]/40 group-hover:border-[#f7c12d] transition-all duration-500 z-20" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#f7c12d]/40 group-hover:border-[#f7c12d] transition-all duration-500 z-20" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#f7c12d]/40 group-hover:border-[#f7c12d] transition-all duration-500 z-20" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#f7c12d]/40 group-hover:border-[#f7c12d] transition-all duration-500 z-20" />

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070808] via-[#070808]/30 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#070808]/50 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Golden glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(247,193,45,0.15)_0%,_transparent_70%)]" />

                    {/* Player image */}
                    <Image
                      src={legend.image}
                      alt={legend.name}
                      width={200}
                      height={280}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Name plate */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20">
                      <div className="bg-[#070808]/80 backdrop-blur-sm border-t border-[#f7c12d]/30 group-hover:border-[#f7c12d]/60 transition-all duration-500 px-3 py-2">
                        <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.2em] uppercase text-white/90 group-hover:text-[#f7c12d] transition-colors duration-500 text-center truncate">
                          {legend.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
