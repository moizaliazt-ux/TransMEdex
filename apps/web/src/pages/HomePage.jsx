import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Star,
  Users,
  Search,
  Shield,
  Activity,
  ClipboardCheck,
  Heart,
  Brain,
  Bone,
  Beaker,
  Syringe,
  MonitorSmartphone,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel.jsx';

/* â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const services = [
  {
    title: 'Medical Billing Services',
    description: 'Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers.',
    icon: ClipboardCheck,
    path: '/services/medical-billing',
  },
  {
    title: 'Medical Coding',
    description: 'Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean "super-bill" for the biller to submit to the insurance payer.',
    icon: ShieldCheck,
    path: '/services/medical-coding',
  },

  {
    title: 'Healthcare RCM',
    description: 'Revenue cycle management services are specialty-specific, which means a physician\'s bespoke demands are met by a dedicated medical biller.',
    icon: TrendingUp,
    path: '/services/healthcare-rcm',
  },
];

const trustStats = [
  { value: 'Almost 99%', label: 'Clean claim ratio' },
  { value: 'About 97.35%', label: '1st submission pass rate' },
  { value: 'Up to 30%', label: 'Revenue increase' },
];

const specialties = [
  { name: 'Laboratory Billing', icon: Beaker },
  { name: 'Urology', icon: Activity },
  { name: 'Cardiology', icon: Heart },
  { name: 'Behavioral Health', icon: Brain },
  { name: 'Urgent Care', icon: Syringe },
  { name: 'Orthopedics', icon: Bone },
];

const emrPlatforms = [
  { name: 'Epic', path: '/emr/epic' },
  { name: 'Athena Health', path: '/emr/athenahealth' },
  { name: 'AdvancedMD', path: '/emr/advancedmd' },
  { name: 'NextGen', path: '/emr/nextgen' },
  { name: 'CareCloud', path: '/emr/carecloud' },
  { name: 'eClinicalWorks', path: '/emr/eclinicalworks' },
];

const carouselSlides = [
  { title: 'Faster claim submission', description: 'Our claim workflow improves cycle speed and reduces payer response time with digital-first claim processing.', icon: Zap },
  { title: 'Automated denial tracking', description: 'See every denials status clearly and let our team pursue the highest-value appeals automatically.', icon: Search },
  { title: 'Secure patient billing', description: 'HIPAA-compliant billing operations with encrypted data transfer and transparent reporting.', icon: Shield },
  { title: 'Dedicated specialty teams', description: 'Specialty-specific expertise for orthopedics, urology, cardiology, and complex practice workflows.', icon: Users },
];

const challenges = [
  'Inadequate follow-up on claims and payments.',
  'Accounts receivable aging past 90/120+ days.',
  'Rising patient balances causing financial strain.',
  'Frustration due to lack of transparency and reporting.',
  'Overall decline in collections impacting practice revenue.',
];

/* â”€â”€ Animation Variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* â”€â”€ Hook: Intersection Observer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(element); } },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/* â”€â”€ Hook: Animated counter â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function useCounter(end, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let animId;
    let startTimestamp = null;
    const endNum = parseInt(end.replace(/[^0-9]/g, '')) || 0;
    let currentVal = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const nextVal = Math.floor(easeProgress * endNum);
      if (nextVal !== currentVal) {
        currentVal = nextVal;
        setCount(nextVal);
      }
      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      }
    };
    animId = window.requestAnimationFrame(step);
    return () => {
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, [end, duration, isVisible]);

  return count;
}

/* â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function HomePage() {
  const [carouselApi, setCarouselApi] = useState(null);
  const [statsRef, statsVisible] = useScrollReveal(0.2);

  const stat1 = useCounter('500', 2000, statsVisible);
  const stat2 = useCounter('25', 1500, statsVisible);
  const stat3 = useCounter('150', 2000, statsVisible);
  const stat4 = useCounter('98', 1500, statsVisible);

  useEffect(() => {
    if (!carouselApi) return;
    const intervalId = setInterval(() => {
      if (carouselApi.canScrollNext()) { carouselApi.scrollNext(); } else { carouselApi.scrollTo(0); }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">

      <Header />

      <main>
        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• HERO SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden animated-gradient-bg pb-20 pt-8">
          {/* Floating decorative orbs */}
          <div className="floating-orb w-[500px] h-[500px] bg-primary/10 -top-32 -left-32 animate-float-slow" />
          <div className="floating-orb w-[350px] h-[350px] bg-[#591667]/8 top-60 -right-20 animate-float" />
          <div className="floating-orb w-[200px] h-[200px] bg-[#a0357e]/6 bottom-20 left-1/3 animate-float-slow" style={{ animationDelay: '2s' }} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-center py-12">
              {/* Left Content */}
              <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="text-sm uppercase tracking-[0.35em] text-slate-500">Medical Billing Services</motion.div>
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-6xl">
                    The Medical Billing Service <span className="gradient-text">Provider for</span> <span className="text-slate-950">USA Healthcare</span>
                  </h1>
                  <p className="max-w-xl text-lg leading-8 text-slate-600">
                    TransMedex is the USA's top medical billing firm – deploying the best practices in medical billing and coding for physicians looking to outsource billing and coding to an expert 3rd party billing agency.
                  </p>
                  <p className="max-w-xl text-lg leading-8 text-slate-600">
                    Our certified medical coders and billers help healthcare organizations recover Aged Receivables and resolve insurance Claim Denials, as well.
                  </p>
                </div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-semibold text-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> 40+ Specialties Billed Daily</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> ISO 27001 + HIPAA Certified</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> 20% Average Revenue Increase</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> AI Agents Work Claims 24/7</div>
                </motion.div>


              </motion.div>

              {/* Right — Hero Image */}
              <motion.div className="relative" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}>
                <div className="absolute -right-16 top-10 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-primary/25 to-[#591667]/10 blur-3xl animate-pulse-glow" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 shadow-2xl shadow-primary/10" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
                  <img src="/hero-image.webp" alt="Medical billing team" width="665" height="370" className="h-[300px] md:h-[420px] w-full rounded-3xl object-cover block" style={{ borderRadius: '1.5rem' }} fetchpriority="high" loading="eager" decoding="async" />
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SPECIALTIES SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Medical Specialties We Serve</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Expert billing and coding services across 75+ medical specialties. From primary care to surgical centers, we serve practices of all sizes.</p>
            </motion.div>

            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              {specialties.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.name} variants={fadeInUp}>
                    <Link to={`/specialties/${s.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center hover-lift hover:border-primary/30 transition-all duration-300">
                        <div className="mb-4 flex justify-center">
                          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-[#591667] transition-all duration-300">
                            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">{s.name}</h3>
                        <p className="mt-2 text-sm text-slate-600">Expert billing and coding services</p>
                        <div className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more <ArrowRight className="h-3.5 w-3.5" /></div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="flex justify-center">
              <Link to="/specialties" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold hover:bg-primary/10 hover:shadow-md transition-all duration-300">View More Specialties <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• EMR SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-slate-50 pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">EMR Platforms We Support</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Our AAPC-certified coders work directly inside your current EMR system without changing your workflow. We support all major platforms.</p>
            </motion.div>

            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              {emrPlatforms.map((emr) => (
                <motion.div key={emr.name} variants={scaleIn}>
                  <Link to={emr.path}>
                    <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center hover-lift hover:border-primary/20 transition-all duration-300">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <MonitorSmartphone className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors duration-300" />
                        <div className="text-xl font-bold text-slate-700 group-hover:text-primary transition-colors duration-300">{emr.name}</div>
                      </div>
                      <p className="text-xs text-slate-500">Full billing integration</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center">
              <Link to="/services/medical-billing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:shadow-[0_12px_28px_-6px_rgba(131,45,112,0.35)] transition-all duration-300">Explore EMR Integration <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• TRUST RIBBON â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <motion.div className="mx-auto max-w-7xl grid gap-4 sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {['500+ Satisfied Providers', 'Serving More Than 25 Specialties', '150+ Billing and Coding Experts'].map((text, idx) => (
              <motion.div key={idx} variants={scaleIn} className="rounded-3xl gradient-bg-rich px-6 py-6 text-white shadow-xl hover:shadow-[0_16px_40px_-8px_rgba(131,45,112,0.4)] transition-shadow duration-300">
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• STATS SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Our Success in Numbers</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Trusted by healthcare organizations across the USA. See why 500+ medical practices choose TransMedex.</p>
            </motion.div>

            <div ref={statsRef} className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { value: stat1, suffix: '+', label: 'Satisfied Providers' },
                { value: stat2, suffix: '+', label: 'Medical Specialties' },
                { value: stat3, suffix: '+', label: 'Billing Experts', format: (v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v },
                { value: stat4, suffix: '%', label: 'Clean Claim Rate' },
              ].map((stat, idx) => (
                <div key={idx} className="stat-glow rounded-[1.75rem] bg-gradient-to-br from-primary/5 via-primary/8 to-primary/12 border border-primary/15 p-8 text-center hover-lift transition-all duration-300">
                  <p className="text-4xl font-bold gradient-text">{stat.format ? stat.format(stat.value) : stat.value}{stat.suffix}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SERVICES SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Medical Billing Services We Provide</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Medical Billing Services provide organized solutions to assist with billing for healthcare providers. We handle everything from claim creation to denial management and revenue cycle planning.</p>
            </motion.div>

            <motion.div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Link to={service.path} className="block h-full">
                      <div className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm h-full hover-lift hover:border-primary/20 transition-all duration-300 flex flex-col">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-[#591667] group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600 flex-grow">{service.description}</p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">Explore More <ArrowRight className="h-4 w-4" /></div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• CAROUSEL SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-[#eef0ff] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="flex items-center justify-between gap-6 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-primary">Smooth claim automation</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">Sliding insights for billing performance</h2>
              </div>
              <div className="text-sm text-slate-600 hidden sm:block">Autoplaying slides with smooth transitions.</div>
            </motion.div>

            <Carousel setApi={setCarouselApi} className="relative">
              <CarouselContent className="flex items-stretch">
                {carouselSlides.map((slide, idx) => {
                  const SlideIcon = slide.icon;
                  return (
                    <CarouselItem key={slide.title} className="min-w-[270px] sm:min-w-[300px] lg:min-w-[360px]">
                      <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-md hover-lift hover:shadow-xl transition-all duration-500">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
                          <SlideIcon className="h-4 w-4" /> Step {idx + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-950">{slide.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{slide.description}</p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:inline-flex border-slate-300 bg-white/90 text-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
              <CarouselNext className="hidden md:inline-flex border-slate-300 bg-white/90 text-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
            </Carousel>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• CLAIMS BILLING DARK SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0da1df]/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0369a1]/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 xl:grid-cols-[0.95fr_1.05fr] items-center">
              <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.32em] text-white/50">Medical Claims Billing Service.</motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold tracking-[-0.03em]">We boost healthcare income with quick, uncut reimbursements!</motion.h2>
                <motion.div variants={fadeInUp} className="space-y-4 text-slate-300">
                  <p>Management of billing claims poses difficulties for providers pursuing timely submissions and full remittance for care given. But take heart — our niche medical billing services ease the way.</p>
                  <p>We optimize each invoicing phase, armed with clinical knowledge and zeal for first-class claims processing. Cloud tech validates a patient's insurance eligibility right away and file claims electronically to quicken payments.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Secure claim data transmission', desc: 'Safest digital encryption protects sensitive patient data.' },
                    { title: 'Increase revenue', desc: 'Get full payments, without unfair cuts by the insurance networks.' },
                    { title: 'Instant claim submission', desc: 'Electronic billing service files claims instantly.' },
                    { title: 'Claim follow-up & resolution', desc: 'Denied claims are appealed and reprocessed successfully.' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
                      <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground">{item.title}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>


              </motion.div>

              <motion.div className="relative overflow-hidden rounded-[2rem] bg-white p-3 sm:p-4 shadow-2xl border border-slate-200/80" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {[
                    {
                      date: '06/01/2026',
                      badge: 'MEDICAL BILLING',
                      badgeColor: 'bg-primary',
                      title: 'Pediatric CPT Codes Guide: Well Visits, Vaccines, E/M & Modifiers',
                      desc: 'Pediatric CPT codes decoded: age-banded well visits, 90460 component counting, modifier 25 placement, and the new 2026 counseling codes 90462 to 90465.',
                      image: '/blog/blog_general_1787605013087.webp',
                      link: '/resources/blog/nj-prompt-pay-law'
                    },
                    {
                      date: '06/01/2026',
                      badge: 'MEDICAL BILLING',
                      badgeColor: 'bg-purple-600',
                      title: 'General Surgery CPT Codes: The 2026 Cheat Sheet for Surgical Billing',
                      desc: 'The American College of Surgeons confirms CPT 2026 added new general surgery codes for gastric and liver procedures. CMS also cut work RVUs by 2.8%.',
                      image: '/blog/blog_coding_1787604967820.webp',
                      link: '/resources/blog/cpt-code-64612'
                    },
                    {
                      date: '06/01/2026',
                      badge: 'MEDICAL BILLING',
                      badgeColor: 'bg-sky-600',
                      title: 'Pulmonology ICD-10 Codes: A Respiratory Coding Reference Guide for 2026',
                      desc: 'Common pulmonology ICD-10 codes by condition: post-COPD exacerbation coding, hypoxia vs. hypoxemia rules, and respiratory failure specificity that keeps claims clean.',
                      image: '/blog/blog_finance_1787604979559.webp',
                      link: '/resources/blog/cpt-code-49083'
                    },
                    {
                      date: '06/01/2026',
                      badge: 'MEDICAL BILLING',
                      badgeColor: 'bg-primary',
                      title: 'Urology ICD-10 Codes: Complete Diagnosis Code Reference by Category',
                      desc: 'Complete urology ICD-10 code reference by category, with CRT lines, HCC flags, and documentation tips for accurate billing.',
                      image: '/blog/blog_urology_1787604957636.webp',
                      link: '/resources/blog/urology-billing-guide'
                    },
                    {
                      date: '06/01/2026',
                      badge: 'EHR GUIDE',
                      badgeColor: 'bg-indigo-600',
                      title: 'AdvancedMD vs Epic: Practice Size, Cost, and Billing',
                      desc: 'AdvancedMD serves practices of 2 to 50 providers. Epic reaches independent groups above 40. Compare practice size, pricing, billing modules, and migration risk.',
                      image: '/blog/blog_ophthalmology_1787604990454.webp',
                      link: '/resources/blog/ophthalmology-billing-companies'
                    },
                    {
                      date: '06/01/2026',
                      badge: 'MEDICAL BILLING',
                      badgeColor: 'bg-rose-600',
                      title: 'Pulmonology CPT Codes 2026: Cheat Sheet with 70+ Codes',
                      desc: 'Do you know that bronchoscopy has more than 20 CPT codes, whereas pulmonary function testing (PFT) has 20? Now add sleep medicine, pulmonary rehabilitation, respiratory...',
                      image: '/blog/blog_compliance_1787605001209.webp',
                      link: '/resources/blog/icd10-codes-asc'
                    }
                  ].map((card, idx) => (
                    <Link key={idx} to={card.link} className="group flex flex-col justify-between rounded-xl border border-slate-200/70 bg-white p-2.5 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200 text-left">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                          <span>{card.date}</span>
                          <span className="text-primary font-semibold group-hover:underline">READ MORE &raquo;</span>
                        </div>
                        <div className="relative mb-1.5 h-16 w-full overflow-hidden rounded-lg bg-slate-100">
                          <img src={card.image} alt={card.title} width="200" height="80" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                          <span className={`absolute top-1 right-1 rounded px-1.5 py-0.5 text-[8px] font-bold text-white tracking-wider ${card.badgeColor}`}>
                            {card.badge}
                          </span>
                        </div>
                        <h4 className="text-[11px] font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          {card.title}
                        </h4>
                        <p className="mt-1 text-[9.5px] leading-relaxed text-slate-500 line-clamp-3">
                          {card.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• WHY CHOOSE US â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="rounded-[2rem] gradient-bg-rich p-6 sm:p-8 md:p-12 text-white shadow-2xl shadow-primary/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid gap-12 xl:grid-cols-[1fr_1.2fr]">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">Why Choose TransMedex?</h2>
                  <p className="mt-6 text-lg leading-8 text-slate-200">Thousands of specialty practices trust us to handle billing so they can focus on care. Here's what sets us apart.</p>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0da1df] font-semibold hover:bg-slate-100 hover:shadow-lg transition-all duration-300">Contact Us <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Specialty-specific billing expertise', desc: 'Medical billing for cardiology, nephrology, orthopedics, and 70+ other specialties' },
                    { title: '99% claim accuracy with 24/7 support', desc: 'Near-perfect clean claim rates with dedicated support teams and instant claim resolution' },
                    { title: 'Transparent pricing that scales', desc: 'No hidden fees. Our pricing scales with your practice, from small clinics to hospital systems' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
                      <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-100">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-200">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• AWARDS / TRUST SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-[#eef0ff] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Trust Your Billing To The Company That Ranks Among "The Best Medical Billing Companies"</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">With a 4.8-star Google rating from more than 340+ reviews and an A+ rating from the Better Business Bureau, TransMedex is widely recognized as one of the best medical billing service providers in the United States.</p>
            </motion.div>

            <motion.div className="mt-12 grid gap-6 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {trustStats.map((stat, idx) => (
                <motion.div key={idx} variants={scaleIn} className="rounded-[2rem] gradient-bg-rich p-6 sm:p-8 text-white shadow-xl hover:shadow-[0_20px_48px_-12px_rgba(131,45,112,0.4)] transition-shadow duration-300">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-4 text-sm text-slate-200">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>


          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• USA BILLING SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 xl:grid-cols-[0.65fr_0.35fr] items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.32em] text-primary">Medical Billing Service in the USA that Unites Tech & Expertise to Meet Every Doctor's Vision</motion.p>
                <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">Our USA-based healthcare revenue cycle management company helps individual and institutional providers navigate the tight spots of patient billing and coding via modern medical billing services.</motion.h2>
                <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-slate-600">Our tailored medical billing services boost reimbursements through specialty-focused billing teams adept at ICD-10 coding rules and protocols unique to your medical niche.</motion.p>

                <motion.div variants={fadeInUp} className="mt-10 grid gap-4 sm:grid-cols-2">
                  {['Patient Verification', 'Claim Scrubbing', 'Claim Submission', 'A/R Recovery'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 hover-lift transition-all duration-300">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <div className="grid gap-6">
                <motion.div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm hover-lift" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Happiness Score</p>
                  <p className="mt-4 text-5xl font-bold gradient-text">92%</p>
                  <p className="mt-4 text-sm text-slate-600">Based on a 4.8-star rating from 25+ providers across the states.</p>
                  <Link className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300" to="/contact">See testimonials <ArrowRight className="h-4 w-4" /></Link>
                </motion.div>
                <motion.div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm hover-lift" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Billing Experts</p>
                  <p className="mt-4 text-5xl font-bold gradient-text">50+</p>
                  <p className="mt-4 text-sm text-slate-600">CMRS, RHIA, CPB certified medical billers and coders for every specialty.</p>
                  <Link className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300" to="/services/medical-billing">About us <ArrowRight className="h-4 w-4" /></Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• CTA BANNER â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-[#eef0ff] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="rounded-[2rem] gradient-bg-rich p-6 sm:p-8 md:p-12 text-white shadow-2xl shadow-primary/20 relative overflow-hidden" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/3 rounded-full blur-[60px]" />

              <div className="relative grid gap-10 xl:grid-cols-[1fr_0.9fr] items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Lets experience our medical billing services for as low as 2.49%</p>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Over 1500 medical practices trust TransMedex medical billing services company. So let's have a chat.</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Patient's insurance coverage verification on the spot. HIPAA-compliant medical billing services for data safety. 24/7 medical billing services to handle every claim submission. 98% claim reimbursement rate for healthy cash flow.</p>
                </div>
                <div className="space-y-4">

                  <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                    {['Billing Software', 'Denial Management', 'Accounts Management', '1:1 Technical Support'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-white" /><span>{item}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• DEDICATED ACCOUNTS SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr] items-center">
              <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.32em] text-primary">Dedicated Accounts Managers & Expert Medical Billers for Health Centers</motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-950">Healthcare organizations are at the heart of our medical billing and collections team.</motion.h2>
                <motion.p variants={fadeInUp} className="text-lg leading-8 text-slate-600">From primary care physicians to specialty clinics, our dedicated clinical coding officers and claims examiners implement a precision-driven approach so that revenue flows smoothly and claim denials fade away.</motion.p>

                <motion.div variants={fadeInUp} className="mt-10 grid gap-4">
                  <div className="rounded-3xl border border-red-200 bg-red-50/50 p-6">
                    <p className="font-semibold text-rose-600">Traditional agencies have a 50% failure rate with provider credentialing and patient billing.</p>
                  </div>
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6">
                    <p className="font-semibold text-slate-950">TransMedex medical billing organization has a 97% pass rate with support for denied claims as well.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button className="mt-8 rounded-full gradient-bg hover:gradient-bg-hover px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-[0_12px_28px_-6px_rgba(131,45,112,0.4)] transition-all duration-300 border-none">Claim Free Practice Audit</Button>
                </motion.div>
              </motion.div>

              <motion.div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-xl" style={{ borderRadius: '1.5rem', overflow: 'hidden' }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <img src="\WhatsApp Image 2026-08-06 at 00.55.00.jpeg" alt="Medical professionals" width="408" height="602" className="h-[300px] md:h-[520px] w-full rounded-3xl object-cover block" style={{ borderRadius: '1.5rem' }} loading="lazy" decoding="async" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• CHALLENGES + FORM SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-[#eef0ff] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div className="rounded-[2rem] bg-gradient-to-br from-[#0f172a] via-[#0369a1] to-[#0da1df] p-5 sm:p-8 md:p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />

              <div className="relative grid gap-10 xl:grid-cols-[0.7fr_1.3fr] items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">Which of these challenges are you facing as a provider?</h2>
                  <p className="mt-4 text-base leading-7 text-slate-200">We solve the problems that hold providers back: aging receivables, denial follow-up, credentialing delays, and unclear revenue reporting.</p>
                </div>
                <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                  {challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-white/60 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300 flex-shrink-0" />
                      <p className="text-sm text-slate-200 group-hover:text-white transition-colors duration-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;

