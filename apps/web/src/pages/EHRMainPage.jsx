import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, FileSearch, Cpu, Users, Award, 
  MonitorCheck, DollarSign, ClipboardList, Key, 
  Settings, Rocket, TrendingUp 
} from 'lucide-react';

const emrPlatforms = [
  { name: 'ICANotes', path: '/emr/icanotes', domain: 'icanotes.com' },
  { name: 'AdvancedMD', path: '/emr/advancedmd', domain: 'advancedmd.com' },
  { name: 'NextGen', path: '/emr/nextgen', domain: 'nextgen.com' },
  { name: 'prognoCIS', path: '/emr/prognocis', domain: 'prognocis.com' },
  { name: 'CareCloud', path: '/emr/carecloud', domain: 'carecloud.com' },
  { name: 'Epic', path: '/emr/epic', domain: 'epic.com' },
  { name: 'Allscripts', path: '/emr/allscripts', domain: 'veradigm.com' },
  { name: 'Kareo', path: '/emr/kareo', domain: 'kareo.com' },
  { name: 'athenahealth', path: '/emr/athenahealth', domain: 'athenahealth.com' },
  { name: 'Cerner', path: '/emr/cerner', domain: 'cerner.com' },
  { name: 'mecisoft Clinical', path: '/emr/mecisoft', domain: 'mecisoft.com' },
  { name: 'Office Ally', path: '/emr/office-ally', domain: 'officeally.com' },
  { name: 'eClinicalWorks', path: '/emr/eclinicalworks', domain: 'eclinicalworks.com' },
  { name: 'amazingcharts', path: '/emr/amazingcharts', domain: 'amazingcharts.com' },
  { name: 'practicefusion', path: '/emr/practicefusion', domain: 'practicefusion.com' },
  { name: 'Altera', path: '/emr/altera', domain: 'alterahealth.com' },
  { name: 'CollaborateMD', path: '/emr/collaboratemd', domain: 'collaboratemd.com' },
  { name: 'eMDs', path: '/emr/emds', domain: 'emds.com' },
  { name: 'Evident', path: '/emr/evident', domain: 'evident.com' },
  { name: 'FreeMED', path: '/emr/freemed', domain: 'freemedsoftware.org' },
  { name: 'GE Healthcare', path: '/emr/ge-healthcare', domain: 'gehealthcare.com' },
  { name: 'Greenway Health', path: '/emr/greenway', domain: 'greenwayhealth.com' },
  { name: 'MEDITECH', path: '/emr/meditech', domain: 'meditech.com' },
  { name: 'medgen', path: '/emr/medgen', domain: 'medgen.com' },
  { name: 'MEDHOST', path: '/emr/medhost', domain: 'medhost.com' },
  { name: 'Mitochon', path: '/emr/mitochon', domain: 'mitochonsystems.com' },
  { name: 'NEXTGEN HEALTHCARE', path: '/emr/nextgen-healthcare', domain: 'nextgen.com' },
  { name: 'NueMD', path: '/emr/nuemd', domain: 'nuemd.com' },
  { name: 'OpenEMR', path: '/emr/openemr', domain: 'open-emr.org' },
  { name: 'OpenMRS', path: '/emr/openmrs', domain: 'openmrs.org' },
  { name: 'ORACLE Cerner', path: '/emr/oracle-cerner', domain: 'oracle.com' },
  { name: 'webchart', path: '/emr/webchart', domain: 'medicalinformatics.com' },
  { name: 'ZipChart EHR', path: '/emr/zipchart', domain: 'zipchart.com' },
];

const EMRCard = ({ platform }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <Link
      to={platform.path}
      className="flex flex-col items-center justify-center h-24 sm:h-28 px-2 sm:px-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
    >
      {!imgError && platform.domain && (
        <img
          src={`https://logo.clearbit.com/${platform.domain}`}
          alt={`${platform.name} logo`}
          className="h-8 sm:h-10 w-auto object-contain mb-2 sm:mb-3 transition-transform group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
          decoding="async"
        />
      )}
      
      <span className={`font-semibold text-center text-xs sm:text-sm group-hover:text-primary transition-colors ${!imgError && platform.domain ? 'text-slate-600' : 'text-slate-700'}`}>
        {platform.name}
      </span>
    </Link>
  );
};

