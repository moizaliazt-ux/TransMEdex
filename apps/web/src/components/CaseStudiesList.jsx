import React from 'react';
import { caseStudies } from '@/data/caseStudiesData.js';

function MetricsCard({ bullets }) {
  return (
    <div className="rounded-md border border-slate-100 bg-slate-50 p-4">
      <h4 className="text-sm font-semibold mb-3">Key Metrics</h4>
      <ul className="space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}><strong className="block text-slate-900">{b.title}</strong><span className="text-slate-700"> {b.text}</span></li>
        ))}
      </ul>
    </div>
  );
}

function Gallery({ images }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`gallery-${i}`} className="w-full h-28 object-cover rounded-md border" loading="lazy" decoding="async" />
      ))}
    </div>
  );
}

export default function CaseStudiesList() {
  return (
    <div className="space-y-32">
      {caseStudies.map((c) => (
        <section key={c.slug} className="mx-auto max-w-6xl py-16">
          <div className="rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="w-full h-64">
              <img src={c.heroImage} alt={c.heroTitle} className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>

            <div className="grid gap-10 lg:grid-cols-3 p-12">
              <div className="lg:col-span-2 pr-6">
                <p className="text-sm uppercase tracking-widest text-primary/80">{c.tag}</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight">{c.heroTitle}</h2>
                <p className="mt-4 text-slate-600">{c.heroSubtitle}</p>

                <h3 className="mt-8 text-xl font-semibold">{c.mainHeading}</h3>
                <p className="mt-3 text-slate-600 whitespace-pre-line">{c.mainBody}</p>

                {c.details && (
                  <div className="mt-6 space-y-3">
                    {c.details.map((d, i) => (
                      <p key={i} className="text-slate-700">{d}</p>
                    ))}
                  </div>
                )}

                {c.gallery && <Gallery images={c.gallery} />}
              </div>

              <div className="lg:col-span-1">
                <MetricsCard bullets={c.bullets} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
