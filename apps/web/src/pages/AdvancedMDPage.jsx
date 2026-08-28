import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Users, BarChart3, ClipboardCheck, ShieldAlert } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function AdvancedMDPage() {
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
    console.log('AdvancedMD Contact Us request:', form);
    alert('Thank you � your AdvancedMD Contact Us request has been received.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', practice: '', message: '' });
  };

  const struggles = [
    {
      title: 'Claims Improperly Burning on Default Rules',
      description: 'We fix default AdvancedMD payor rules and coding logic that cause claims to reject or get delayed in the system.',
    },
    {
      title: 'Single-Point Reductions',
      description: 'Our experts identify charge entry gaps and process inconsistencies that reduce collections across your AdvancedMD setup.',
    },
    {
      title: 'Coding Stagnant or Unbalanced',
      description: 'We assess your AdvancedMD coders and workflow to eliminate under-coding, incorrect charge capture, and low clean claim velocity.',
    },
    {
      title: 'Patient A/R Back in the Portal',
      description: 'TransMedex improves AR processes and patient balance communication to reduce bad debt and accelerate collections.',
    },
  ];

  const coverage = [
    {
      title: 'Prior Authorization Tracking',
      description: 'AdvancedMD claims need proactive authorization tracking to prevent denials and delayed payments.',
    },
    {
      title: 'Documentation Gap Review',
      description: 'We audit charts and charge documentation to close gaps before claims hit AdvancedMD submission.',
    },
    {
      title: 'CPT, ICD-10, and HCPCS Coding',
      description: 'Specialized coding support for AdvancedMD claims, payer-specific edits, and authorization validation.',
    },
  ];

  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-[#3a1f52] via-[#572e78] to-[#2d184e] text-white">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_25%)]" />
            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-start">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">AdvancedMD Medical Billing Services</p>
                  <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">AdvancedMD Medical Billing Services | Certified Coders + Billers Inside Your AdvancedMD Plan</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                    AdvancedMD practices can increase cash flow and reduce denials when they use TransMedex's experts built inside AdvancedMD workflows for coding, patient posting, and appeals.
                  </p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Trusted by</p>
                      <p className="mt-3 text-3xl font-semibold">900+ Providers</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                      <p className="text-sm uppercase tracking-[0.32em] text-white/70">Up to</p>
                      <p className="mt-3 text-3xl font-semibold">50% Clean Claims</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Get AdvancedMD Support</Link>
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
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Platforms</p>
                  <p className="mt-3 text-xl font-semibold">AdvancedMD Native Support</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { title: 'Trusted by 900+ Providers', icon: <Users className="h-5 w-5" /> },
                  { title: 'Certified AdvancedMD Billers', icon: <ShieldCheck className="h-5 w-5" /> },
                  { title: 'End-to-End Billing Support', icon: <BarChart3 className="h-5 w-5" /> },
                  { title: 'Specialized Claims Submission', icon: <ClipboardCheck className="h-5 w-5" /> },
                  { title: 'Faster Reimbursement Cycles', icon: <Sparkles className="h-5 w-5" /> },
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
              <div className="grid gap-10  items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">What is AdvancedMD and how does its billing system work?</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">What is AdvancedMD and how does its billing system work?</h2>
                  <p className="mt-5 text-slate-600">AdvancedMD combines practice management, scheduling, and billing, but it requires workflow tuning and specialist knowledge to convert those capabilities into clean, timely reimbursements.</p>
                  <p className="mt-4 text-slate-600">TransMedex supports AdvancedMD with an embedded team, rules configuration, coding validation, claims monitoring, and payment posting that reduces revenue leakage.</p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Book a Free Demo</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold">
                      <Link to="/services/medical-billing">See AdvancedMD Services</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <img src="/images/emr/advancedmd-hero.svg" alt="AdvancedMD billing illustration" className="w-full rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">How TransMedex helps AdvancedMD practices struggling with billing</p>
                  <h2 className="text-3xl font-bold text-slate-950">How TransMedex helps AdvancedMD practices struggling with billing</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

          <section className="py-20 bg-[#f4f6ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">How does TransMedex's AdvancedMD billing services onboard your practice?</p>
                  <h2 className="text-3xl font-bold text-slate-950">How does TransMedex's AdvancedMD billing services onboard your practice?</h2>
                  <p className="text-slate-600">TransMedex uses a structured, fast onboarding process for AdvancedMD practices so your team can move from go-live risk to clean claim stability.</p>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Discovery Audit',
                      description: 'TransMedex audits claims and workflows through your first 60 days of go-live, aligning payer rules, coding, and charge capture with AdvancedMD configuration.',
                    },
                    {
                      step: 'Step 2',
                      title: 'Review Access & Workflow Baseline',
                      description: 'We validate Athena access, workflows, and payor rules to create a concrete picture of where AdvancedMD billing is underperforming.',
                    },
                    {
                      step: 'Step 3',
                      title: 'Workflow Built for Your Configuration',
                      description: 'AdvancedMD workflow alignment is built around your specialties, referral patterns, and payer mix so charge capture and claims flow correctly.',
                    },
                    {
                      step: 'Step 4',
                      title: 'Claims Go Live',
                      description: 'TransMedex executes pilot batches, corrects claim edits, and applies AdvancedMD adjustments so claims move cleanly into the payer environment.',
                    },
                    {
                      step: 'Step 5',
                      title: 'Monthly Review and Rule Updates',
                      description: 'We monitor claims, denials, and payer behavior weekly, updating AdvancedMD rules so your revenue cycle stays optimized after go-live.',
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

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
                <div className="grid gap-8  items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Certifications behind every AdvancedMD account</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950">Certifications behind every AdvancedMD account</h2>
                    <p className="mt-4 text-slate-600">TransMedex's AdvancedMD team combines ISO 27001, HIPAA, and HITRUST-ready controls with certified medical billing and coding expertise.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="h-7 w-7" />
                      </div>
                      <p className="mt-4 text-lg font-semibold text-slate-950">ISO 27001</p>
                      <p className="mt-2 text-sm text-slate-600">Secure controls for protected health information.</p>
                    </div>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldAlert className="h-7 w-7" />
                      </div>
                      <p className="mt-4 text-lg font-semibold text-slate-950">Certified Billers & Coders</p>
                      <p className="mt-2 text-sm text-slate-600">AdvancedMD specialists trained in payer-specific requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#4f1774] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { value: '$500M+', label: 'Value of claims processed' },
                  { value: '24', label: 'Accounts resolved daily' },
                  { value: '48 Hours', label: 'Turnaround time' },
                  { value: '99%', label: 'Customer retention' },
                  { value: '2.7M', label: 'Number of claims processed' },
                  { value: '98%', label: 'First pass clean claims rate' },
                  { value: '5%-10%', label: 'Revenue improvement' },
                  { value: '30%', label: 'Reduction in A/R' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center">
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
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Should you use AdvancedMD's own RCM service or outsource to TransMedex?</p>
                  <h2 className="text-3xl font-bold text-slate-950">Should you use AdvancedMD's own RCM service or outsource to TransMedex?</h2>
                  <p className="text-slate-600">Most AdvancedMD practices improve speed, accuracy, and revenue recovery by outsourcing to a billing partner with deep AdvancedMD expertise.</p>
                </div>

                <div className="mt-10 overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm text-slate-700">
                    <thead>
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Feature</th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">AdvancedMD RCM</th>
                        <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">TransMedex</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          label: 'Team assignment',
                          left: 'Internal AdvancedMD billing resources',
                          right: 'Dedicated TransMedex AdvancedMD specialists',
                        },
                        {
                          label: 'Coding coverage',
                          left: 'General platform billing support',
                          right: 'Certified AdvancedMD coders and billers',
                        },
                        {
                          label: 'Pricing',
                          left: 'Fixed internal overhead',
                          right: 'Flexible value-based support model',
                        },
                        {
                          label: 'A/R analysis',
                          left: 'Basic portal reporting',
                          right: 'Weekly revenue and denial analytics',
                        },
                        {
                          label: 'Reporting depth',
                          left: 'Standard AdvancedMD dashboards',
                          right: 'Custom insights and action plans',
                        },
                      ].map((row) => (
                        <tr key={row.label} className="even:bg-white">
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

          <section className="py-20 bg-[#f8f5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Which specialties does TransMedex support with AdvancedMD medical billing?</p>
                  <h2 className="text-3xl font-bold text-slate-950">Which specialties does TransMedex support with AdvancedMD medical billing?</h2>
                  <p className="text-slate-600">TransMedex supports a broad range of specialties inside AdvancedMD, with tailored workflows for each practice type.</p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {['Cardiology', 'Neurology', 'Orthopedics', 'Pain Management', 'OBGYN', 'Pediatrics', 'Gastroenterology', 'Primary Care'].map((specialty) => (
                    <div key={specialty} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-slate-900">
                      <p className="font-semibold">{specialty}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <Button asChild className="inline-flex rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                    <Link to="/specialties">View More Specialties</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10  items-center rounded-[2rem] border border-slate-200 bg-[#f4f6ff] p-10 shadow-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Your AdvancedMD billing doesn't stop when your biller does</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-950">Your AdvancedMD billing doesn't stop when your biller does</h2>
                  <p className="mt-5 text-slate-600">TransMedex keeps revenue moving with ongoing AdvancedMD claim monitoring, denial follow-up, and clean claim support beyond the initial implementation.</p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Request AdvancedMD Help</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold">
                      <Link to="/services/medical-billing">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
                  <img src="/images/emr/advancedmd-hero.svg" alt="AdvancedMD revenue cycle support" className="w-full rounded-3xl" loading="lazy" decoding="async" />
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

