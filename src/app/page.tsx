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
];

// Countdown target: February 2, 2026 at 4:30 PM Rio time (UTC-3)
const TARGET_DATE = new Date("2026-02-02T19:30:00Z").getTime();

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

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

// Countdown card component
function CountdownCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 md:p-8 min-w-[75px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[150px] text-center">
      <div
        className="font-[family-name:var(--font-bebas)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f7c12d] leading-none"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="font-[family-name:var(--font-bebas)] font-medium text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-white/40 mt-3 sm:mt-4">
        {label}
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const timeLeft = useCountdown();
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

      <main className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-[30px] sm:py-[50px] overflow-hidden">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f7c12d]/30 to-transparent" />

        {/* Logo Section */}
        <div className="animate-fade-in-scale text-center mb-[25px] sm:mb-[35px] md:mb-[45px] relative">
          {/* Glow ring behind logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-gradient-radial from-[#f7c12d]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

          <Image
            src="/images/wlc_logo_new.png"
            alt="World Legends Cup 2026"
            width={342}
            height={866}
            className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-auto animate-pulse-glow relative z-10"
            priority
          />
        </div>

        {/* Title Section */}
        <div className="animate-fade-in-up delay-200 text-center mb-[30px] sm:mb-[40px] md:mb-[50px] max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#f7c12d]" />
            <span className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.4em] uppercase text-[#f7c12d]">
              Brazil 2026
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#f7c12d]" />
          </div>

          <h1 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] uppercase text-white mb-4 leading-tight">
            The Legends <span className="gold-text">Return</span>
          </h1>

          <p className="font-[family-name:var(--font-bebas)] font-light text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed px-4">
            The first-of-its-kind knockout tournament bringing together football
            legends from around the globe. Where legacy meets glory.
          </p>
        </div>

        {/* Countdown Section */}
        <div className="w-full max-w-4xl mx-auto mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="animate-fade-in-up delay-300 font-[family-name:var(--font-bebas)] text-sm sm:text-base tracking-[0.4em] uppercase text-[#f7c12d]/80 mb-8 sm:mb-10 text-center">
            Global Launch Event
          </p>

          <div className="animate-fade-in-up delay-400 flex justify-center items-center gap-3 sm:gap-4 md:gap-5">
            <CountdownCard value={timeLeft.days} label="Days" />
            <span className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl md:text-3xl text-[#f7c12d]/20 self-center">:</span>
            <CountdownCard value={timeLeft.hours} label="Hours" />
            <span className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl md:text-3xl text-[#f7c12d]/20 self-center">:</span>
            <CountdownCard value={timeLeft.minutes} label="Min" />
            <span className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl md:text-3xl text-[#f7c12d]/20 self-center">:</span>
            <CountdownCard value={timeLeft.seconds} label="Sec" />
          </div>
        </div>

        {/* Event Info Pills */}
        <div className="animate-fade-in-up delay-700 flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-[30px] sm:mb-[40px] md:mb-[50px]">
          {[
            { icon: "location", text: "Rio de Janeiro" },
            { icon: "calendar", text: "February 2026" },
            { icon: "trophy", text: "8 Nations" },
          ].map((item, i) => (
            <div
              key={item.text}
              className="glass-card rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 hover:border-[#f7c12d]/40 transition-colors duration-300"
            >
              {item.icon === "location" && (
                <svg
                  className="w-4 h-4 text-[#f7c12d]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              )}
              {item.icon === "calendar" && (
                <svg
                  className="w-4 h-4 text-[#f7c12d]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              )}
              {item.icon === "trophy" && (
                <svg
                  className="w-4 h-4 text-[#f7c12d]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0012 0V2z" />
                </svg>
              )}
              <span className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.1em] uppercase text-white/90">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Invitation Only Badge */}
        <div className="animate-fade-in-up delay-750 mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <div className="glass-card rounded-lg px-6 sm:px-8 py-4 sm:py-5 text-center border-[#f7c12d]/30">
            <p className="font-[family-name:var(--font-bebas)] text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase text-[#f7c12d]">
              By Invitation Only
            </p>
          </div>
        </div>

        {/* Press Registration Section */}
        <div className="animate-fade-in-up delay-800 w-full max-w-lg mx-auto mb-[40px] sm:mb-[50px] md:mb-[60px] px-4">
          <div className="divider-glow mb-10" />

          <h3 className="font-[family-name:var(--font-bebas)] text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-white text-center mb-3">
            Press Registration
          </h3>
          <p className="font-[family-name:var(--font-bebas)] text-sm sm:text-base text-white/40 text-center mb-8">
            Media accreditation for the Global Launch Event
          </p>

          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/1w0A7Xcwk48QfpJcq3FIlGun4kFuZIb7SxkwzzWtKFPA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-golden inline-block font-[family-name:var(--font-bebas)] text-sm sm:text-base tracking-[0.2em] uppercase px-10 sm:px-12 py-4 sm:py-5 bg-[#f7c12d] rounded-lg text-[#070808] cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Footer / Partners */}
        <footer className="animate-fade-in-up delay-900 text-center mt-auto w-full pt-[20px] sm:pt-[30px]">
          <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.4em] uppercase text-white/30 mb-8 sm:mb-12">
            Powered By Global Partners
          </p>

          <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 flex-wrap mb-12 sm:mb-16 px-4 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <Image
                key={i}
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="h-[65px] sm:h-[85px] md:h-[110px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>

          <div className="divider-glow mb-8" />

          <p className="font-[family-name:var(--font-bebas)] font-light text-xs sm:text-sm tracking-[0.15em] text-white/20 pb-8 sm:pb-12">
            &copy; 2026 World Legends Cup. All Rights Reserved.
          </p>
        </footer>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f7c12d]/20 to-transparent" />
      </main>
    </>
  );
}
