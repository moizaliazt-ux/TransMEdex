import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ClipboardCheck, BarChart3, Users, Bolt, Layers } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function NextGenPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', practice: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('NextGen Contact Us request:', form);
    alert('Thank you — your NextGen Contact Us request has been received.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', practice: '' });
  };

  const metrics = [
    { value: '$500M+', label: 'Value of claims processed' },
    { value: '24', label: 'Accounts resolved daily' },
    { value: '48 Hours', label: 'Turnaround time (TAT)' },
    { value: '99%', label: 'Customer retention' },
    { value: '2.7M', label: 'Number of claims processed' },
    { value: '98%', label: 'First pass clean claims rate' },
    { value: '5%-10%', label: 'Revenue improvement' },
    { value: '30%', label: 'Reduction in A/R' },
  ];

  const offerings = [
    { title: 'Medical Billing Services', description: 'TransMedex supports NextGen with medical billing workflows that improve collections, reduce denials, and keep cash flow consistent.' },
    { title: 'NextGen RCM', description: 'Our RCM team delivers claim scrubbing, scheduling reconciliation, patient posting, and payer follow-up inside NextGen.' },
    { title: 'NextGen Services', description: 'We also provide advanced practice management services that align your revenue cycle with NextGen\'s system workflows.' },
  ];

  const benefits = [
    'NextGen claims and denial expertise',
    'Certified billers with platform experience',
    'Clean claim automation and tracking',
    'Patient posting and statement accuracy',
    'Account receivable optimization',
  ];

  const processSteps = [
    'Patient Intake & Scheduling',
    'Charge Capture & Coding',
    'Claim Scrubbing & Submission',
    'Payment Posting',
    'Denial Management',
    'Patient Follow-up',
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#3d1f57] via-[#5e2d8c] to-[#311d55] text-white">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">NextGen Billing Support</p>
                  <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Optimize Overall Collections with NextGen Medical Software</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                    TransMedex helps practices maximize NextGen revenue by delivering workflow-focused billing, clean claims, and payer-ready submission processes.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Advantage</p>
                      <p className="mt-3 text-3xl font-semibold">Flexible RCM</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Delivered</p>
                      <p className="mt-3 text-3xl font-semibold">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Request NextGen Support</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-slate-900">
                      <Link to="/services/medical-billing">View Medical Billing</Link>
                    </Button>
                  </div>
                </div>

                
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Advantages of partnering with TransMedex for NextGen software</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Advantages of partnering with TransMedex for NextGen medical software</h2>
                  <p className="mt-4 text-slate-600">Our flexible NextGen support helps you recover collections, reduce denials, and build process discipline inside your practice management system.</p>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {[
                      'Faster claims turn times and better payer acceptance',
                      'Certified billers who know NextGen workflows',
                      'Clean claim automation and denial prevention',
                      'Custom reporting and payment posting accuracy',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <img src="/images/emr/nextgen-hero.svg" alt="NextGen billing support illustration" className="w-full rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {offerings.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Our success in numbers</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950">Our success in numbers</h2>
                    <p className="mt-4 text-slate-600">NextGen clients benefit from proven billing performance and faster collections with TransMedex's managed support.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {metrics.slice(0, 4).map((metric) => (
                      <div key={metric.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center">
                        <p className="text-3xl font-bold text-slate-950">{metric.value}</p>
                        <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#f4f6ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-center rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Affordable revenue cycle management pricing</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Affordable revenue cycle management pricing</h2>
                  <p className="mt-4 text-slate-600">TransMedex's NextGen billing solution is priced to deliver full RCM support without slowing your practice down.</p>
                  <div className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/10 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.32em] text-white/80">All-in-One RCM</p>
                    <h3 className="mt-4 text-3xl font-bold">35% of monthly collections</h3>
                    <p className="mt-4 text-sm text-white/80">NextGen revenue cycle management delivered with daily oversight.</p>
                    <ul className="mt-6 space-y-3 text-sm text-white/90">
                      {benefits.map((item) => (
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
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <img src="/images/emr/nextgen-hero.svg" alt="NextGen RCM illustration" className="w-full rounded-3xl" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Streamline your RCM process with our NextGen EHR professionals</p>
                  <h2 className="text-3xl font-bold text-slate-950">Streamline your RCM process with our NextGen EHR professionals</h2>
                  <p className="text-slate-600">Our team partners with your practice to eliminate nextgen workflow friction and improve payment outcomes.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <div key={step} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{index + 1}</div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-950">{step}</h3>
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

