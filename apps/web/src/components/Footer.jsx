import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">

          {/* Column 1: About Us & Resources */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">About us</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                TransMedex is an end-to-end medical billing company that provides comprehensive billing services to over 40 medical specialties.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/resources/blog" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Blog</Link></li>
                <li><Link to="/resources/case-studies" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Case Studies</Link></li>
                <li><Link to="/resources/infographics" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Infographics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Our Services by States</h3>
              <ul className="space-y-3">
                <li><Link to="/states/texas" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Texas</Link></li>
                <li><Link to="/states/california" className="text-white/80 hover:text-white hover:underline transition-all text-sm">California</Link></li>
                <li><Link to="/states" className="text-white/80 hover:text-white hover:underline transition-all text-sm">View More States</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Solutions & Premium Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Solutions</h3>
              <ul className="space-y-3">
                <li><Link to="/services/rcm" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Revenue Cycle Management</Link></li>
                <li><Link to="/services/medical-billing" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Medical Billing Services</Link></li>
                <li><Link to="/services/eligibility-verification" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Patient Benefits & Eligibility Verification</Link></li>
                <li><Link to="/services/credentialing" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Credentialing Services</Link></li>
                <li><Link to="/services/medical-audit" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Medical Billing Audit</Link></li>
                <li><Link to="/services/specialty-ehr" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Specialty EHR</Link></li>
                <li><Link to="/specialties" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Specialty Medical Billing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Premium Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services/mips-consulting" className="text-white/80 hover:text-white hover:underline transition-all text-sm">MIPS Consulting Services</Link></li>
                <li><Link to="/services/web-design" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Web Design & Development</Link></li>
                <li><Link to="/services/software-dev" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Healthcare Software Development Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: EHRs/EHRs & Book Appointment */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">EHRs / EHRs</h3>
              <ul className="space-y-3">
                <li><Link to="/emr/eclinicalworks" className="text-white/80 hover:text-white hover:underline transition-all text-sm">eClinicalWorks</Link></li>
                <li><Link to="/emr/advancedmd" className="text-white/80 hover:text-white hover:underline transition-all text-sm">AdvancedMD</Link></li>
                <li><Link to="/emr/nextgen" className="text-white/80 hover:text-white hover:underline transition-all text-sm">NextGen</Link></li>
                <li><Link to="/emr/athenahealth" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Athenahealth</Link></li>
                <li><Link to="/emr/carecloud" className="text-white/80 hover:text-white hover:underline transition-all text-sm">CareCloud</Link></li>
                <li><Link to="/emr/epic" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Epic</Link></li>
                <li><Link to="/emr/cerner" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Cerner</Link></li>
                <li><Link to="/emr/kareo" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Kareo</Link></li>
                <li><Link to="/emr/amazing-charts" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Amazing Charts</Link></li>
                <li><Link to="/emr/practice-fusion" className="text-white/80 hover:text-white hover:underline transition-all text-sm">Practice Fusion</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Book Appointment</h3>
              <Link to="/contact" className="text-white/80 hover:text-white hover:underline transition-all text-sm block">
                Schedule a meeting with our expert!
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 text-sm mb-3">Our Locations</p>
                  
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <a href="https://maps.google.com/?q=1+Britton+Pl+Ste+6,+Voorhees+Township,+NJ+08043,+United+States" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white hover:underline">
                      1 Britton Pl Ste 6, Voorhees Township, NJ 08043, United States
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-white/80 text-sm mb-3">Feel free to share your queries with us!</p>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-white" />
                    <a href="tel:+16097930400" className="text-sm text-white/80 hover:text-white hover:underline">+1 (609) 793-0400</a>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-5 h-5 text-white" />
                    <a href="mailto:info@transmedex.org" className="text-sm text-white/80 hover:text-white hover:underline">info@transmedex.org</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/transmedex/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://www.instagram.com/transmedex_official/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 flex flex-col items-center justify-center gap-3 sm:gap-4">
          <Link to="/" className="inline-block">
            <img 
              src="https://horizons-cdn.hostinger.com/7a432855-cd07-4bff-aa05-d1970751b6de/a27dc909893ded6711ddc4a601441ec9.png" 
              alt="TransMedex" 
              className="h-10" 
              width="160"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm text-white/80 mb-1">
              &copy; {new Date().getFullYear()} TransMedex. All Rights Reserved.
            </p>
            <p className="text-xs sm:text-sm text-white/80 flex flex-wrap justify-center gap-1">
              <Link to="/resources/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link>
              <span>|</span>
              <Link to="/resources/terms-of-service" className="hover:text-white hover:underline">Terms &amp; Services</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
