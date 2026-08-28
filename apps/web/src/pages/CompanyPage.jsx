import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function CompanyPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const services = [
    'Patient Eligibility & Benefits Verification',
    'ICD-10 and CPT Medical Coding',
    'Claim Creation, Scrubbing & Electronic Submission',
    'Denial Management & Appeals',
    'Payment Posting & Payer Reconciliation',
    'A/R Follow-Up & Collections Support'
  ];

  const technologyBullets = [
    'EMS and Practice Management Systems',
    'Robotic Process Automation (RPA)',
    'Billing Dashboards and Analytics Tools'
  ];

  const improvements = [
    { value: '25%', label: 'Record in overall collections' },
    { value: '14-day', label: 'Average turnaround for insurance processing' },
    { value: '28-day', label: 'Turnaround for insurance payments' }
  ];

  const faqs = [
    {
      question: 'Is TransMedex HIPAA compliant?',
      answer: 'Yes, TransMedex is strictly HIPAA compliant and ISO 27001 certified. We implement robust data security protocols and employee training programs to ensure your patient data is always protected in accordance with all federal regulations.'
    },
    {
      question: 'How can I get started with TransMedex\'s medical billing services?',
      answer: 'Getting started is simple. Schedule a Contact Us with our experts and we\'ll assess your current billing workflow, identify revenue gaps, and propose a customized onboarding plan. Most practices are fully onboarded within 2-4 weeks.'
    },
    {
      question: 'How does TransMedex charge for medical billing services?',
      answer: 'TransMedex operates on a transparent, performance-based model — typically a percentage of monthly collections (starting at 5%). There are no setup fees, no hidden charges, and no long-term lock-in contracts. You only pay when you get paid.'
    },
    {
      question: 'Can TransMedex integrate with my existing EMR or practice management system?',
      answer: 'Absolutely. We have deep expertise with over 40 different EMR and EHR platforms, including Epic, Cerner, athenahealth, AdvancedMD, NextGen, CareCloud, and many more. Our team logs directly into your existing system, so there is no need to change software.'
    },
    {
      question: 'How does TransMedex ensure billing accuracy?',
      answer: 'We maintain a 98% first-pass clean claim rate through a combination of advanced claim scrubbing software, AHIMA/AAPC certified medical coders, and multi-stage internal audits before every claim is submitted to a payer.'
    },
    {
      question: 'What types of healthcare providers does TransMedex work with?',
      answer: 'We serve a diverse range of healthcare providers including solo practitioners, small and large medical group practices, independent physicians, hospitals, health systems, and outpatient facilities across 40+ specialties nationwide.'
    }
  ];

  return (
    <>
      
      <div className="min-h-screen flex flex-col bg-white text-foreground">
        <Header />

        <main className="flex-grow">

          {/* Hero */}
          <section className="bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9] py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-4"
              >
                About Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/80 max-w-2xl mx-auto"
              >
                Empowering healthcare providers with expert billing solutions since day one.
              </motion.p>
            </div>
          </section>

          {/* What is TransMedex */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">What is TransMedex?</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    TransMedex is a top-rated <strong>medical billing company in the United States</strong>. Since 2020, we've supported thousands of medical practices, helping them streamline their billing operations and improve financial performance.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    With over <strong>1,700 certified billers and coders</strong>, and headquarters in <strong>Dallas, Texas and Voorhees Township, New Jersey</strong>, our team provides personalized support to healthcare providers across more than <strong>40 specialties</strong>.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We are committed to reducing claim denials, accelerating collections, and giving providers the financial clarity they need to focus on delivering exceptional patient care.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-[420px]">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200"
                    alt="Medical professionals"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What Services */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl h-[420px]">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                    alt="Healthcare billing services"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    What Medical Billing Services Does TransMedex Provide?
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    TransMedex simplifies the complexities of medical billing for healthcare providers by managing the entire billing cycle for you, including:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {services.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed">
                    We adapt to your practice's existing systems and workflows, ensuring a smooth transition to improved, consistently excellent results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="rounded-2xl overflow-hidden shadow-xl h-[420px]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                    alt="Technology dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    How Does TransMedex Use Technology to Improve Billing Accuracy?
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    TransMedex combines billing expertise with best-in-class healthcare tools to deliver unparalleled accuracy and efficiency. The medical billing ecosystem we use includes:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {technologyBullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Measurable Improvements:</h3>
                    <div className="space-y-4">
                      {improvements.map((imp, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="text-2xl font-black text-blue-600 min-w-[70px]">{imp.value}</div>
                          <div className="text-slate-600 text-sm leading-snug">{imp.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 bg-[#0c2d48]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Our Certifications</h2>
                  <p className="text-white/70 leading-relaxed">
                    We strictly adhere to compliance and state regulations and our certifications exhibit that well.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-10 flex-wrap">
                  {/* ISO Badge */}
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 border-4 border-sky-500 flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <div className="text-white text-xs font-bold">ISO</div>
                        <div className="text-white text-[10px] font-bold">27001</div>
                        <div className="text-white/70 text-[8px]">CERTIFIED</div>
                      </div>
                    </div>
                    <span className="text-white/80 text-sm mt-3 font-medium">ISO 27001</span>
                  </div>
                  {/* HIPAA Badge */}
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 border-4 border-sky-500 flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <div className="text-white text-xs font-bold">HIPAA</div>
                        <div className="text-white/70 text-[8px]">COMPLIANT</div>
                      </div>
                    </div>
                    <span className="text-white/80 text-sm mt-3 font-medium">HIPAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-slate-900 pr-8 text-[15px]">{faq.question}</span>
                      {openFaq === i
                        ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      }
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose TransMedex */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Why Should Healthcare Practices Choose TransMedex for Medical Billing?
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Healthcare practices choose TransMedex for medical billing because we offer <strong>specialty-specific billing services</strong>, including billing cost management, denial management, and credentialing. Our team understands the unique billing requirements of each specialty and uses tailored workflows to maximize reimbursements.
                </p>
                <p>
                  We help practices prevent coding errors and revenue cycle risks, increase cash flow dramatically, shorten the duration of unpaid bills, and provide revenue cycle data rather than billing payments.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-16 bg-[#0a1e33]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Improve Collections and Reduce Denials?
                </h2>
                <p className="text-white/60 text-sm">Talk to a billing expert today. No contracts, no hidden fees.</p>
              </div>
              <Button asChild className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl flex-shrink-0">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default CompanyPage;



