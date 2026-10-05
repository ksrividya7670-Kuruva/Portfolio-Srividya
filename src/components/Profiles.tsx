import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export function Profiles() {
  const profiles = [
    {
      name: 'GitHub',
      description: 'View my source code, projects and development work.',
      icon: <Github size={32} />,
      url: 'https://github.com/ksrividya7670-Kuruva',
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgHover: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      description: 'Connect with me professionally and follow my development journey.',
      icon: <Linkedin size={32} />,
      url: '#',
      color: 'hover:text-[#0a66c2] dark:hover:text-[#0a66c2]',
      bgHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'LeetCode',
      description: 'Explore my SQL and problem-solving practice.',
      icon: <Code2 size={32} />,
      url: '#',
      color: 'hover:text-[#ffa116] dark:hover:text-[#ffa116]',
      bgHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-space text-navy dark:text-ivory mb-12 text-center">Explore My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
              className={`block bg-white dark:bg-navy border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center shadow-sm transition-all duration-300 ${profile.bgHover} group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300 ${profile.color}`}>
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold font-space text-navy dark:text-ivory mb-3">
                {profile.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {profile.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
