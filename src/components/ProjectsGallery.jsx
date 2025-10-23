import React from 'react';

const projects = [
  {
    title: 'Courtyard House',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    location: 'Lisbon, PT',
    year: '2024',
  },
  {
    title: 'Linear Studio',
    image:
      'https://images.unsplash.com/photo-1531787452668-7b15f7f8b644?q=80&w=1600&auto=format&fit=crop',
    location: 'Copenhagen, DK',
    year: '2023',
  },
  {
    title: 'Cliff Residence',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
    location: 'Monterey, US',
    year: '2022',
  },
  {
    title: 'Atrium Office',
    image:
      'https://images.unsplash.com/photo-1530039967999-e7f4f0f4e0f4?q=80&w=1600&auto=format&fit=crop',
    location: 'Berlin, DE',
    year: '2022',
  },
];

export default function ProjectsGallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
        <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Request full portfolio</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-colors">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.title}</h3>
                <span className="text-xs text-neutral-500">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{p.location}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
