import { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData, type Experience as ExperienceItem } from '../data/experience';
import { Briefcase, Building, Calendar, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { OfferLetterModal, type OfferLetterDoc } from './OfferLetterModal';

export function Experience() {
  const [activeDoc, setActiveDoc] = useState<OfferLetterDoc | null>(null);

  const handleOpenDoc = (exp: ExperienceItem) => {
    if (exp.offerLetterUrl) {
      setActiveDoc({
        title: exp.offerLetterTitle || `${exp.organization} — Internship Offer Letter`,
        documentUrl: exp.offerLetterUrl,
        documentName: exp.offerLetterFilename || `${exp.organization}_OfferLetter.pdf`,
        documentRef: exp.offerLetterRef || 'VERIFIED-DOC',
        candidateName: 'Kuruva Srividya',
        organization: `${exp.organization} • ${exp.workMode}`,
        duration: exp.duration
      });
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
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
            PRACTICAL WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
            Internship &amp; Experience
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Professional internships and academic engineering experience focused on full-stack web application development and practical software delivery.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-8 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800">
          {experienceData.map((exp, index) => {
            const isThiranex = exp.id === 'thiranex';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Icon Node */}
                <div
                  className={`absolute left-2.5 md:left-5.5 -translate-x-1/2 top-5 w-8 h-8 rounded-full bg-white dark:bg-[#0B192C] border-2 flex items-center justify-center shadow-sm ${
                    isThiranex
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : 'border-teal-600 dark:border-amber-400 text-teal-600 dark:text-amber-400'
                  }`}
                >
                  <Briefcase size={14} />
                </div>

                {/* Card Container */}
                <div
                  className={`bg-white dark:bg-[#132238] border rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-200 ${
                    isThiranex
                      ? 'border-emerald-500/40 dark:border-emerald-500/30 ring-1 ring-emerald-500/10 hover:border-emerald-500/70 dark:hover:border-emerald-400/60'
                      : 'border-gray-200 dark:border-gray-800 hover:border-teal-500/40 dark:hover:border-amber-400/40'
                  }`}
                >
                  {/* Top Bar: Company, Role, Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-teal-700 dark:text-amber-300">
                          {exp.organization}
                        </span>
                        {isThiranex && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Ongoing
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mt-1">
                        {exp.role}
                      </h3>

                      {/* Meta: Duration & Work Mode */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300">
                          <Building size={13} className="text-teal-600 dark:text-amber-400" />
                          {exp.organization}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar size={13} className="text-teal-600 dark:text-amber-400" />
                          {exp.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Globe size={13} className="text-teal-600 dark:text-amber-400" />
                          {exp.workMode}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="self-start sm:self-auto">
                      {isThiranex ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30 shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {exp.statusBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200/80 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/30">
                          <CheckCircle2 size={13} /> {exp.statusBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  {/* Highlights (if any) */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Offer Letter Action Button */}
                  {exp.hasOfferLetter && (
                    <div className={`mt-5 pt-4 flex flex-wrap items-center justify-between gap-3 border-t ${
                      isThiranex
                        ? 'border-emerald-100 dark:border-emerald-950/60'
                        : 'border-gray-100 dark:border-gray-800/80'
                    }`}>
                      <button
                        onClick={() => handleOpenDoc(exp)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 text-white"
                        title={`View official ${exp.organization} offer letter in document viewer`}
                      >
                        <FileText size={15} />
                        <span>View Offer Letter</span>
                      </button>

                      {exp.offerLetterRef && (
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                          Ref: {exp.offerLetterRef}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-[#0E1A2B] text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Dynamic Offer Letter Fullscreen Modal Viewer */}
      <OfferLetterModal
        isOpen={activeDoc !== null}
        onClose={() => setActiveDoc(null)}
        document={activeDoc}
      />
    </section>
  );
}
