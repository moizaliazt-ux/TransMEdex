import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ClipboardCheck, BarChart3, Users, Layers } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function CareCloudPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', practice: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CareCloud Contact Us request:', form);
    alert('Thank you � your CareCloud Contact Us request has been received.');
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

  const serviceTabs = [
    { title: 'Medical Billing', key: 'billing' },
    { title: 'CareCloud RCM', key: 'rcm' },
    { title: 'All Management', key: 'management' },
    { title: 'RCM Services', key: 'services' },
  ];

  const benefits = [
    'RCM management tailored to CareCloud',
    'Clean claim workflows and denial defense',
    'Specialized billing and payment posting',
    'Integrated claims and PDA reconciliation',
    'Advanced reporting and AR oversight',
  ];

  const processSteps = [
    'Patient Scheduling',
    'Charge Capture',
    'Claim Scrubbing',
    'Payment Posting',
    'Denial Management',
    'Claim Transmission',
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#272a4f] via-[#49377f] to-[#2b1f60] text-white">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">CareCloud EHR Support</p>
                  <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Customized RCM Solutions for CareCloud EHR Software Users</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                    TransMedex delivers flexible CareCloud revenue cycle management that is built around your practice's workflow, so you can recover revenue faster and reduce operational friction.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Specialized</p>
                      <p className="mt-3 text-3xl font-semibold">CareCloud RCM</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Embedded</p>
                      <p className="mt-3 text-3xl font-semibold">Billing Support</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Request CareCloud Support</Link>
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
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Enhance financial outcomes with CareCloud EHR support</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Enhance financial outcomes with CareCloud EHR support</h2>
                  <p className="mt-4 text-slate-600">TransMedex helps practices improve collections and recover revenue with flexible, CareCloud-ready billing support and RCM services.</p>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {[
                      'Optimize care delivery and billing interactions in CareCloud',
                      'Reduce denials with proactive claims management',
                      'Automate revenue and payment posting workflows',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <img src="/images/emr/carecloud-hero.svg" alt="CareCloud billing illustration" className="w-full rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {serviceTabs.map((tab) => (
                  <div key={tab.key} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-950">{tab.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">Flexible CareCloud solutions for your practice's revenue cycle and operational needs.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8  items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">TransMedex's Advantage</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950">TransMedex's Advantage</h2>
                    <p className="mt-4 text-slate-600">Our team knows the workflows of CareCloud clinical and revenue cycle users, and we deliver outcome-focused support to maximize reimbursements.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f6ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="grid gap-6 lg:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                      <p className="text-3xl font-bold text-slate-950">{metric.value}</p>
                      <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-center rounded-[2rem] border border-slate-200 bg-[#f8f5ff] p-10 shadow-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Affordable Revenue Cycle Management Pricing</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Affordable Revenue Cycle Management Pricing</h2>
                  <p className="mt-4 text-slate-600">TransMedex offers a clear, all-in-one RCM package for CareCloud with predictable fees and measurable ROI.</p>
                  <div className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/10 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.32em] text-white/80">All-in-One RCM</p>
                    <h3 className="mt-4 text-3xl font-bold">35% of monthly collections</h3>
                    <p className="mt-4 text-sm text-white/80">Full revenue cycle management tailored to CareCloud practices.</p>
                    <ul className="mt-6 space-y-3 text-sm text-white/90">
                      {benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-white" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8 w-full rounded-full bg-white text-slate-950 px-6 py-3 font-semibold hover:bg-slate-100">
                      <Link to="/contact">Get Pricing</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <img src="/images/emr/carecloud-hero.svg" alt="CareCloud support illustration" className="w-full rounded-3xl" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Boost financial health of your practice with CareCloud RCM support</p>
                  <h2 className="text-3xl font-bold text-slate-950">Boost financial health of your practice with CareCloud RCM support</h2>
                  <p className="text-slate-600">Our team works alongside your CareCloud users to improve claim quality, payment posting, and patient balance management.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

