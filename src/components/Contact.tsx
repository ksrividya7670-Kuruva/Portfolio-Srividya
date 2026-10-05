import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, Building2, User } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please write a message of at least 10 characters.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setStatus('submitting');

    // Simulate API submission / UI-ready dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-700 dark:text-amber-300 bg-teal-50 dark:bg-amber-400/10 rounded-full mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
            Contact &amp; Placement Inquiries
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            I am actively seeking Software Engineer, Full-Stack Developer, and relevant engineering internship opportunities. Let’s connect!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
                Professional Information
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 flex-shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Candidate Name</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Srividya Kuruva
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Email Address</span>
                    <a
                      href="mailto:ksrividya7670@gmail.com"
                      className="text-sm font-semibold text-teal-600 dark:text-amber-400 hover:underline"
                    >
                      ksrividya7670@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Location</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Jogulamba Gadwal District, Telangana, India
                    </span>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 flex-shrink-0">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">University / College</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      St. Marys Group of Institutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profile Buttons */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Connect on Social &amp; Code:
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/ksrividya7670-Kuruva"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200 transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-[#0A66C2] transition-colors"
                  >
                    <Linkedin size={16} className="text-[#0A66C2]" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                Recruiters and hiring managers can submit interview or placement inquiries below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Recruiter"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-gray-50 dark:bg-[#0E1A2B] text-gray-900 dark:text-gray-100 outline-none transition-all ${
                        formErrors.name 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-400' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 dark:focus:ring-amber-400'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-gray-50 dark:bg-[#0E1A2B] text-gray-900 dark:text-gray-100 outline-none transition-all ${
                        formErrors.email 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-400' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 dark:focus:ring-amber-400'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role / Campus Recruitment"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-gray-50 dark:bg-[#0E1A2B] text-gray-900 dark:text-gray-100 outline-none transition-all ${
                      formErrors.subject 
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-400' 
                        : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 dark:focus:ring-amber-400'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-rose-500 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your inquiry or message here..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-gray-50 dark:bg-[#0E1A2B] text-gray-900 dark:text-gray-100 outline-none transition-all resize-none ${
                      formErrors.message 
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-400' 
                        : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 dark:focus:ring-amber-400'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-500 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Success Feedback Banner */}
                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Thank you for your message! Your inquiry has been recorded and is ready for response.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-[#0B192C] text-white dark:bg-amber-400 dark:text-[#0B192C] hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
