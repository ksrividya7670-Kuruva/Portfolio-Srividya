import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Info, CheckCircle2 } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
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
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] inline-block underline decoration-teal-600 dark:decoration-amber-400 decoration-[3px] underline-offset-8">
            Education
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Formal technical education and foundational academic background.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                !item.isPlaceholder 
                  ? 'bg-white dark:bg-[#132238] border-teal-500/40 dark:border-amber-400/40 shadow-md ring-1 ring-teal-500/10' 
                  : 'bg-gray-50/70 dark:bg-[#0E1A2B]/60 border-dashed border-gray-300 dark:border-gray-800'
              }`}
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    !item.isPlaceholder 
                      ? 'bg-teal-50 dark:bg-amber-400/10 text-teal-600 dark:text-amber-400' 
                      : 'bg-gray-200/60 dark:bg-gray-800 text-gray-500'
                  }`}>
                    <GraduationCap size={22} />
                  </div>

                  {!item.isPlaceholder ? (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60">
                      CURRENT DEGREE
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-800/80 px-2 py-0.5 rounded">
                      [Placeholder]
                    </span>
                  )}
                </div>

                {/* Degree Title */}
                <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mb-2 leading-snug">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className={`text-sm font-medium mb-3 ${
                  !item.isPlaceholder 
                    ? 'text-teal-700 dark:text-amber-300' 
                    : 'text-gray-500 dark:text-gray-400 italic'
                }`}>
                  {item.institution}
                </p>

                {/* Timeline and Details */}
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                    <span>{item.timeline}</span>
                  </div>

                  {item.currentStatus && (
                    <div className="flex items-center gap-1.5 font-semibold text-teal-700 dark:text-teal-300">
                      <CheckCircle2 size={14} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span>{item.currentStatus}</span>
                    </div>
                  )}

                  {item.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Notes or Verification statement */}
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.notes}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest Disclaimer Box */}
        <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-800 dark:text-blue-300">
          <Info size={16} className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
          <p>
            <span className="font-semibold">Placement Verification Notice:</span> All institutional details reflect verified university enrollment records. Pre-university placeholders are clearly demarcated to maintain strict documentation integrity without fabricating unverified marks or percentages.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