export default function EHRMainPage() {
  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">
      
      <Header />

      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* EHR Platforms Grid Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white p-4 sm:p-10 shadow-xl text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-4">
              What are the EHR Platforms We Support with Medical Billing Services?
            </h1>
            <p className="max-w-4xl mx-auto text-lg text-slate-600 mb-10">
              Our medical billing specialists support all of the following EHRs with their services. We help you submit clean claims no matter which EHR you use.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {emrPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                >
                  <EMRCard platform={platform} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Comparison Table Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] bg-[#0f172a] p-4 sm:p-10 text-white shadow-xl text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Should Your Practice Keep Billing In-House or Outsource to EHR Billing Experts?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-white/90">
              Practices should outsource EHR billing services to cut operational costs by up to 30%, per MGMA benchmarks. In-house teams cost more and delay more. The comparison is not close.
            </p>

            <div className="w-full overflow-x-auto rounded-xl">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border border-white/30 p-4 font-semibold w-1/3">Factor</th>
                    <th className="border border-white/30 p-4 font-semibold w-1/3">In-House Billing</th>
                    <th className="border border-white/30 p-4 font-semibold w-1/3 text-slate-900 bg-[#0da1df]">Outsourced EHR Billing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Annual Cost Per Biller</td>
                    <td className="border border-white/30 p-4 text-white/90">$42,000 to $58,000 salary + benefits</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">Less than 5% of collections, no overhead</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Clean Claim Rate</td>
                    <td className="border border-white/30 p-4 text-white/90">75-85% industry average (MGMA)</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">99% first-pass acceptance rate</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">AR Days</td>
                    <td className="border border-white/30 p-4 text-white/90">45 to 60+ days average</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">Under 25 days with dedicated AR follow-up</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Technology</td>
                    <td className="border border-white/30 p-4 text-white/90">Limited to EHR's native billing tools</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">AI agents that handle coding, payment posting, eligibility, and claim scrubbing</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Specialty Coding Depth</td>
                    <td className="border border-white/30 p-4 text-white/90">Generalist billers across all codes</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">AAPC-certified coders assigned by specialty</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-12">
              <Button asChild className="rounded-full px-8 py-4 bg-white text-[#0da1df] hover:bg-white/90 shadow-lg font-bold text-lg">
                <Link to="/contact">Get Free EHR Billing Quote</Link>
              </Button>
            </div>
          </motion.section>

          {/* What is Included Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#0f172a] p-4 sm:p-10 text-white shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              What is Included in TransMedex's EHR Billing Support?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-white/90">
              TransMedex's EHR medical billing services cover every RCM stage from patient scheduling to final payment posting. Twelve core services run inside your existing EHR system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Patient Eligibility Verification", text: "PEVA verifies insurance coverage, copays, and deductibles before every appointment. This AI agent for medical billing prevents denials to drop your rejection rate." },
                { icon: FileSearch, title: "Prior Authorization Management", text: "PAMA tracks authorization requirements by payer and CPT code. Aetna, UnitedHealth, and state Medicaid plans each get payer-specific protocols." },
                { icon: Cpu, title: "AI-Powered Medical Coding", text: "AAPC-certified coders assign specialty-specific codes inside your EHR. CODN cross-references CCI edits and LCD rules before submission." }
              ].map((item, i) => (
                <div key={i} className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg flex flex-col items-center">
                  <div className="h-16 w-16 bg-[#0da1df]/10 rounded-full flex items-center justify-center mb-6 text-[#0da1df]">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            
          </motion.section>

          {/* Why Do Practices Choose Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#fdfafb] border border-slate-100 p-4 sm:p-10 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              Why Do Practices Choose TransMedex for EHR Billing Services?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-slate-600">
              Practices choose TransMedex for EHR medical billing services because we combine 1,500+ certified billers with AI agents inside over 40 EHR platforms. These reasons separate TransMedex from every competitor.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { icon: Users, title: "Dedicated Account Team", text: "Your practice gets a named account manager, assigned billers, and specialty coders. Other medical billing companies rotate staff across accounts. TransMedex does not. Your team knows your payer mix, your modifier preferences, and your providers by name." },
                { icon: Award, title: "AAPC-Certified Billers and Coders", text: "TransMedex assigns billers by specialty, not randomly. Your cardiology claims go to cardiology-certified coders. Your psychiatry claims go to behavioral health specialists. This is why CODN produces a 99% coding accuracy rate." },
                { icon: MonitorCheck, title: "Support 40+ EHR Platforms", text: "Your practice keeps its current EHR. TransMedex's billers are trained on eClinicalWorks, AdvancedMD, NextGen, athenahealth, Kareo, Epic, Cerner, and 33 other platforms. No system migration. No learning curve on your end." },
                { icon: DollarSign, title: "Transparent Pricing Under 5% of Collections", text: "No onboarding fees. No long-term contracts. No hidden charges for credentialing or AR recovery. athenahealth charges 4 to 8% of revenue for its own RCM. TransMedex delivers deeper service coverage at a lower collection percentage." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100">
                  <div className="h-12 w-12 bg-[#0da1df]/10 rounded-xl flex items-center justify-center mb-6 text-[#0da1df]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* EHR Billing By The Numbers */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 sm:p-10 shadow-xl text-center relative overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#0da1df] rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0da1df] rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0da1df] rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#0da1df] font-semibold mb-3">EHR Expertise at Scale</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                TransMedex EHR Billing — By the Numbers
              </h2>
              <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-12 text-white/80">
                Our EHR billing specialists process millions of claims annually across 40+ EHR platforms. These numbers reflect our commitment to maximizing revenue for every practice we serve.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {[
                  { stat: "40+", label: "EHR Platforms Supported", desc: "Epic, Cerner, athenahealth, AdvancedMD & more" },
                  { stat: "99%", label: "First-Pass Claim Acceptance", desc: "Industry-leading clean claim rate across all EHRs" },
                  { stat: "<25", label: "Average AR Days", desc: "Compared to 45-60 day industry average" },
                  { stat: "1,500+", label: "Certified Billers & Coders", desc: "AAPC-certified, assigned by specialty" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0da1df] mb-2 group-hover:scale-110 transition-transform duration-300">{item.stat}</div>
                    <div className="text-white font-semibold text-sm sm:text-base mb-1">{item.label}</div>
                    <div className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* EHR Platform Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {[
                  { 
                    title: "Seamless EHR Integration", 
                    text: "TransMedex billers log directly into your existing EHR system. Whether you use Epic, NextGen, eClinicalWorks, or any other platform, there is zero data migration required. Your workflow stays intact while our team handles every claim.",
                    icon: MonitorCheck
                  },
                  { 
                    title: "AI-Enhanced EHR Workflows", 
                    text: "Our proprietary AI agents work alongside your EHR's native tools to automate eligibility checks, coding validation, and claim scrubbing. This hybrid approach catches errors that manual-only billing teams consistently miss.",
                    icon: Cpu
                  },
                  { 
                    title: "Specialty-Specific EHR Billing", 
                    text: "Every EHR handles specialty codes differently. TransMedex assigns coders who are certified in your specific specialty and trained on your specific EHR platform — ensuring maximum reimbursement with minimum denials.",
                    icon: Award
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-[#0da1df]/30 transition-all duration-300"
                  >
                    <div className="h-12 w-12 bg-[#0da1df]/20 rounded-xl flex items-center justify-center mb-5 text-[#0da1df]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <Button asChild className="rounded-full px-8 py-4 bg-[#0da1df] hover:bg-[#0369a1] text-white shadow-lg font-bold text-lg">
                <Link to="/contact">Start Your EHR Billing Today</Link>
              </Button>
            </div>
          </motion.section>

          {/* How Do Services Work Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#fdfafb] border border-slate-100 p-4 sm:p-10 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              How Do TransMedex's EHR/EHR Billing Services Work?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-12 text-slate-600">
              TransMedex's five-step process puts certified billers inside your EHR within 14 days. No data migration. Your system stays exactly where it is with our EHR billing services.
            </p>

            <div className="max-w-5xl mx-auto space-y-6 text-left">
              {[
                { step: "Step 1.", title: "Onboarding & Discovery", icon: ClipboardList, text: "Your dedicated account manager conducts a full billing audit during the first Contact Us. We review your specialty mix, payer contracts, denial patterns, and current AR aging. This audit identifies revenue leaks before a single claim is touched." },
                { step: "Step 2.", title: "System Access & Credentialing", icon: Key, text: "TransMedex billers receive HIPAA-compliant access directly inside your EHR through encrypted login credentials. We operate within eClinicalWorks, AdvancedMD, NextGen, athenahealth, or any of 40+ supported platforms. No third-party software sits between your staff and our team." },
                { step: "Step 3.", title: "Workflow Customization", icon: Settings, text: "We build custom SOPs mapped to your EHR's specific modules. eClinicalWorks practices get OpenConnect-aligned workflows. AdvancedMD practices get ClaimInspector rule configurations. Every workflow matches your payer mix and specialty requirements." },
                { step: "Step 4.", title: "Go-Live", icon: Rocket, text: "Claims processing begins with real-time QA checks on every submission. Your first batch runs through TransMedex's internal scrubbing layer before hitting your EHR's native clearinghouse. Charge posting, eligibility verification, and claim transmission start on day one of go-live." },
                { step: "Step 5.", title: "Ongoing Optimization", icon: TrendingUp, text: "Monthly KPI reviews track clean claim rates, denial trends, and AR days against MGMA benchmarks. Your billing team adjusts payer-specific rules, modifier logic, and coding patterns based on live performance data. This is not a set-and-forget service." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                  <div className="bg-[#0f172a] text-white p-4 md:w-36 flex-shrink-0 flex items-center justify-center md:justify-start font-bold text-lg rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
                    {item.step}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-4 flex-grow">
                    <div className="h-10 w-10 bg-[#0da1df]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#0da1df] sm:mt-1">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


