import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-700 dark:text-amber-300 bg-teal-50 dark:bg-amber-400/10 rounded-full mb-3">
            PLACEMENT CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
            Curriculum Vitae / Resume
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            A comprehensive, ATS-optimized technical resume structured specifically for software engineering campus placements and recruiter reviews.
          </p>
        </div>

        {/* Resume Feature Banner Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#132238] dark:to-[#0B192C] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/80 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/30">
              <ShieldCheck size={14} /> ATS COMPATIBLE &amp; VERIFIED CONTENT
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] leading-tight">
              Ready for Campus Placements &amp; Software Engineering Drives
            </h3>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              The resume highlights verified software development experience, full-stack monorepo system design (OAMS), technical proficiencies across React, Node.js, Python, and PostgreSQL, internship work at Unified Mentor, and ongoing B.Tech AI &amp; Data Science coursework at St. Marys Group of Institutions.
            </p>

            {/* Checklist of inclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Full-Stack &amp; Backend Engineering focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Primary Project: OAMS System Specs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Unified Mentor Internship credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>No fabricated statistics or inflated claims</span>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 bg-[#0B192C] text-white dark:bg-amber-400 dark:text-[#0B192C] px-6 py-3.5 rounded-xl font-semibold text-sm shadow-sm hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Eye size={17} /> View Interactive Resume
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#132238] text-gray-800 dark:text-[#F8F9FA] px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-teal-500 dark:hover:border-amber-400 hover:text-teal-600 dark:hover:text-amber-400 transition-all cursor-pointer"
              >
                <Download size={17} /> Download Resume (PDF)
              </button>
            </div>
          </div>

          {/* Right Preview Silhouette */}
          <div className="lg:col-span-4 flex justify-center">
            <div 
              onClick={onOpenResume}
              className="w-full max-w-xs bg-white dark:bg-[#0E1A2B] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-center space-y-3 cursor-pointer hover:border-teal-500 dark:hover:border-amber-400 transition-all group shadow-sm"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h4 className="font-bold text-sm font-space text-gray-900 dark:text-gray-100">
                Srividya_Kuruva_Resume.pdf
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Single-page ATS standard format with verified university and project details.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-amber-400 group-hover:underline pt-2">
                Click to inspect &amp; print <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
