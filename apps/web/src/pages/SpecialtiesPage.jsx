import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const specialties = [
  {
    name: 'Urology',
    description: 'Patient-friendly procedural billing and device tracking.',
    image: '/urology-specialty.webp',
    link: '/specialties/urology'
  },
  {
    name: 'Cardiology',
    description: 'High-value cardiology claims with cath lab expertise.',
    image: '/cardiology-specialty.webp',
    link: '/specialties/cardiology'
  },
  {
    name: 'Orthopedics',
    description: 'Surgical and rehab billing that keeps episodes aligned.',
    image: '/orthopedics-specialty.webp',
    link: '/specialties/orthopedics'
  },
  {
    name: 'Behavioral Health',
    description: 'Telehealth and therapy claims handled with precision.',
    image: '/behavioral-health-specialty.webp',
    link: '/specialties/behavioral-health'
  },
  {
    name: 'Laboratory Billing',
    description: 'Panel and specimen billing optimized for every lab.',
    image: '/laboratory-billing-specialty.webp',
    link: '/specialties/laboratory-billing'
  },
  {
    name: 'Urgent Care',
    description: 'Fast, accurate billing for high-volume urgent care visits.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: '/specialties/urgent-care'
  }
];

const features = [
  {
    title: 'Clear specialty workflows',
    description: 'We map each specialty to its distinct billing rules and payer expectations.',
    image: '/specialty-workflows.webp'
  },
  {
    title: 'Visual claim intelligence',
    description: 'Integrated reporting and analytics make claims easier to review and act on.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900'
  },
  {
    title: 'Revenue optimization',
    description: 'We reduce denials and increase collections with clean claim submission.',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=900'
  }
];

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">
      
      <Header />

      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white p-10 shadow-xl"
          >
            <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Specialties</p>
                <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
                  Specialty Billing That Looks as Professional as Your Practice
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  We combine deep specialty expertise with a polished, image-forward presentation so your billing services stand out and convert more visitors.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button asChild className="rounded-full px-8 py-4 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full px-8 py-4 border-border text-slate-950 hover:bg-slate-100">
                    <Link to="/pricing">Request Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                  alt="Medical specialties"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] bg-white p-10 shadow-xl"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Specialty-Focused Billing Services</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">More than 40 specialties, presented with premium visuals.</h2>
              </div>
              <div className="max-w-xl text-slate-600">
                <p>
                  Every specialty is represented by a polished image-driven card, so your specialty page looks high-end and communicates the right message instantly.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-lg"
                >
                  <Link to={item.link} className="block h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-sm uppercase tracking-[0.24em] text-white/80">Specialty</p>
                        <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                      </div>
                    </div>
                    <div className="border-t border-slate-800 bg-slate-950/95 p-6 transition-colors duration-300 group-hover:bg-slate-950">
                      <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] bg-[#111827] p-10 text-white shadow-xl"
          >
            <div className="grid gap-10 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[1.75rem] bg-slate-950/90 p-6 shadow-2xl"
                >
                  <div className="relative mb-6 h-48 overflow-hidden rounded-3xl bg-slate-800">
                    <img src={feature.image} alt={feature.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[2rem] bg-white p-10 shadow-xl"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Why TransMedex</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">Professional specialty billing that drives confidence.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our image-first specialty page is designed to capture attention while presenting medical billing services in a polished, modern format.
                </p>
                <ul className="mt-8 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary" />
                    Tailored billing and coding for every specialty and clinical service.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary" />
                    Smooth client communication and revenue-focused workflows.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary" />
                    Visual section designs that make your specialties page feel premium.
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80"
                  alt="Medical billing team"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
