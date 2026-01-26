"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Partner logos from invitation
const partners = [
  { name: "Quality of Life Program", nameAr: "برنامج جودة الحياة" },
  { name: "CUFA" },
  { name: "Van Wagner" },
  { name: "Prefeitura Rio" },
  { name: "Globo" },
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
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center min-w-[60px] sm:min-w-[80px]">
      <div
        className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl text-white leading-none"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="font-[family-name:var(--font-nunito)] font-normal text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8a8a8a] mt-1 sm:mt-2">
        {label}
      </div>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl text-[#f7c12d] opacity-40 self-start mt-0.5 hidden sm:block">
      :
    </span>
  );
}

export default function ComingSoon() {
  const timeLeft = useCountdown();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      {/* Background layers */}
      <div className="bg-pattern" />
      <div className="bg-gradient" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Logo */}
        <div className="animate-fade-in-up text-center mb-8 sm:mb-10">
          <Image
            src="/images/wlc_logo_transparent.png"
            alt="World Legends Cup 2026"
            width={280}
            height={400}
            className="w-[180px] sm:w-[220px] md:w-[280px] h-auto animate-pulse-glow"
            priority
          />
        </div>

        {/* Accent Bar */}
        <div className="animate-fade-in-up delay-100 w-[60px] h-1 bg-[#f7c12d] mb-8" />

        {/* Coming Soon Badge */}
        <div className="animate-fade-in-up delay-200 text-center mb-10">
          <div className="inline-block font-[family-name:var(--font-bebas)] text-sm tracking-[0.3em] uppercase text-[#070808] bg-[#f7c12d] px-7 py-2.5 mb-6">
            Coming Soon
          </div>
          <p className="font-[family-name:var(--font-nunito)] font-light text-base sm:text-lg text-white/80 max-w-md mx-auto leading-relaxed">
            The first-of-its-kind knockout tournament bringing together football
            legends from around the globe.
          </p>
        </div>

        {/* Countdown */}
        <div className="animate-fade-in-up delay-300 text-center mb-10 sm:mb-12">
          <p className="font-[family-name:var(--font-bebas)] text-xs sm:text-sm tracking-[0.35em] uppercase text-[#f7c12d] mb-5">
            Global Launch Event
          </p>
          <div className="flex justify-center items-start gap-4 sm:gap-6 md:gap-10">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownSeparator />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownSeparator />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownSeparator />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* Event Info */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 py-6 border-t border-b border-[#f7c12d]/15 mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-[18px] h-[18px] text-[#f7c12d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.12em] uppercase text-white">
              Rio de Janeiro, Brazil
            </span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#f7c12d]" />

          <div className="flex items-center gap-2.5">
            <svg
              className="w-[18px] h-[18px] text-[#f7c12d]"
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
            <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.12em] uppercase text-white">
              February 2026
            </span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#f7c12d]" />

          <div className="flex items-center gap-2.5">
            <svg
              className="w-[18px] h-[18px] text-[#f7c12d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.12em] uppercase text-white">
              World Class Legends
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <div className="animate-fade-in-up delay-500 text-center w-full max-w-md mb-14">
          <h3 className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.3em] uppercase text-white mb-5">
            Be The First To Know
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 font-[family-name:var(--font-nunito)] text-sm bg-white/5 border border-[#f7c12d]/20 sm:border-r-0 text-white placeholder:text-[#8a8a8a] focus:bg-white/10 focus:border-[#f7c12d] transition-all duration-300"
            />
            <button
              type="submit"
              className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.15em] uppercase px-7 py-3.5 bg-[#f7c12d] border-none text-[#070808] cursor-pointer transition-all duration-300 hover:bg-[#d4a520] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(247,193,45,0.25)]"
            >
              Notify Me
            </button>
          </form>
          {submitted && (
            <p className="font-[family-name:var(--font-nunito)] text-sm text-[#f7c12d] mt-4 animate-fade-in">
              Thank you. You&apos;ll be the first to know.
            </p>
          )}
        </div>

        {/* Footer / Partners */}
        <footer className="animate-fade-in-up delay-600 text-center mt-auto">
          <p className="font-[family-name:var(--font-bebas)] text-[11px] tracking-[0.35em] uppercase text-[#8a8a8a] mb-4">
            In Partnership With
          </p>
          <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap opacity-50 mb-8">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="font-[family-name:var(--font-nunito)] font-semibold text-[11px] tracking-[0.06em] text-white uppercase"
              >
                {partner.name}
              </span>
            ))}
          </div>
          <p className="font-[family-name:var(--font-nunito)] font-light text-[11px] tracking-[0.12em] text-[#8a8a8a] py-5 border-t border-[#f7c12d]/10">
            &copy; 2026 World Legends Cup. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
