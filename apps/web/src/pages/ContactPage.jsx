import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, FileText, Clock, HeartHandshake, 
  FileCheck, CheckCircle, TrendingUp, Calculator,
  Handshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    numberOfPhysicians: '1',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formTimestamp] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (fieldErrors[name]) {
      setFieldErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, numberOfPhysicians: value }));
  };

  // ── Client-side validation ──────────────────────────
  const validate = () => {
    const errs = {};
    const { firstName, lastName, email, phone, practiceName, message } = formData;

    if (!firstName.trim() || firstName.trim().length < 2) errs.firstName = 'First name is required (min 2 chars).';
    if (!lastName.trim() || lastName.trim().length < 2) errs.lastName = 'Last name is required (min 2 chars).';

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email.trim() || !emailRe.test(email.trim())) errs.email = 'A valid email address is required.';

    const phoneRe = /^[\d\s()+\-.,]{7,20}$/;
    if (!phone.trim() || !phoneRe.test(phone.trim())) errs.phone = 'A valid phone number is required.';

    if (!practiceName.trim() || practiceName.trim().length < 2) errs.practiceName = 'Practice name is required (min 2 chars).';
    if (!message.trim() || message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';

    return errs;
  };

  // ── Submit handler ──────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast({ title: 'Validation Error', description: 'Please fix the highlighted fields.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        _form_ts: formTimestamp,       // anti-bot timestamp
        _hp_website: '',               // honeypot — must stay empty
      };

      const res = await fetch('/hcgi/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data.errors ? data.errors.join(' ') : (data.error || 'Something went wrong.');
        toast({ title: 'Submission Failed', description: errMsg, variant: 'destructive' });
        return;
      }

      setIsSuccess(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceName: '',
        numberOfPhysicians: '1',
        message: ''
      });
      setFieldErrors({});

    } catch (err) {
      toast({
        title: 'Network Error',
        description: 'Could not reach our servers. Please try again or call us at +1 (609) 793-0400.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { icon: <FileText className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '$500M+', label: 'Value of claims processed' },
    { icon: <Handshake className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '24', label: 'Accounts Receivable Days' },
    { icon: <Clock className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '48Hours', label: 'Turn Around Time (TAT)' },
    { icon: <HeartHandshake className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '99%', label: 'Customer Retention' },
    { icon: <FileCheck className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '2.7M', label: 'Number of Claims Processed' },
    { icon: <CheckCircle className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '98%', label: 'First Pass Clean Claims Rate' },
    { icon: <TrendingUp className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '5%-10%', label: 'Revenue Improvement' },
    { icon: <Calculator className="w-10 h-10 mb-3 text-slate-700 font-light stroke-[1.5]" />, value: '30%', label: 'Reduction in A/R' }
  ];

  const bullets = [
    '98% accurate claims submissions through RCM tools',
    'Fast recovery of AR within 24 days.',
    'Quick Payments from insurance within 30 days.',
    'Complimentary Credentialing of all providers with desired payers.',
    '30% increase in revenue through super-fast collections',
    'Consistent cash flow with diligent AR follow-ups.'
  ];

  return (
    <>
      
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
        <Header />

        <main className="flex-grow">
          {/* Top Hero / Form Section */}
          <section className="py-20 bg-[#f4eff3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Form */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 md:p-10"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h2>
                    <p className="text-slate-600">Get connected with our experts.</p>
                  </div>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                      <p className="text-slate-600 max-w-sm mx-auto">
                        Thank you for contacting us. Our team will get back to you within 1 business day.
                      </p>
                      <Button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-6 font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot field — hidden from humans, bots fill it */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="_hp_website">Website</label>
                      <input type="text" id="_hp_website" name="_hp_website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name <span className="text-red-500">*</span></Label>
                      <Input id="firstName" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} className={fieldErrors.firstName ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.firstName && <p className="text-red-500 text-xs mt-1">{fieldErrors.firstName}</p>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name <span className="text-red-500">*</span></Label>
                      <Input id="lastName" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} className={fieldErrors.lastName ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.lastName && <p className="text-red-500 text-xs mt-1">{fieldErrors.lastName}</p>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email <span className="text-red-500">*</span></Label>
                      <Input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={fieldErrors.email ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone <span className="text-red-500">*</span></Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} className={fieldErrors.phone ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="practiceName" className="text-slate-700 font-medium">Practice Name <span className="text-red-500">*</span></Label>
                      <Input id="practiceName" name="practiceName" autoComplete="organization" value={formData.practiceName} onChange={handleChange} className={fieldErrors.practiceName ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.practiceName && <p className="text-red-500 text-xs mt-1">{fieldErrors.practiceName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numberOfPhysicians" className="text-slate-700 font-medium">Number of Physicians <span className="text-red-500">*</span></Label>
                      <Select value={formData.numberOfPhysicians} onValueChange={handleSelectChange} name="numberOfPhysicians" autoComplete="off">
                        <SelectTrigger id="numberOfPhysicians" className="border-slate-300">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2-5">2-5</SelectItem>
                          <SelectItem value="6-10">6-10</SelectItem>
                          <SelectItem value="10+">10+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-slate-700 font-medium">Message <span className="text-red-500">*</span></Label>
                      <Textarea id="message" name="message" autoComplete="off" value={formData.message} onChange={handleChange} rows={4} className={fieldErrors.message ? 'border-red-500' : 'border-slate-300'} />
                      {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
                    </div>
                    
                    <div className="pt-2 flex justify-center">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-sm font-semibold transition-colors"
                      >
                        {isSubmitting ? 'Sending...' : 'Contact Us'}
                      </Button>
                    </div>
                  </form>
                  )}
                </motion.div>

                {/* Right Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="pt-4 lg:pt-12"
                >
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Stop Spending Your Valuable Time Battling Billing Woes
                  </h1>
                  <p className="text-slate-700 mb-10 leading-relaxed">
                    Reclaim your time and boost productivity with our comprehensive billing solutions to make the most out of your time and revenue. Our time-saving automated billing solutions are tailored to meet the unique needs of your practice, enabling you to automate manual processes and reduce billing errors. By choosing us, you can enjoy a multitude of advantages, such as:
                  </p>

                  <ul className="space-y-4 mb-10">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 text-[#8c2a8d]">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                        <span className="text-slate-700 font-medium text-[15px]">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-slate-800 font-semibold text-lg">
                    Talk to our experts at <span className="text-slate-900">+1 (609) 793-0400</span>
                  </p>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Success in Numbers Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-20">Our Success in Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {stat.icon}
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider max-w-[150px] leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Healthcare Products Mockup Section */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Provider-Focused Healthcare Products and Medical Billing Services</h2>
              <p className="text-slate-600 mb-16">TransMedex aims to provide high-quality medical billing solutions to streamline cash flow and reduce revenue losses.</p>
              
              <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                  alt="Dashboard interface" 
                  className="w-full h-auto object-cover max-h-[600px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          {/* Alternating Content Blocks */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
              
              {/* Block 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Achieve Better Clinical Outcomes</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Work smartly with TransMedex and get customized medical billing solutions for hassle-free practice management. Increase operational efficiency, better clinical outcomes, and improve patient health with our healthcare IT products and RCM services. Gain better control over practice procedures and administrative tasks with TransMedex Medical Billing.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-6 font-semibold">
                    <Link to="/specialties">View Specialties</Link>
                  </Button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Doctors reviewing clinical data" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Block 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=1200" 
                    alt="Make Your Revenue Cycle Efficient with Piggy Bank" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Make Your Revenue Cycle Efficient</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Get stress-free billing and avoid physician burnout by efficient revenue cycle management in the modern healthcare industry. Give your patients better experience by involving them in care management. We help you collaborate with patients, payers, and other organizations to thrive in the competitive healthcare marketplace.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-6 font-semibold">
                    <Link to="/specialties">View Specialties</Link>
                  </Button>
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

export default ContactPage;


