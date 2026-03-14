'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const carRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // 1. Initial Load Animation
    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y: -40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    tl.from(statsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)', 
    }, "-=0.6");

    tl.from(carRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: 'power2.out',
    }, "-=0.8");

    // 2. Scroll-Based Animation (Fixed screen, moving car)
    gsap.to(carRef.current, {
      x: '100vw', // Move car across the screen
      ease: 'none', 
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        // This is the magic! It creates 1500px of invisible scroll space 
        // to scrub through the animation while the screen remains pinned.
        end: '+=1500', 
        scrub: 1, 
        pin: true, 
      },
    });
  }, { scope: containerRef });

  return (
    // Set to h-screen. GSAP will automatically handle the scrollbar height for us.
    <main ref={containerRef} className="relative w-full h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Hero Section */}
      <section className="h-full w-full flex flex-col justify-center items-center relative pt-10 z-10">
        
        {/* Headline */}
        <h1 
          ref={headlineRef} 
          className="text-5xl md:text-7xl font-black tracking-[0.3em] md:tracking-[0.5em] text-center ml-4 mb-16 text-slate-800 drop-shadow-sm"
        >
          WELCOME ITZ FIZZ
        </h1>

        {/* Impact Metrics */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center z-10 px-4">
          {[
            { value: '98%', label: 'Performance' },
            { value: '100%', label: 'Fluidity' },
            { value: '24/7', label: 'Smoothness' },
          ].map((stat, index) => (
            <div 
              key={index} 
              ref={(el) => { statsRef.current[index] = el; }} 
              className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 min-w-[160px]"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2 drop-shadow-sm">{stat.value}</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scrollable Visual Element (Car) */}
        <div 
          ref={carRef} 
          className="absolute bottom-10 md:bottom-20 left-[-20%] w-[350px] md:w-[600px] drop-shadow-2xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/car.png" 
            alt="Scrolling Car" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}