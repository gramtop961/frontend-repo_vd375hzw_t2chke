import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Modern architecture,
              <br className="hidden md:block" />
              crafted with clarity
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl">
              I design timeless, functional spaces that elevate everyday living. My approach blends clean lines, natural light, and carefully curated materials to create work that feels both human and enduring.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                View portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Book a consultation</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-200 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop"
                alt="Modern architectural facade with clean lines and shadows"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
