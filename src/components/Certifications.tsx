import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import { Award, Clock } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50/50 dark:bg-[#081220]/50 rounded-3xl my-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-space text-navy dark:text-ivory mb-12 text-center">Certifications & Learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-navy border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {cert.status === 'Currently Learning' && (
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gold text-navy text-[10px] font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center shadow-sm">
                    LEARNING
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                {cert.status === 'Completed' ? (
                  <Award size={28} className="text-teal dark:text-gold" />
                ) : (
                  <Clock size={28} className="text-gold" />
                )}
              </div>
              
              <h3 className="text-lg font-bold font-space text-navy dark:text-ivory mb-2">
                {cert.title}
              </h3>
              
              {cert.organization && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.organization}
                </p>
              )}
              
              <div className="mt-4 inline-block">
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                  cert.status === 'Completed' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
