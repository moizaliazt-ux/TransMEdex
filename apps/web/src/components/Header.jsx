import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, ChevronDown, Phone,
  Bot, FileText, FlaskConical, ClipboardCheck, Code2, BarChart2, RefreshCcw, ShieldCheck,
  Brain, Bone, Hospital, Activity, Pill, Beaker, Baby, Smile, HeartPulse, Heart, UserRound,
  MonitorSmartphone,
  MapPin, Globe, Users, Building2, Briefcase, Building,
  BookOpen, FileBarChart, Star,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { name: 'Medical Billing Services', path: '/services/medical-billing', description: 'Reduce denials and increase overall collections', icon: <FileText className="w-5 h-5" /> },
    { name: 'Laboratory Billing Services', path: '/services/laboratory-billing', description: 'Discover automated labs billing solution with us', icon: <FlaskConical className="w-5 h-5" /> },
    { name: 'Medical Billing Audit', path: '/services/medical-audit', description: 'Get precise medical billing audit', icon: <ClipboardCheck className="w-5 h-5" /> },
    { name: 'Medical Billing & Coding', path: '/services/medical-billing-coding', description: 'Accurate coding and faster reimbursements daily', icon: <Code2 className="w-5 h-5" /> },
    { name: 'MIPS Consulting Services', path: '/services/mips-consulting', description: 'Complete documentation & consultancy for MIPS', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Revenue Cycle Management', path: '/services/rcm', description: 'Improve patient care and optimize revenue cycle', icon: <RefreshCcw className="w-5 h-5" /> },
    { name: 'Eligibility Verification', path: '/services/eligibility-verification', description: 'Support Patient Benefits & Eligibility Verification', icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const specialties = [
    { name: 'Pain Management', path: '/specialties/pain-management', icon: <Pill className="w-4 h-4" /> },
    { name: 'Orthopedics', path: '/specialties/orthopedics', icon: <Bone className="w-4 h-4" /> },
    { name: 'Nephrology', path: '/specialties/nephrology', icon: <Activity className="w-4 h-4" /> },
    { name: 'ASC Billing', path: '/specialties/asc', icon: <Hospital className="w-4 h-4" /> },
    { name: 'Neurology', path: '/specialties/neurology', icon: <Brain className="w-4 h-4" /> },
    { name: 'Oncology', path: '/specialties/oncology', icon: <Activity className="w-4 h-4" /> },
    { name: 'Gastroenterology', path: '/specialties/gastroenterology', icon: <Beaker className="w-4 h-4" /> },
    { name: 'Podiatry', path: '/specialties/podiatry', icon: <UserRound className="w-4 h-4" /> },
    { name: 'Dental', path: '/specialties/dental', icon: <Smile className="w-4 h-4" /> },
    { name: 'Pediatrics', path: '/specialties/pediatrics', icon: <Baby className="w-4 h-4" /> },
    { name: 'Cardiology', path: '/specialties/cardiology', icon: <Heart className="w-4 h-4" /> },
    { name: 'OBGYN', path: '/specialties/obgyn', icon: <HeartPulse className="w-4 h-4" /> }
  ];

  const emrs = [
    { name: 'Epic', path: '/emr/epic', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'Athenahealth', path: '/emr/athenahealth', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'AdvancedMD', path: '/emr/advancedmd', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'ICANotes', path: '/emr/icanotes', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'NextGen', path: '/emr/nextgen', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'CareCloud', path: '/emr/carecloud', icon: <MonitorSmartphone className="w-4 h-4" /> }
  ];

  const states = [
    { name: 'Texas', path: '/states/texas', icon: <MapPin className="w-4 h-4" /> },
    { name: 'California', path: '/states/california', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Florida', path: '/states/florida', icon: <MapPin className="w-4 h-4" /> },
    { name: 'New York', path: '/states/new-york', icon: <MapPin className="w-4 h-4" /> },
    { name: 'New Jersey', path: '/states/new-jersey', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Delaware', path: '/states/delaware', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Pennsylvania', path: '/states/pennsylvania', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Nevada', path: '/states/nevada', icon: <MapPin className="w-4 h-4" /> }
  ];

  const whoWeServe = [
    { name: 'Medical Group Practices', path: '/who-we-serve/medical-group-practices', icon: <Users className="w-4 h-4" /> },
    { name: 'Outsource Billing Services', path: '/who-we-serve/outsource-billing-services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Small Practices', path: '/who-we-serve/medical-billing-small-practices', icon: <Building className="w-4 h-4" /> },
    { name: 'Hospitals & Health Systems', path: '/who-we-serve/hospitals-health-systems', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Independent Practices', path: '/who-we-serve/independent-practices', icon: <UserRound className="w-4 h-4" /> }
  ];

  const resources = [
    { name: 'Company', path: '/resources/company', icon: <Globe className="w-4 h-4" /> },
    { name: 'Blog', path: '/resources/blog', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/resources/case-studies', icon: <FileBarChart className="w-4 h-4" /> }
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Modern Dropdown
  const DropdownNav = ({ label, to, children, dropdownWidth = 'w-[280px]', alignClass = 'left-0' }) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      setOpen(true);
    };
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => setOpen(false), 150);
    };

    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={to}
          onClick={(e) => {
            if (to === '#') e.preventDefault();
          }}
          className={`flex items-center gap-1.5 text-[13px] xl:text-[14px] font-semibold py-6 px-2 xl:px-3 transition-colors duration-200 ${
            isActive(to)
              ? 'text-[#0da1df]'
              : 'text-slate-600 hover:text-[#0da1df]'
          }`}
        >
          {label}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180 text-[#0da1df]' : 'text-slate-400'}`}
          />
        </Link>

        {/* Animated Premium Dropdown Container */}
        <div
          className={`absolute ${alignClass} top-full pt-2 z-50 ${dropdownWidth} transition-all duration-300 origin-top-left ${
            open ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] rounded-[1.5rem] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const MobileNavGroup = ({ label, items }) => {
    const [open, setOpen] = useState(false);
    const hasActiveChild = items.some((item) => isActive(item.path));

    return (
      <div className="flex flex-col">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 text-[15px] font-semibold w-full ${
            open || hasActiveChild ? 'bg-[#0da1df]/5 text-[#0da1df]' : 'text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-1 rounded-md transition-colors ${open || hasActiveChild ? 'bg-[#0da1df]/10 text-[#0da1df]' : 'bg-slate-100 text-slate-400'}`}>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : '-rotate-90'}`} />
            </div>
            {label}
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-1 pl-12 pr-4 pb-2">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-[14px] transition-all duration-200 text-left flex items-center gap-2 ${
                  isActive(item.path) ? 'text-[#0da1df] font-semibold translate-x-1' : 'text-slate-500 hover:text-[#0da1df] hover:translate-x-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass-header-premium py-1 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-3'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group relative z-10">
              <img
                src="/logo.png"
                alt="TransMedex Logo"
                width="200"
                height="50"
                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                decoding="async"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center justify-center flex-1 ml-6">

              {/* Services Bento Dropdown */}
              <DropdownNav label="Services" to="/services" dropdownWidth="w-[720px]" alignClass="-left-[140px]">
                <div className="p-4 grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="group flex items-start gap-4 p-3.5 rounded-[1rem] hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#0da1df] group-hover:bg-[#0da1df] group-hover:text-white group-hover:shadow-[#0da1df]/20 transition-all duration-300">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900 group-hover:text-[#0da1df] transition-colors leading-tight mb-1">{s.name}</div>
                        <div className="text-[13px] font-medium text-slate-500 leading-snug">{s.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-sm font-medium text-slate-500">Discover how our services integrate to boost revenue.</div>
                  <Link to="/services" className="text-[13px] font-bold text-[#0da1df] hover:text-[#0369a1] flex items-center gap-1.5 transition-all hover:gap-2">
                    View All Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </DropdownNav>

              {/* Specialties */}
              <DropdownNav label="Specialties" to="/specialties" dropdownWidth="w-[520px]" alignClass="-left-[100px]">
                <div className="p-4 grid grid-cols-2 gap-1.5">
                  {specialties.map((sp) => (
                    <Link
                      key={sp.path}
                      to={sp.path}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#0da1df] group-hover:bg-[#0da1df] group-hover:text-white transition-all duration-300">
                        {sp.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{sp.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                  <Link to="/specialties" className="text-[13px] font-bold text-[#0da1df] flex items-center gap-1.5 transition-all hover:gap-2 w-max">
                    View All Specialties <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </DropdownNav>

              {/* EHR */}
              <DropdownNav label="EHR" to="/emr" dropdownWidth="w-[240px]">
                <div className="p-2 flex flex-col gap-1">
                  {emrs.map((e) => (
                    <Link
                      key={e.path}
                      to={e.path}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="text-slate-400 group-hover:text-[#0da1df] transition-colors">
                        {e.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{e.name}</span>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              {/* States We Serve */}
              <DropdownNav label="States" to="/states" dropdownWidth="w-[240px]">
                <div className="p-2 flex flex-col gap-1">
                  {states.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="text-slate-400 group-hover:text-[#0da1df] transition-colors">
                        {s.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              {/* Our Clients */}
              <DropdownNav label="Our Clients" to="/who-we-serve/medical-group-practices" dropdownWidth="w-[300px]" alignClass="-left-4">
                <div className="p-2 flex flex-col gap-1">
                  {whoWeServe.map((w) => (
                    <Link
                      key={w.path}
                      to={w.path}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="text-slate-400 group-hover:text-[#0da1df] transition-colors">
                        {w.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{w.name}</span>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              {/* Resources */}
              <DropdownNav label="Resources" to="/resources/company" dropdownWidth="w-[240px]" alignClass="-left-4">
                <div className="p-2 flex flex-col gap-1">
                  {resources.map((r) => (
                    <Link
                      key={r.path}
                      to={r.path}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="text-slate-400 group-hover:text-[#0da1df] transition-colors">
                        {r.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{r.name}</span>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              {/* Pricing */}
              <Link
                to="/pricing"
                className={`text-[13px] xl:text-[14px] font-semibold py-6 px-2 xl:px-3 transition-colors duration-200 ${
                  isActive('/pricing') ? 'text-[#0da1df]' : 'text-slate-600 hover:text-[#0da1df]'
                }`}
              >
                Pricing
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center gap-4 xl:gap-6 flex-shrink-0 relative z-10">
              <a href="tel:+16097930400" className="group flex items-center gap-2 text-[14px] font-semibold text-slate-600 hover:text-[#0da1df] transition-colors">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0da1df]/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#0da1df]" />
                </div>
                +1 (609) 793-0400
              </a>
              <Button asChild className="premium-button-primary shadow-[0_0_15px_rgba(13,161,223,0.5)] animate-[pulse_2s_ease-in-out_infinite] hover:shadow-[0_0_25px_rgba(13,161,223,0.8)]">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden relative z-10">
                <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-slate-100 text-slate-900 rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px] overflow-y-auto bg-white border-l border-slate-100 p-0">
                <div className="p-6">
                  <SheetHeader className="mb-8 text-left">
                    <SheetTitle>
                      <Link to="/" onClick={() => setIsOpen(false)}>
                        <img
                          src="/logo.png"
                          alt="TransMedex"
                          width="200"
                          height="50"
                          className="h-9 w-auto"
                          decoding="async"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                        isActive('/') && location.pathname === '/' ? 'bg-[#0da1df]/5 text-[#0da1df]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-1 rounded-md transition-colors ${isActive('/') && location.pathname === '/' ? 'bg-[#0da1df]/10 text-[#0da1df]' : 'bg-slate-100 text-slate-400'}`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      Home
                    </Link>

                    <MobileNavGroup label="Services" items={services} />
                    <MobileNavGroup label="Specialties" items={specialties} />
                    <MobileNavGroup label="EHR" items={emrs} />
                    <MobileNavGroup label="States We Serve" items={states} />
                    <MobileNavGroup label="Our Clients" items={whoWeServe} />
                    <MobileNavGroup label="Resources" items={resources} />

                    <Link
                      to="/pricing"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                        isActive('/pricing') ? 'bg-[#0da1df]/5 text-[#0da1df]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-1 rounded-md transition-colors ${isActive('/pricing') ? 'bg-[#0da1df]/10 text-[#0da1df]' : 'bg-slate-100 text-slate-400'}`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      Pricing
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                        isActive('/contact') ? 'bg-[#0da1df]/5 text-[#0da1df]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-1 rounded-md transition-colors ${isActive('/contact') ? 'bg-[#0da1df]/10 text-[#0da1df]' : 'bg-slate-100 text-slate-400'}`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      Contact
                    </Link>

                    <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
                      <a href="tel:+16097930400" className="flex items-center justify-center gap-2 text-slate-600 font-semibold text-[15px] bg-slate-50 py-3 rounded-xl hover:bg-slate-100 transition-colors">
                        <Phone className="w-4 h-4 text-[#0da1df]" />
                        +1 (609) 793-0400
                      </a>
                      <Button asChild className="premium-button-primary w-full h-12 text-base shadow-[0_0_15px_rgba(13,161,223,0.5)] animate-[pulse_2s_ease-in-out_infinite] hover:shadow-[0_0_25px_rgba(13,161,223,0.8)]">
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </header>
      {/* Spacer to prevent layout jump due to fixed header */}
      <div className="h-[80px]" />
    </>
  );
}

export default Header;

