import React from 'react';
import { User } from 'lucide-react';

export default function Bio() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div className="grid md:grid-cols-[280px,1fr] gap-10 md:gap-16 items-start">
        <div className="flex md:block items-center gap-6">
          <div className="h-40 w-40 md:h-56 md:w-56 rounded-2xl bg-neutral-200 flex items-center justify-center shadow-inner">
            <User className="h-14 w-14 text-neutral-500" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            I'm an architect focused on contemporary residential and boutique commercial projects. Over the past decade, I've helped clients bring ambitious ideas to life through a process that is collaborative, efficient, and deeply attentive to context.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            From early concept to final detailing, I believe in restraint, proportion, and material honesty. My work seeks calm — spaces that feel effortless, but are rigorously considered.
          </p>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Focus</dt>
              <dd className="font-medium">Residential, Hospitality</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Approach</dt>
              <dd className="font-medium">Minimal, Warm, Precise</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Location</dt>
              <dd className="font-medium">Available Worldwide</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
