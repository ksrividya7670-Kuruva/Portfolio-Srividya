import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';
import { BookOpen, Award } from 'lucide-react';

export function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
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
            TECHNICAL DEVELOPMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
            Courses &amp; Continuous Learning
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Structured course certifications from Tutedude and ongoing self-paced skill development across core engineering domains.
          </p>
        </div>

        {/* Courses & Learning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-teal-500/40 dark:hover:border-amber-400/40 transition-colors"
            >
              <div>
                {/* Header Icon & Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center text-teal-600 dark:text-amber-400">
                    {course.status === 'Completed' ? <Award size={20} /> : <BookOpen size={20} />}
                  </div>

                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    course.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60'
                      : course.status === 'In Progress'
                      ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60'
                      : 'bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60'
                  }`}>
                    {course.status}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mb-1">
                  {course.title}
                </h3>

                {/* Platform */}
                <p className="text-xs sm:text-sm font-medium text-teal-700 dark:text-amber-300 mb-4">
                  {course.platform}
                </p>

                {/* Topics Covered */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-2">
                    Key Topics:
                  </span>
                  {course.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="pt-4 mt-6 border-t border-gray-100 dark:border-gray-800 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>{course.category}</span>
                <span className="text-teal-600 dark:text-amber-400 font-sans font-medium">Verified Curriculum</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
