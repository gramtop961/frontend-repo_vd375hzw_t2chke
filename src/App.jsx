import React from 'react';
import Hero from './components/Hero.jsx';
import Bio from './components/Bio.jsx';
import ProjectsGallery from './components/ProjectsGallery.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Atelier</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="hover:text-neutral-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-neutral-600 transition-colors">About</a>
            <a href="#contact" className="rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about">
          <Bio />
        </section>
        <section id="work">
          <ProjectsGallery />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <footer className="mt-24 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Atelier — Modern Architecture</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-neutral-900">Get in touch</a>
            <a href="#work" className="hover:text-neutral-900">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
