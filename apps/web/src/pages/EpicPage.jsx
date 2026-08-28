import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ArrowRight, ShieldCheck, Clock3, Layers, CheckCircle2 } from 'lucide-react';

export default function EpicPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Epic Contact Us request:', form);
    alert('Thank you — your Epic Contact Us request has been received.');
  };

  const solutions = [
    'Epic revenue integrity audits',
    'Denial prevention for Epic claims',
    'Epic-specific CPT/ICD/HCPCS coding',
    'Detailed Epic reporting and claim analytics',
  ];

  const outcomes = [
    { title: 'Faster claim approval', text: 'Epic-adapted workflows and pre-submission clean claim checks reduce rejections.' },
    { title: 'Higher reimbursement', text: 'Specialty billing experts optimize Epic charge capture and payer rules.' },
    { title: 'Lower denial rates', text: 'Root-cause analysis and appeals for Epic-specific denials.' },
  ];

  const benefits = [
    'Epic-native billing workflows',
    'Secure direct login into your Epic environment',
    'HIPAA-compliant claims management',
    'Dedicated Epic billing specialists',
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#4f1774] via-[#7a2d94] to-[#54168f] text-white">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_40%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Epic EHR Billing</p>
                  <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">Epic Medical Billing Services</h1>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
                    Get paid faster from your Epic EHR system with TransMedex. We combine Epic-specific billing workflows, expert coding, and denial prevention to keep your revenue moving.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Request Epic Consult</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent rounded-full px-8 py-3 text-base font-semibold text-white border-white/20 hover:border-white/40 hover:bg-white hover:text-slate-900">
                      <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
                    </Button>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                        <p className="font-semibold">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12  items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Epic Billing</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">What is Epic EHR and How Does Its Billing System Work?</h2>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Epic is one of the most widely used enterprise EHR platforms in the United States. Its billing engine is built for complex workflows, and TransMedex is experienced in navigating Epic-specific claim rules, charge capture, and payer configurations.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 p-6">
                      <h3 className="font-semibold text-slate-950">Integrated charge workflows</h3>
                      <p className="mt-3 text-sm text-slate-600">We align your clinical order entry with billing and code capture inside Epic.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-6">
                      <h3 className="font-semibold text-slate-950">Claim rules optimization</h3>
                      <p className="mt-3 text-sm text-slate-600">Our team applies Epic payer rules to reduce denials and speed payments.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <img
                    src="/images/emr/epic-hero.svg"
                    alt="Epic billing illustration"
                    className="w-full rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-3">
                {outcomes.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">How Does TransMedex's Epic Medical Billing Support Work?</p>
                    <h2 className="text-3xl font-bold text-slate-950">Epic Medical Billing Support Workflow</h2>
                    <p className="text-slate-600">TransMedex's Epic billing services work through proven Epic-specific processes, from pre-billing validation to ongoing Epic system support.</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                    <div className="grid gap-4">
                      {[
                        {
                          step: 'Step 1.',
                          title: 'Billing Audit and Pre-bill Discovery',
                          description: 'We review Epic charge capture and claim readiness, identify gaps, and create a prioritized action plan within 10 days.',
                        },
                        {
                          step: 'Step 2.',
                          title: 'HIPAA-Compliant System Access',
                          description: 'TransMedex works securely inside your Epic system, with audited access and approved Epic login procedures.',
                        },
                        {
                          step: 'Step 3.',
                          title: 'Epic-Specific Workflow Build',
                          description: 'We design Epic workflows to align clinical documentation, coding, and billing automation with your Epic configuration.',
                        },
                        {
                          step: 'Step 4.',
                          title: 'Claims Processing Begins',
                          description: 'Clean claims are submitted through Epic with dedicated claim accuracy checks and appeals support.',
                        },
                        {
                          step: 'Step 5.',
                          title: 'Monthly KPI Review & Rule Updates',
                          description: 'Ongoing Epic performance reports, code updates, and denial trend reviews keep your billing optimized.',
                        },
                      ].map((item) => (
                        <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6">
                          <div className="mb-3 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                            <span>{item.step}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-[#4f1774] via-[#6e2c95] to-[#3c1060] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-3">
                {[
                  { value: '$500M+', label: 'Value of claims processed' },
                  { value: '24', label: 'Accounts resolved daily' },
                  { value: '48Hours', label: 'Turnaround time (TAT)' },
                  { value: '99%', label: 'Customer retention' },
                  { value: '2.7M', label: 'Number of claims processed' },
                  { value: '98%', label: 'First-pass clean claims rate' },
                  { value: '5%-10%', label: 'Revenue improvement' },
                  { value: '30%', label: 'Reduction in AR' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center">
                    <div className="text-4xl font-bold text-white">{metric.value}</div>
                    <p className="mt-3 text-sm text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Why use Epic vs in-house billing?</p>
                    <h2 className="text-3xl font-bold text-slate-950">Should you use Epic's own billing services or outsource to TransMedex?</h2>
                    <p className="text-slate-600">We help providers compare their internal Epic billing model against TransMedex's managed specialist approach.</p>
                  </div>
                  <div className="lg:col-span-2 overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                      <thead>
                        <tr>
                          <th className="border-b border-slate-200 px-4 py-3 font-semibold">Feature</th>
                          <th className="border-b border-slate-200 px-4 py-3 font-semibold">In-house Epic Team</th>
                          <th className="border-b border-slate-200 px-4 py-3 font-semibold">TransMedex</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: 'Team structure', left: 'Smaller local or internal team', right: 'Dedicated Epic billing specialists', highlight: true },
                          { label: 'Coding reviews', left: 'Limited to internal Epic auditors', right: 'Advanced Epic revenue integrity reviews', highlight: true },
                          { label: 'Denial management', left: 'Handled by in-house claims nurses', right: 'Epic-specific denial experts and appeals ops' },
                          { label: 'Revenue capture', left: 'Reactive after payer audits', right: 'Proactive charge capture and clean claims' },
                          { label: 'Pricing model', left: 'Fixed internal overhead', right: 'Flexible outcomes-based billing support' },
                        ].map((row) => (
                          <tr key={row.label} className={row.highlight ? 'bg-primary/5' : ''}>
                            <td className="border-b border-slate-200 px-4 py-4 font-semibold text-slate-900">{row.label}</td>
                            <td className="border-b border-slate-200 px-4 py-4">{row.left}</td>
                            <td className="border-b border-slate-200 px-4 py-4">{row.right}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 items-center ">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Which specialties does TransMedex support with Epic billing?</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Specialties supported in Epic medical billing</h2>
                  <p className="mt-5 text-slate-600">TransMedex delivers Epic billing support for a full range of specialties, from primary care to specialty procedures.</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {['Cardiology','Orthopedics','Nephrology','Pediatrics','Pain Management','Neurology','OBGYN','Gastroenterology'].map((item) => (
                      <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-700">
                        <p className="font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/specialties">View More Specialties</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
                  <img src="/images/emr/epic-ai.svg" alt="Epic AI billing illustration" className="w-full rounded-3xl" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Epic Billing Services</p>
                    <h2 className="text-3xl font-bold text-slate-950">What is included in TransMedex's Epic Billing Services?</h2>
                    <p className="text-slate-600">We provide Epic-focused billing support designed to reduce denials, accelerate reimbursement, and keep your practice productive.</p>
                  </div>

                  {[
                    {
                      title: 'Clinical Documentation Support',
                      description: 'Improve documentation accuracy for Epic consults, procedures, and lab orders to support clean claims.',
                    },
                    {
                      title: 'Medical Coding (CPT/ICD-10/HCPCS)',
                      description: 'Expert Epic coders apply correct codes and modifiers so claims are aligned with payer expectations.',
                    },
                    {
                      title: 'Channel-based clearinghouse communication',
                      description: 'We manage claim delivery, remittance, and eligibility checks through Epic-compatible clearinghouse workflows.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

