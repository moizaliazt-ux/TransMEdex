import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, AlertCircle, ShieldCheck, Users, FileText,
  CheckSquare, Activity, Shield, TrendingUp, ArrowRight,
  Phone, Clock, Award, Star, Zap, HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function StatePageTemplate({ stateName, seoDescription, cities, challenges, heroImage, locationType = "Cities" }) {
  return (
    <>
      
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />

        <main className="flex-grow">

          {/* ───────── HERO SECTION ───────── */}
          <section className="relative py-14 sm:py-18 md:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImage || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#0da1df]/10 blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-purple-700/10 blur-3xl z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-16 items-center">

                {/* Left copy */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#0da1df] animate-pulse flex-shrink-0" />
                    Medical Billing Services · {stateName}
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-4 sm:mb-6">
                    Expert Medical Billing<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da1df] to-purple-400">
                      Services In {stateName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                    TransMedex's AAPC-certified coders and AI-driven workflows maximize revenue cycle performance across all specialties in {stateName} — ensuring full compliance with state-specific regulations and payer requirements.
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-7 sm:mb-10">
                    {[
                      `Compliant with ${stateName}'s No Surprises Act & balance-billing rules`,
                      'AI-powered billing with 98.99% clean claim accuracy',
                      'Claims submitted to Medicare, Medicaid & commercial payers',
                      'Specialty-specific billing for 40+ medical specialties',
                      'Provider credentialing & payer contracting support',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-white/90 text-[13px] sm:text-[15px]">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0da1df] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      { icon: <ShieldCheck className="w-4 h-4 text-[#0da1df]" />, label: 'ISO 27001 Certified' },
                      { icon: <Shield className="w-4 h-4 text-[#0da1df]" />, label: 'HIPAA Compliant' },
                      { icon: <Award className="w-4 h-4 text-[#0da1df]" />, label: 'AAPC Certified' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                        {b.icon}
                        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right CTA card */}
                <div className="relative mt-6 xl:mt-0">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#0da1df]/30 to-purple-600/30 rounded-3xl blur-2xl" />
                  <div className="relative bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0da1df] to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold">Free Consultation</p>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Let's Get Started!</h3>
                      </div>
                    </div>

                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      Ready to boost your practice's revenue in <strong className="text-white">{stateName}</strong>? Connect with our billing specialists for a <span className="text-[#0da1df] font-semibold">free, no-obligation consultation</span>.
                    </p>

                    {/* Quick wins */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-7">
                      {[
                        { icon: <Clock className="w-3.5 h-3.5" />, label: 'Response in 24 hrs' },
                        { icon: <Zap className="w-3.5 h-3.5" />, label: '48-hr onboarding' },
                        { icon: <Star className="w-3.5 h-3.5" />, label: '99% retention' },
                        { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Revenue +10–30%' },
                      ].map((w, i) => (
                        <div key={i} className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-xl px-2 sm:px-3 py-2 sm:py-2.5">
                          <div className="text-[#0da1df] flex-shrink-0">{w.icon}</div>
                          <span className="text-[10px] sm:text-xs font-semibold text-white/90 leading-tight">{w.label}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild size="lg" className="w-full text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white shadow-[0_0_20px_rgba(13,161,223,0.5)] transition-all duration-300 mb-2 sm:mb-3 h-11 sm:h-12">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Get a Free Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </Button>

                    <a
                      href="tel:+16097930400"
                      className="flex items-center justify-center gap-2 w-full h-10 sm:h-12 rounded-xl sm:rounded-2xl border border-white/30 text-white/90 font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all duration-200"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0da1df]" />
                      Call +1 (609) 793-0400
                    </a>

                    <p className="text-center text-[10px] sm:text-xs text-white/40 mt-3 sm:mt-4">No credit card required · 100% confidential</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ───────── PURPLE RIBBON ───────── */}
          <section className="bg-gradient-to-r from-[#5a1e64] to-[#7b2c86] text-white py-8 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
                {[
                  { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, label: 'Trusted by', sub: '500+ Physicians' },
                  { icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />, label: 'Catering to', sub: '40+ Specialties' },
                  { icon: <CheckSquare className="w-6 h-6 sm:w-8 sm:h-8" />, label: '100+ Certified', sub: 'Billers & Coders' },
                  { icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />, label: 'End-to-End', sub: 'RCM Solutions' },
                  { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, label: '99% First Pass', sub: 'Clean Claim Rate' },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2 sm:mb-4 bg-white/10">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-xs sm:text-sm leading-tight">{item.label}<br />{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── SUCCESS IN NUMBERS ───────── */}
          <section className="py-10 sm:py-14 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-slate-900">Our Success in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-6">
                {[
                  { val: '$500M+', label: 'Value of claims processed' },
                  { val: '24', label: 'Accounts Receivable Days' },
                  { val: '48 Hrs', label: 'Turn Around Time (TAT)' },
                  { val: '99%', label: 'Customer Retention' },
                  { val: '2.7M', label: 'Claims Processed' },
                  { val: '98%', label: 'First Pass Clean Claims' },
                  { val: '5–10%', label: 'Revenue Improvement' },
                  { val: '30%', label: 'Reduction in A/R' },
                ].map((s, i) => (
                  <div key={i} className="px-2">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">{s.val}</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── WHY TRANSMEDEX ───────── */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#0da1df]/5 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-8 sm:mb-14">
                <span className="inline-block bg-[#0da1df]/10 text-[#0da1df] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 sm:mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Why TransMedex Is the Right Partner for{' '}
                  <span className="text-[#0da1df]">{stateName} Practices</span>
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                  Every state has its own payer landscape, regulatory environment, and billing quirks. TransMedex has deep, in-state expertise to make sure your practice stays compliant and gets paid faster.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: `${stateName}-Specific Compliance`,
                    desc: `We stay up-to-date on every ${stateName} Medicaid, payer, and regulatory change so your claims are always compliant — reducing rejections before they happen.`,
                    color: 'from-[#0da1df] to-cyan-400',
                  },
                  {
                    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: 'AI-Powered Revenue Cycle',
                    desc: 'Our AI scrubs every claim before submission, catching errors in real-time and achieving a 98.99% clean claim rate that accelerates your cash flow.',
                    color: 'from-purple-500 to-indigo-500',
                  },
                  {
                    icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: '48-Hour Turnaround',
                    desc: 'From charge capture to claim submission in under 48 hours. Faster billing means faster payments and a healthier accounts receivable balance.',
                    color: 'from-emerald-500 to-teal-500',
                  },
                  {
                    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: 'Dedicated Billing Team',
                    desc: `You get a named, dedicated account manager and billing team who knows your practice, your payer mix in ${stateName}, and your specialty inside-out.`,
                    color: 'from-orange-500 to-amber-400',
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: 'Denial Management & Appeals',
                    desc: `We don't just refile — we analyze denial patterns, fix root causes, and file targeted appeals to recover every dollar you're owed.`,
                    color: 'from-pink-500 to-rose-500',
                  },
                  {
                    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
                    title: 'AAPC-Certified Coders',
                    desc: 'All coding is handled by AAPC-certified specialists. Accurate ICD-10, CPT, and HCPCS coding that maximizes reimbursement across all specialties.',
                    color: 'from-[#0da1df] to-blue-600',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 sm:mb-5 shadow-lg`}>
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#0da1df] transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── CHALLENGES SECTION ───────── */}
          <section className="py-10 sm:py-14 lg:py-16 bg-[#F5ECF4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  What Medical Billing Challenges do {stateName} Practices Commonly Face?
                </h2>
                <p className="text-slate-600 max-w-4xl mx-auto text-sm sm:text-base">
                  Medical practices in {stateName} face multiple billing challenges — from operational complexity to payer-specific rules — that can significantly impact revenue cycle efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {challenges.map((c, i) => (
                  <div key={i} className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-4 sm:mb-6 text-[#d946ef]">
                      {i % 4 === 0 && <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                      {i % 4 === 1 && <FileText className="w-5 h-5 sm:w-6 sm:h-6" />}
                      {i % 4 === 2 && <Shield className="w-5 h-5 sm:w-6 sm:h-6" />}
                      {i % 4 === 3 && <Activity className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{c.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── HOW TRANSMEDEX HELPS ───────── */}
          <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#5a1e64] to-[#46124e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  How TransMedex Helps Practices With Their Medical Billing Services in {stateName}?
                </h2>
                <p className="text-slate-200 text-sm sm:text-base">
                  TransMedex provides{' '}
                  <span className="text-[#e879f9] font-semibold">comprehensive medical billing services</span>{' '}
                  to help {stateName} practices overcome complex billing and compliance challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />, title: 'Prior Authorization Management', desc: 'Secures necessary approvals from insurers for procedures and treatments before service delivery.' },
                  { icon: <FileText className="w-7 h-7 sm:w-8 sm:h-8" />, title: 'Accurate Medical Coding', desc: 'Assigns correct ICD-10, CPT, and HCPCS codes to diagnoses and procedures for proper reimbursement.' },
                  { icon: <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />, title: 'Charge Entry & Validation', desc: 'Records and verifies all charges to ensure accuracy and completeness before claim submission.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white text-slate-900 p-5 sm:p-8 rounded-2xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-4 sm:mb-6 text-[#d946ef]">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── LOCATIONS SECTION ───────── */}
          <section className="py-10 sm:py-14 lg:py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Which {locationType} are Served by TransMedex in {stateName}?
                </h2>
                <p className="text-slate-600 max-w-4xl mx-auto text-sm sm:text-base">
                  With coverage spanning all {locationType.toLowerCase()} in {stateName}, TransMedex supports providers in both urban and rural areas.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {cities.map((city, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                    <div className="relative overflow-hidden h-40 sm:h-48">
                      <img src={city.image} alt={`${city.name}, ${stateName}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 font-bold text-base sm:text-lg text-white drop-shadow">{city.name}, {stateName}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/contact" className="font-semibold text-primary hover:underline inline-flex items-center gap-1 text-sm sm:text-base">
                  Get Coverage in All {locationType} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ───────── BOTTOM CTA BANNER ───────── */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0da1df] to-purple-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v6h6v-6h-6zm6 6v6h6v-6h-6zm-6 6v6h6v-6h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
                Accepting New Practices in {stateName}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Maximize Your Revenue in {stateName}?
              </h2>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg mb-7 sm:mb-10 max-w-2xl mx-auto">
                Join 500+ physicians who trust TransMedex to handle their billing — so they can focus on what matters most: delivering exceptional patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#0da1df] hover:bg-white/90 font-bold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-10 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Schedule a Free Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <a
                  href="tel:+16097930400"
                  className="flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-2xl border-2 border-white/50 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  +1 (609) 793-0400
                </a>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default StatePageTemplate;
