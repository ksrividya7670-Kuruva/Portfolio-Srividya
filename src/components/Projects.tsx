import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, Project } from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  X
} from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Featured' | 'Other'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    oams: true, // Expand flagship by default
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
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
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] inline-block underline decoration-teal-600 dark:decoration-amber-400 decoration-[3px] underline-offset-8">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Verified software engineering systems, full-stack web applications, and ongoing AI/data initiatives.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit">
            {(['All', 'Featured', 'Other'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-[#0B192C] text-[#0B192C] dark:text-[#F8F9FA] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter === 'Featured' ? 'Primary Systems' : 'Other Projects'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isExpanded = !!expandedCards[project.id];
              const isFlagship = project.id === 'oams';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white dark:bg-[#132238] border rounded-2xl flex flex-col justify-between overflow-hidden shadow-sm transition-all ${
                    isFlagship 
                      ? 'lg:col-span-2 border-teal-500/50 dark:border-amber-400/50 shadow-md ring-1 ring-teal-500/20' 
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Top Status & Category Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {isFlagship && (
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-teal-600 text-white dark:bg-amber-400 dark:text-[#0B192C] uppercase tracking-wider">
                            Primary Flagship
                          </span>
                        )}
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-[#0E1A2B] text-gray-700 dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div>
                        {project.status === 'Completed' ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                            <CheckCircle2 size={13} /> {isFlagship ? 'Active Repository' : 'Completed'}
                          </span>
                        ) : project.status === 'In Development' ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60">
                            <Clock size={13} /> In Development
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60">
                            <Clock size={13} /> Planned / In Development
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Title & Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] leading-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-teal-700 dark:text-amber-300">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem Statement Box */}
                    <div className="bg-slate-50 dark:bg-[#0E1A2B] border-l-4 border-teal-600 dark:border-amber-400 p-4 rounded-r-xl">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                        Problem Statement:
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features (Expandable on secondary cards, visible on flagship) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Key Features:
                        </span>
                        {!isFlagship && project.keyFeatures.length > 2 && (
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="text-xs text-teal-600 dark:text-amber-400 flex items-center gap-1 hover:underline cursor-pointer"
                          >
                            {isExpanded ? (
                              <>Show Less <ChevronUp size={13} /></>
                            ) : (
                              <>View All ({project.keyFeatures.length}) <ChevronDown size={13} /></>
                            )}
                          </button>
                        )}
                      </div>

                      <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {(isExpanded || isFlagship
                          ? project.keyFeatures 
                          : project.keyFeatures.slice(0, 2)
                        ).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400 mt-2 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Badges */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-gray-100 dark:bg-[#0E1A2B] text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-800 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* My Contribution */}
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                        Candidate Contribution:
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="px-6 py-4 sm:px-8 sm:py-5 bg-gray-50/70 dark:bg-[#0E1A2B]/60 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-[#0B192C] text-white dark:bg-white dark:text-[#0B192C] hover:opacity-90 transition-opacity"
                        >
                          <Github size={15} /> GitHub Repository
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 italic">
                          <Github size={14} /> Repository Private / Academic
                        </span>
                      )}

                      {project.docsAvailable && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                          <BookOpen size={14} /> Architecture Docs
                        </button>
                      )}
                    </div>

                    {/* Live Demo Status Pill (Zero fake URLs) */}
                    <div>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-amber-400 hover:underline"
                        >
                          Live Demo <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-gray-600 dark:text-gray-400">
                          {project.status === 'Completed' ? 'Deployment: Local / Docker Compose' : 'Deployment: Pending Completion'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Project Architecture & Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-amber-400 font-semibold">
                  Technical Architecture &amp; System Specs
                </span>
                <h3 className="text-2xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mt-1">
                  {selectedProject.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  System Architecture Highlights:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-amber-400 mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Candidate Engineering Contribution:
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-[#0E1A2B] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  {selectedProject.myContribution}
                </p>
              </div>

              {selectedProject.githubUrl && (
                <div className="pt-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-teal-600 text-white dark:bg-amber-400 dark:text-[#0B192C] hover:opacity-90"
                  >
                    <Github size={16} /> Open GitHub Repository
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
