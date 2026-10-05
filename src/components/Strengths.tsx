import { motion } from 'framer-motion';
import { Lightbulb, Layers, BrainCircuit, Users } from 'lucide-react';

export function Strengths() {
  const strengths = [
    {
      title: 'Problem Solving',
      description: 'I approach complex problems by breaking them into smaller, manageable parts.',
      icon: <Lightbulb size={28} />
    },
    {
      title: 'Full-Stack Development',
      description: 'I enjoy working across frontend, backend, APIs and databases to understand how complete applications work.',
      icon: <Layers size={28} />
    },
    {
      title: 'Continuous Learning',
      description: 'I continuously strengthen my programming and software-development skills through projects and structured learning.',
      icon: <BrainCircuit size={28} />
    },
    {
      title: 'Team Collaboration',
      description: 'I am comfortable learning, documenting, using Git/GitHub and contributing to collaborative projects.',
      icon: <Users size={28} />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50/50 dark:bg-[#081220]/50 rounded-3xl my-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-space text-navy dark:text-ivory mb-12 text-center">What I Bring</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-navy border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex gap-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-teal/10 dark:bg-gold/10 flex items-center justify-center text-teal dark:text-gold">
                  {strength.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold font-space text-navy dark:text-ivory mb-2">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
