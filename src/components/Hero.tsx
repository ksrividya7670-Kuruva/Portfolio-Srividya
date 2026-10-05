import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  FileText, 
  ArrowRight, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Code2 
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Target Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-teal-50 border border-teal-200/80 text-teal-800 dark:bg-teal-950/40 dark:border-teal-800/60 dark:text-teal-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PLACEMENT CANDIDATE • 2028 BATCH</span>
          </div>

          {/* Main Hero Title & Profile Portrait */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-teal-500/50 dark:border-amber-400/50 shadow-xl flex-shrink-0 bg-gray-100 dark:bg-gray-800 ring-4 ring-teal-500/20 dark:ring-amber-400/20">
              <img 
                src="/images/profile_picture.jpg" 
                alt="Srividya Kuruva" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B192C] dark:text-[#F8F9FA] leading-[1.15]">
                Hi, I’m <span className="text-teal-600 dark:text-amber-400">Srividya Kuruva</span>
              </h1>
              <p className="mt-1 text-sm sm:text-base font-mono text-gray-500 dark:text-gray-400">
                B.Tech Artificial Intelligence &amp; Data Science • St. Marys Group of Institutions
              </p>
            </div>
          </div>

          {/* Professional Positioning Line */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Artificial Intelligence &amp; Data Science Student | Full-Stack Developer | Software Engineer
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            I build practical, scalable web applications and explore AI-driven solutions to solve real-world problems. Currently sharpening technical problem-solving, backend architecture, and core CS fundamentals for software engineering placements.
          </p>

          {/* Location & Status Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-teal-600 dark:text-amber-400" />
              Jogulamba Gadwal District, Telangana, India
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Available for Software Engineering Roles &amp; Internships
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-[#0B192C] text-[#F8F9FA] dark:bg-teal-500 dark:text-[#0B192C] px-6 py-3 rounded-lg font-semibold text-sm shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View Projects <ArrowRight size={16} />
            </a>
            
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#132238] text-gray-800 dark:text-[#F8F9FA] px-5 py-3 rounded-lg font-semibold text-sm hover:border-teal-500 dark:hover:border-amber-400 hover:text-teal-600 dark:hover:text-amber-400 transition-all cursor-pointer"
            >
              <FileText size={16} /> Download Resume
            </button>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          {/* Direct Social & Code Handles */}
          <div className="flex items-center gap-5 pt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">Profiles:</span>
            
            <a 
              href="https://github.com/ksrividya7670-Kuruva" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={17} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:ksrividya7670@gmail.com" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
              aria-label="Direct Email"
            >
              <Mail size={17} />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Element — Interactive Software & AI Telemetry Terminal */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl bg-[#0F172A] border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-gray-300">
            {/* Terminal Header Bar */}
            <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs text-gray-400 font-mono">engineer_profile.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-teal-400">
                <Code2 size={14} />
                <span>v3.2</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 space-y-3 leading-relaxed overflow-x-auto">
              <p className="text-gray-500">// Candidate Profile: Srividya Kuruva</p>
              
              <div className="space-y-1">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">candidate</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">name</span>: <span className="text-amber-300">'Srividya Kuruva'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">program</span>: <span className="text-amber-300">'B.Tech (AI &amp; Data Science)'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">year</span>: <span className="text-emerald-400">'3rd Year / 3-2 Sem (Grad: 2028)'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">institution</span>: <span className="text-amber-300">'St. Marys Group of Institutions'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">primaryRoles</span>: [
                  <span className="text-amber-300">'Software Engineer'</span>,{' '}
                  <span className="text-amber-300">'Full-Stack Dev'</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">flagshipProject</span>: <span className="text-cyan-300">'OAMS (Appointment Management System)'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">coreTech</span>: [
                  <span className="text-emerald-300">'React'</span>,{' '}
                  <span className="text-emerald-300">'Node.js'</span>,{' '}
                  <span className="text-emerald-300">'Python'</span>,{' '}
                  <span className="text-emerald-300">'PostgreSQL'</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-teal-300">status</span>: <span className="text-emerald-400">'Preparing for Placements'</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Status Metric Pills */}
              <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#1E293B]/70 p-2.5 rounded border border-gray-800">
                  <span className="text-gray-400 block">System Architecture</span>
                  <span className="text-emerald-400 font-semibold">Modular &amp; Monorepo</span>
                </div>
                <div className="bg-[#1E293B]/70 p-2.5 rounded border border-gray-800">
                  <span className="text-gray-400 block">Problem Decomposition</span>
                  <span className="text-teal-300 font-semibold">Step-by-Step Logic</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div className="bg-[#162032] px-4 py-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Active Placement Preparation
              </span>
              <span className="text-gray-500">Telangana, IN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
