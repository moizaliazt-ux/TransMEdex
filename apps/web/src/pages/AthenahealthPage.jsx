import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Users, BarChart3 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function AthenahealthPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Athenahealth Contact Us request:', form);
    alert('Thank you — your Athenahealth Contact Us request has been received.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', practice: '', message: '' });
  };

  const struggles = [
    {
      title: 'Poor Go-Live Revenue Leakage in Athena workflows',
      description: 'Our team plugs the gaps that appear after Athena go-live to stop lost charges and improve claim flow.',
    },
    {
      title: 'High Cost of Internal Athena Billing Staff',
      description: 'Reduce overhead by outsourcing Athena billing to specialists who know the platform and payer rules.',
    },
    {
      title: 'Work Queue Bottlenecks and Block Claims',
      description: 'We clear Athena work queues and prevent claim stack-up with faster review, coding, and submission.',
    },
    {
      title: 'Weak Denial Follow-up and Appeal Visibility',
      description: 'Improved appeal tracking in Athena means denials get resolved quickly and revenue recovery is visible.',
    },
    {
      title: 'Underutilization of Athena Rules Engine',
      description: 'Our experts tune Athena rule sets so the system rejects fewer claims and routes more clean submissions.',
    },
    {
      title: 'Breaks between Clinical and Billing Systems',
      description: 'We align Athena clinical documentation with billing data to stop disconnects and missed revenue.',
    },
  ];

  const includedServices = [
    {
      title: 'Claim Scrubbing and Submission',
      description: 'We review Athena claims for accuracy, correct coding, and payer readiness before submission.',
    },
    {
      title: 'Denial Management',
      description: 'Dedicated Athena denial specialists handle rework, appeals, and resubmission to preserve cash flow.',
    },
    {
      title: 'Payment Posting & ERA Reconciliation',
      description: 'Our team reconciles posted payments and ERAs to ensure every Athena payment posts cleanly and accurately.',
    },
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#2d1f5b] via-[#4a2c7b] to-[#2d1b56] text-white">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_25%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Athenahealth Billing Services</p>
                  <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">Athenahealth Billing Services for Faster Reimbursements</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                    TransMedex helps Athenahealth practices recover revenue after go-live, optimize claim submission, and improve first-pass clean claims with Athena-native workflows.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Trusted by</p>
                      <p className="mt-3 text-3xl font-semibold">850+ Physicians</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Specialties supported</p>
                      <p className="mt-3 text-3xl font-semibold">60+ specialties</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Get Athena Support</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-slate-900">
                      <Link to="/services/medical-billing">View Billing Services</Link>
                    </Button>
                  </div>
                </div>

                
              </div>
            </div>
          </section>

          <section className="py-16 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Security Standard</p>
                  <p className="mt-3 text-xl font-semibold">ISO 27001</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Compliance</p>
                  <p className="mt-3 text-xl font-semibold">HIPAA & HITRUST</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Platform Experience</p>
                  <p className="mt-3 text-xl font-semibold">Athenahealth Native Support</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { title: 'Trusted by 850+ Physicians', icon: <Users className="h-5 w-5" /> },
                  { title: 'Catalyzing 60+ Specialties', icon: <Sparkles className="h-5 w-5" /> },
                  { title: '100+ Certified Medical Billers', icon: <ShieldCheck className="h-5 w-5" /> },
                  { title: 'End-to-End Athena Billing', icon: <BarChart3 className="h-5 w-5" /> },
                  { title: 'Up to 50% Clean Claims', icon: <CheckCircle2 className="h-5 w-5" /> },
                ].map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="grid gap-10  items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Ready to fix your Athena billing?</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Ready to fix your Athena billing?</h2>
                    <p className="mt-5 text-slate-600">TransMedex delivers Athena billing support with secure workflow integration, clean claims, and measurable revenue recovery.</p>
                    <div className="mt-8">
                      <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                        <Link to="/contact">Get Athena Billing Support</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <img src="/images/emr/athena-hero.svg" alt="Athenahealth billing illustration" className="w-full rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Why Athenahealth Practices struggle</p>
                  <h2 className="text-3xl font-bold text-slate-950">Why Athenahealth practices struggle with billing after go-live and how TransMedex fixes it</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {struggles.map((item) => (
                    <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">What is included in TransMedex's Athena Billing Services?</p>
                  <h2 className="text-3xl font-bold text-slate-950">What is included in TransMedex's Athena Billing Services?</h2>
                  <p className="text-slate-600">TransMedex provides Athena billing services that improve claim quality, reduce denials, and simplify payment reconciliation.</p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {includedServices.map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">How Does TransMedex Ensure a Fast and Structured Onboarding Process in Athena?</p>
                  <h2 className="text-3xl font-bold text-slate-950">How does TransMedex ensure a fast and structured Athena onboarding process?</h2>
                  <p className="text-slate-600">We move Athena practices from go-live pain to a stable billing routine with proven steps, operational alignment, and rapid claim recovery.</p>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Discovery & Revenue Assessment',
                      description: 'We complete a rapid Athena revenue and workflow assessment, including specialties, payer mix, denials, and backlog claims.',
                    },
                    {
                      step: 'Step 2',
                      title: 'Review Access & Workflow Baseline',
                      description: 'Our team validates Athena access, reviews work queues, assesses payer setups, and documents current billing processes.',
                    },
                    {
                      step: 'Step 3',
                      title: 'Workflow Alignment & Post-Go Live Validation',
                      description: 'We optimize Athena workflows, validate charge capture accuracy, and fix gaps between clinical, coding, and billing workflows.',
                    },
                    {
                      step: 'Step 4',
                      title: 'Coding Audit & Pilot Batch Execution',
                      description: 'TransMedex audits sample Athena claims, identifies coding issues, and pilots batch submission to prove clean claim flow.',
                    },
                    {
                      step: 'Step 5',
                      title: 'Go-live Reporting & Continuous Optimization',
                      description: 'We deliver reporting, denial analytics, and continuous process improvements to sustain clean claims and revenue cycle gains.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        <span>{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Should you use Athenahealth's own billing services or outsource to TransMedex?</p>
                  <h2 className="text-3xl font-bold text-slate-950">Should you use Athenahealth's own billing services or outsource to TransMedex?</h2>
                  <p className="text-slate-600">Most practices succeed faster by outsourcing Athena billing to a specialized partner who understands the platform, workflows, and payer rules.</p>
                </div>

                <div className="mt-10 overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm text-slate-700">
                    <thead>
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Feature</th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Athenahealth Billing Services</th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">TransMedex</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          label: 'System integration',
                          left: 'Platform-maintained, internal Athena setup',
                          right: 'Fully managed Athena-native support',
                        },
                        {
                          label: 'Billing expertise',
                          left: 'General Athena billing resources',
                          right: 'Dedicated Athena billing specialists',
                        },
                        {
                          label: 'A/R automation',
                          left: 'Standard Athena reporting and follow-up',
                          right: 'Active revenue cycle management and recovery',
                        },
                        {
                          label: 'Cost structure',
                          left: 'Fixed internal expense and platform fees',
                          right: 'Outcome-focused, flexible support model',
                        },
                        {
                          label: 'Transparency',
                          left: 'Limited visibility inside Athena workflows',
                          right: 'Clear metrics, weekly reports, and action plans',
                        },
                      ].map((row) => (
                        <tr key={row.label} className="even:bg-slate-50">
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
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: 'Transparent Pricing at 35%-45% of Collections',
                    description: 'A clear, value-based pricing model that scales with your Athena revenue and drives predictable results.',
                  },
                  {
                    title: 'Athena Certified Billers and Coders',
                    description: 'Our team combines Athena expertise with certified medical coding to reduce denials and improve clean claim rates.',
                  },
                  {
                    title: 'Collection increase guarantee',
                    description: 'We focus on higher reimbursement and faster cash flow through clean claims and denial prevention.',
                  },
                  {
                    title: 'Custom reporting to Athena RCM',
                    description: 'Real-time Athena reporting and custom dashboards keep your team informed and accountable.',
                  },
              ].map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f6ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8  items-center rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Free Athena Revenue Cycle Audit Services</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Free Athena revenue cycle audit services</h2>
                  <p className="mt-4 text-slate-600">
                    Find the hidden revenue and performance gaps in your Athena workflows with a free audit from TransMedex. We review claims, denials, coding, and payments to identify the fastest path to recoverable revenue.
                  </p>
                  <div className="mt-8 inline-flex gap-3">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Book a Free Review</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold">
                      <Link to="/services/medical-billing">See Audit Benefits</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 p-6 shadow-sm">
                  <img src="/images/emr/athena-hero.svg" alt="Athena revenue cycle audit" className="w-full rounded-3xl" loading="lazy" decoding="async" />
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

