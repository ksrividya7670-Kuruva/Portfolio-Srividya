import { motion } from 'framer-motion';
import { codingPrepTopics } from '../data/codingPrep';
import { Code2, Github, CheckCircle2, Binary } from 'lucide-react';

export function CodingPrep() {
  return (
    <section id="placement-prep" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-700 dark:text-amber-300 bg-teal-50 dark:bg-amber-400/10 rounded-full mb-3">
              CAMPUS RECRUITMENT READINESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
              Coding &amp; Placement Preparation
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Targeted preparation strategy across algorithmic problem solving, core computer science subjects, and production-oriented programming languages.
            </p>
          </div>

          {/* Profile Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ksrividya7670-Kuruva"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#0B192C] text-white dark:bg-white dark:text-[#0B192C] hover:opacity-90 transition-opacity"
            >
              <Github size={16} /> GitHub Profile
            </a>

            <a
              href="https://leetcode.com/u/ksrividya7670-Kuruva/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Code2 size={16} className="text-amber-500" /> LeetCode Profile
            </a>
          </div>
        </div>

        {/* Growth Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingPrepTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-teal-500/40 dark:hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400 mb-4">
                  <Binary size={20} />
                </div>

                <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mb-2">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {topic.focus}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-2">
                    Key Topics Covered:
                  </span>
                  {topic.keyAreas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 size={13} /> Active Practice
                </span>
                <span className="text-gray-400 font-mono text-[11px]">Placement Focus</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Practice Note */}
        <div className="bg-slate-50 dark:bg-[#0E1A2B] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          <p>
            <span className="font-semibold text-[#0B192C] dark:text-[#F8F9FA]">Integrity Commitment:</span> Coding progress is evaluated based on genuine daily practice, conceptual clarity in Data Structures &amp; Algorithms, and real software implementations rather than unverified third-party statistics.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
