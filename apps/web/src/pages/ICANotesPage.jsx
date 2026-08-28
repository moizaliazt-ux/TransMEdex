import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ClipboardCheck, Bolt, Layers, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function ICANotesPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practice: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ICANotes Contact Us request:', form);
    alert('Thank you � your ICANotes Contact Us request has been received.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', practice: '' });
  };

  const metrics = [
    { value: '$500M+', label: 'Value of claims processed' },
    { value: '24', label: 'Accounts resolved daily' },
    { value: '48 Hours', label: 'Turnaround time' },
    { value: '99%', label: 'Customer retention' },
    { value: '2.7M', label: 'Claims processed' },
    { value: '98%', label: 'First pass clean claims rate' },
    { value: '5%-10%', label: 'Revenue improvement' },
    { value: '30%', label: 'Reduction in A/R' },
  ];

  const sections = [
    {
      title: 'Medical Billing Services',
      description: 'TransMedex is a medical billing partner offering ICANotes support to clinics that need better claims accuracy, faster appeals, and cleaner revenue cycles.',
    },
    {
      title: 'ICANotes RCM',
      description: 'We build advanced ICANotes workflows that improve charge capture, denials, patient statements, and payment posting.',
    },
    {
      title: 'ICANotes Software Support',
      description: 'Our team provides ICANotes expertise across billing, scheduling, and charting so your front desk and clinical staff stay productive.',
    },
  ];

  const billingSteps = [
    'Appointment Scheduling',
    'Claim Submission',
    'Medical Coding',
    'Claim Review',
    'Claim Transmission',
    'Payment Posting',
    'Patient Follow-up',
  ];

  const advantages = [
    'Platform native ICANotes expertise',
    'Dedicated billing + coder teams',
    'Real-time charge capture monitoring',
    'Clean claim workflow optimization',
    'Denial prevention and appeals support',
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#2d1f5b] via-[#4d2f7f] to-[#321f60] text-white">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">ICANotes EHR Support</p>
                  <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Make Your Practice Successful with ICANotes EHR Support</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                    TransMedex combines ICANotes billing, claims, and software support so your team can recover revenue, reduce denials, and stay efficient inside the ICANotes workflow.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Maximize</p>
                      <p className="mt-3 text-3xl font-semibold">Revenue Cycle</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Reduce</p>
                      <p className="mt-3 text-3xl font-semibold">Denials & Delays</p>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {['Custom RCM', 'Certified Billers', 'Software Optimization'].map((item) => (
                      <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                        <p className="text-sm font-semibold text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Relieve the burden of revenue losses</p>
                  <h2 className="text-3xl font-bold text-slate-950">Relieve the burden of revenue losses with ICANotes software support</h2>
                  <p className="text-slate-600">Advanced billing teams reduce claim denials and speed collections using complete ICANotes workflow optimization and expert claims management.</p>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      'Focused on value-based care revenue growth',
                      'Fewer denials per patient encounter',
                      'Faster claims and payment posting',
                      'Reliable patient balance follow-up',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <img src="/images/emr/icanotes-hero.svg" alt="ICANotes support illustration" className="w-full rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {sections.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8  items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Affordable Revenue Cycle Management Pricing</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Affordable Revenue Cycle Management Pricing</h2>
                  <p className="mt-4 text-slate-600">Flexible ICANotes support with a simple all-in-one RCM package that includes claims, coding, posting, and denials.</p>
                </div>
                <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-8 text-white shadow-sm">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/80">All-in-One RCM</p>
                  <h3 className="mt-4 text-3xl font-bold">35% of monthly collections</h3>
                  <p className="mt-4 text-sm text-white/80">Full service revenue cycle management for ICANotes practices.</p>
                  <ul className="mt-8 space-y-3 text-sm text-white/90">
                    {advantages.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 w-full rounded-full bg-white text-slate-950 px-6 py-3 font-semibold hover:bg-slate-100">
                    <Link to="/contact">Get Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="grid gap-10  items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">ICANotes EMR software support for better outcomes</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950">ICANotes EMR Software Support for Better Outcomes</h2>
                    <p className="mt-4 text-slate-600">Our ICANotes specialists embed into your billing and clinical workflows to improve claims accuracy, reduce denials, and keep your practice running smoothly.</p>
                    <ul className="mt-6 space-y-3 text-slate-600">
                      {[
                        'Outcome-focused account management',
                        'Hands-on denial prevention and recovery',
                        'Customized ICANotes workflow guidance',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <img src="/images/emr/icanotes-hero.svg" alt="ICANotes software support" className="w-full rounded-3xl" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">ICANotes EMR billing process</p>
                  <h2 className="text-3xl font-bold text-slate-950">ICANotes EMR billing process</h2>
                  <p className="text-slate-600">Our managed billing workflow gives ICANotes practices a consistent path from appointment to payment posting.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {billingSteps.map((step, index) => (
                    <div key={step} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{index + 1}</div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-950">{step}</h3>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild className="inline-flex rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                    <Link to="/contact">Talk to an ICANotes expert</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <p className="text-4xl font-bold text-slate-950">{metric.value}</p>
                    <p className="mt-3 text-sm text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

