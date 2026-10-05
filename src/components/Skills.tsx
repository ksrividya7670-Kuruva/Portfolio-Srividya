import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Cpu, 
  Wrench, 
  Search
} from 'lucide-react';

export function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons: Record<string, ReactNode> = {
    'Frontend Development': <Layout size={20} className="text-teal-600 dark:text-amber-400" />,
    'Backend Engineering': <Server size={20} className="text-teal-600 dark:text-amber-400" />,
    'Database Management': <Database size={20} className="text-teal-600 dark:text-amber-400" />,
    'Programming Languages': <Code2 size={20} className="text-teal-600 dark:text-amber-400" />,
    'AI & Data Science': <Cpu size={20} className="text-teal-600 dark:text-amber-400" />,
    'Tools & Technologies': <Wrench size={20} className="text-teal-600 dark:text-amber-400" />,
  };

  const categories = ['All', ...skillsData.map((c) => c.title)];

  const filteredCategories = skillsData
    .filter((cat) => activeCategory === 'All' || cat.title === activeCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-700 dark:text-amber-300 bg-teal-50 dark:bg-amber-400/10 rounded-full mb-3">
              TECHNICAL PROFICIENCY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
              Technical Skills
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Categorized technologies and tools applied across full-stack applications, academic projects, and algorithm practice.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#132238] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-amber-400 transition-all"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B192C] text-[#F8F9FA] dark:bg-amber-400 dark:text-[#0B192C] shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-teal-500/40 dark:hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center">
                    {categoryIcons[cat.title] || <Code2 size={20} className="text-teal-600 dark:text-amber-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges (No fake percentages) */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 dark:bg-[#0E1A2B] text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700/80 hover:border-teal-500/60 dark:hover:border-amber-400/60 hover:text-teal-700 dark:hover:text-amber-300 transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Skill Representation */}
        <div className="pt-2 text-center text-xs text-gray-500 dark:text-gray-400">
          Skills are organized by functional proficiency in applied projects and academic coursework, adhering to honest badge representations without arbitrary percentage bars.
        </div>
      </motion.div>
    </section>
  );
}
