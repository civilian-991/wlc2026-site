"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

// Rio de Janeiro Football Landmarks
const rioLandmarks = [
  {
    id: "maracana",
    name: "Maracanã",
    subtitle: "The Temple of Football",
    description: "The legendary stadium that hosted two World Cup finals. Home to Flamengo and Fluminense, where 200,000 fans once witnessed football history.",
    image: "/images/rio/maracana.jpg",
    size: "large",
  },
  {
    id: "engenhao",
    name: "Estádio Nilton Santos",
    subtitle: "Home of Botafogo",
    description: "Also known as Engenhão, this modern 46,000-seat arena hosted Olympic football and is the proud home of Botafogo.",
    image: "/images/rio/engenhao.jpg",
    size: "tall",
  },
  {
    id: "sao-januario",
    name: "São Januário",
    subtitle: "Vasco da Gama's Fortress",
    description: "Historic 21,000-seat stadium in the heart of Rio. Vasco da Gama's home since 1927, a symbol of Brazilian football heritage.",
    image: "/images/rio/sao-januario.jpg",
    size: "medium",
  },
  {
    id: "beach-football",
    name: "Praia Football",
    subtitle: "Where Legends Are Born",
    description: "The beaches of Rio are the birthplace of Brazilian flair. From Copacabana to Ipanema, future stars learn the beautiful game barefoot on sand.",
    image: "/images/rio/beach-football.jpg",
    size: "wide",
  },
  {
    id: "flamengo",
    name: "Ninho do Urubu",
    subtitle: "Flamengo Training Center",
    description: "The Vulture's Nest - Flamengo's state-of-the-art training complex where Brazil's most popular club forges champions.",
    image: "/images/rio/flamengo-training.jpg",
    size: "medium",
  },
];

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
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    landmark: typeof rioLandmarks[0] | null;
  }>({ isOpen: false, landmark: null });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox({ isOpen: false, landmark: null });
    };
    if (lightbox.isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightbox.isOpen]);

  const openLightbox = (landmark: typeof rioLandmarks[0]) => {
    setLightbox({ isOpen: true, landmark });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, landmark: null });
  };

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

        {/* Rio de Janeiro Section - The Stage */}
        <div className="rio-section animate-fade-in-up delay-300 w-full mb-[60px] sm:mb-[80px] relative overflow-hidden">
          {/* Cinematic Atmospheric Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top fog/glow */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#f7c12d]/5 via-[#f7c12d]/2 to-transparent" />
            {/* Bottom fog */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7c12d]/5 via-[#f7c12d]/2 to-transparent" />
            {/* Side vignettes */}
            <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-[#030303] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#030303] to-transparent" />
            {/* Central spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(247,193,45,0.08)_0%,_transparent_70%)]" />
          </div>

          {/* Decorative Frame Around Section */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#f7c12d]/60 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#f7c12d]/60 to-transparent" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-[#f7c12d]/40 rounded-full" />
          </div>
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#f7c12d]/60 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#f7c12d]/60 to-transparent" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#f7c12d]/40 rounded-full" />
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#f7c12d]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[#f7c12d]/60 to-transparent" />
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#f7c12d]/40 rounded-full" />
          </div>
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#f7c12d]/60 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-[#f7c12d]/60 to-transparent" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#f7c12d]/40 rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            {/* Section Header - Enhanced */}
            <div className="text-center mb-12 sm:mb-16">
              {/* Decorative top element */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#f7c12d]/50" />
                <div className="w-1.5 h-1.5 bg-[#f7c12d] rounded-full animate-pulse" />
                <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#f7c12d]/50" />
              </div>

              <div className="inline-flex items-center gap-3 mb-5 px-6 py-2 rounded-full border border-[#f7c12d]/20 bg-[#f7c12d]/5 backdrop-blur-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f7c12d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#f7c12d]">
                  Rio de Janeiro, Brazil
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] uppercase text-white mb-5 leading-none">
                The <span className="gold-text">Stage</span> Awaits
              </h2>

              <p className="font-[family-name:var(--font-bebas)] font-light text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-6">
                Where legends will write new chapters in the Cidade Maravilhosa
              </p>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#f7c12d]/30 to-[#f7c12d]/50" />
                <svg className="w-6 h-6 text-[#f7c12d]/50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                </svg>
                <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#f7c12d]/30 to-[#f7c12d]/50" />
              </div>
            </div>

            {/* Bento Grid Gallery - Enhanced */}
            <div className="rio-bento-grid">
              {rioLandmarks.map((landmark, index) => (
                <div
                  key={landmark.id}
                  className={`rio-card rio-card-${landmark.size} group relative overflow-hidden rounded-lg cursor-pointer`}
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  {/* Image with Ken Burns effect */}
                  <div className="absolute inset-0 transition-transform duration-[2000ms] ease-out group-hover:scale-110">
                    <Image
                      src={landmark.image}
                      alt={landmark.name}
                      fill
                      className="object-cover transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Film grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

                  {/* Cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f7c12d]/0 to-[#f7c12d]/0 group-hover:from-[#f7c12d]/15 group-hover:to-transparent transition-all duration-700" />

                  {/* Vignette effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_80px_rgba(0,0,0,0.3)] transition-all duration-700 pointer-events-none" />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-lg border-2 border-white/5 group-hover:border-[#f7c12d]/50 transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(247,193,45,0.1)]" />

                  {/* Ornate corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#f7c12d]/30 group-hover:border-[#f7c12d]/80 transition-all duration-500" />
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#f7c12d]/30 group-hover:border-[#f7c12d]/80 transition-all duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#f7c12d]/30 group-hover:border-[#f7c12d]/80 transition-all duration-500" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-[#f7c12d]/50 group-hover:from-[#f7c12d] to-transparent transition-all duration-500" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#f7c12d]/30 group-hover:border-[#f7c12d]/80 transition-all duration-500" />
                  </div>

                  {/* Animated light sweep */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Content - Enhanced */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    {/* Content backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Subtitle line */}
                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <div className="h-[1px] w-6 bg-[#f7c12d]/60" />
                        <p className="font-[family-name:var(--font-bebas)] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#f7c12d]">
                          {landmark.subtitle}
                        </p>
                      </div>

                      {/* Main title */}
                      <h3 className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl md:text-3xl tracking-[0.1em] uppercase text-white group-hover:text-[#f7c12d] transition-colors duration-500 drop-shadow-lg">
                        {landmark.name}
                      </h3>
                    </div>
                  </div>

                  {/* Top badge/indicator */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    <div className="px-3 py-1 rounded-full bg-[#f7c12d]/10 backdrop-blur-md border border-[#f7c12d]/30">
                      <span className="font-[family-name:var(--font-bebas)] text-[10px] tracking-[0.2em] uppercase text-[#f7c12d]">
                        Landmark
                      </span>
                    </div>
                  </div>

                  {/* Expand icon - clickable */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(landmark);
                    }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md border border-[#f7c12d]/20 group-hover:border-[#f7c12d]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 group-hover:bg-[#f7c12d]/10 hover:!bg-[#f7c12d]/30 hover:!border-[#f7c12d] cursor-pointer z-30"
                    aria-label={`View ${landmark.name}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f7c12d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Section - Enhanced */}
            <div className="text-center mt-14 sm:mt-20">
              {/* Decorative element */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-[#f7c12d]/30" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#f7c12d]/40 rounded-full" />
                  <div className="w-1 h-1 bg-[#f7c12d]/60 rounded-full" />
                  <div className="w-1 h-1 bg-[#f7c12d]/40 rounded-full" />
                </div>
                <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-[#f7c12d]/30" />
              </div>

              <p className="font-[family-name:var(--font-bebas)] font-light text-sm sm:text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
                Home to{" "}
                <span className="text-[#f7c12d]/70">Flamengo</span>,{" "}
                <span className="text-[#f7c12d]/70">Fluminense</span>,{" "}
                <span className="text-[#f7c12d]/70">Botafogo</span> &{" "}
                <span className="text-[#f7c12d]/70">Vasco da Gama</span>
              </p>
              <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.3em] uppercase text-white/25 mt-3">
                Where football is religion
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

      {/* Lightbox Modal */}
      {lightbox.isOpen && lightbox.landmark && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fade-in" />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#f7c12d]/50 hover:bg-[#f7c12d]/10 flex items-center justify-center transition-all duration-300 z-10 group"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white/70 group-hover:text-[#f7c12d] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div
            className="relative w-[95vw] max-w-6xl max-h-[90vh] flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 animate-lightbox-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden">
              {/* Image */}
              <Image
                src={lightbox.landmark.image}
                alt={lightbox.landmark.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, 60vw"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Golden frame */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#f7c12d]/30 pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#f7c12d] rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#f7c12d] rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#f7c12d] rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#f7c12d] rounded-br-xl" />
            </div>

            {/* Info Panel */}
            <div className="lg:w-[340px] flex flex-col justify-center">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#f7c12d]" />
                <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#f7c12d]">
                  {lightbox.landmark.subtitle}
                </p>
              </div>

              {/* Title */}
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl tracking-[0.08em] uppercase text-white mb-6 leading-tight">
                {lightbox.landmark.name}
              </h2>

              {/* Description */}
              <p className="font-[family-name:var(--font-bebas)] font-light text-base sm:text-lg text-white/60 leading-relaxed mb-8">
                {lightbox.landmark.description}
              </p>

              {/* Decorative element */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#f7c12d]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.2em] uppercase text-white/40">
                  Rio de Janeiro, Brazil
                </span>
              </div>
            </div>
          </div>

          {/* Navigation hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/30">
            <span className="font-[family-name:var(--font-bebas)] text-xs tracking-[0.2em] uppercase">
              Press ESC to close
            </span>
          </div>
        </div>
      )}
    </>
  );
}
