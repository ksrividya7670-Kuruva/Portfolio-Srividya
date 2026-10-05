import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Lightbulb, 
  Workflow, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Compass 
} from 'lucide-react';

export function About() {
  const strengths = [
    {
      title: 'Problem Solving',
      description: 'Analyzing problem statements systematically and crafting reliable, testable software solutions.',
      icon: <Lightbulb className="text-teal-600 dark:text-amber-400" size={20} />
    },
    {
      title: 'Breaking Down Complexity',
      description: 'Decomposing large, ambiguous requirements into smaller, modular, and manageable components.',
      icon: <Workflow className="text-teal-600 dark:text-amber-400" size={20} />
    },
    {
      title: 'Logical Thinking',
      description: 'Applying clean algorithmic thinking, structured control flow, and disciplined reasoning.',
      icon: <BrainCircuit className="text-teal-600 dark:text-amber-400" size={20} />
    },
    {
      title: 'Decision Making',
      description: 'Evaluating trade-offs between technologies, schema structures, and architecture patterns.',
      icon: <Compass className="text-teal-600 dark:text-amber-400" size={20} />
    },
    {
      title: 'Continuous Learning',
      description: 'Consistently picking up modern web tooling, algorithmic patterns, and AI/data methodologies.',
      icon: <BookOpen className="text-teal-600 dark:text-amber-400" size={20} />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800/80">
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
            BACKGROUND &amp; CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A software-focused undergraduate with a passion for building structured web applications and tackling challenging technical problems.
          </p>
        </div>

        {/* Two-Column Grid: Narrative & Candidate Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            <p>
              I am a 3rd-year undergraduate student pursuing my <span className="font-semibold text-[#0B192C] dark:text-[#F8F9FA]">B.Tech in Artificial Intelligence and Data Science</span> at <span className="font-semibold text-[#0B192C] dark:text-[#F8F9FA]">St. Marys Group of Institutions</span> (Currently in 3-2 Semester, Expected Graduation: 2028).
            </p>

            <p>
              My primary technical focus is on <span className="font-semibold text-teal-700 dark:text-amber-300">Software Engineering</span> and <span className="font-semibold text-teal-700 dark:text-amber-300">Full-Stack Development</span>. I have hands-on experience building both academic and real-world-oriented projects, including multi-tier systems like the <span className="font-semibold">Official Appointment Management System (OAMS)</span>.
            </p>

            <p>
              I have a strong interest in backend development, scalable REST APIs, relational databases, and modern web architectures, along with exploring AI and data science paradigms. I enjoy solving complex engineering challenges by breaking them into smaller, manageable parts and implementing clean, maintainable code.
            </p>

            <p>
              Currently, I am actively strengthening my coding practice, Data Structures &amp; Algorithms (DSA), database query optimization, and placement-oriented technical skills to prepare for campus recruitment and software development roles.
            </p>

            {/* Quick Profile Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Full-Stack &amp; Backend Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Data Structures &amp; Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>AI &amp; Data Science Undergraduate</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-teal-600 dark:text-amber-400 flex-shrink-0" />
                <span>Campus Placement Ready (2028 Batch)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-teal-500/40 dark:border-amber-400/40 shadow-md bg-gray-100 dark:bg-gray-800 flex-shrink-0 ring-4 ring-teal-500/15 dark:ring-amber-400/15">
                  <img 
                    src="/images/profile_picture.jpg" 
                    alt="Srividya Kuruva" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-space text-[#0B192C] dark:text-[#F8F9FA]">
                    Srividya Kuruva
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-600 dark:text-amber-400 font-medium">
                    Software Engineer Aspirant
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin size={13} /> Jogulamba Gadwal, Telangana
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 border-t border-gray-100 dark:border-gray-800 pt-5 text-xs sm:text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 dark:text-gray-400">Education</span>
                  <span className="font-medium text-right text-gray-800 dark:text-gray-200">B.Tech (AI &amp; Data Science)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 dark:text-gray-400">Institution</span>
                  <span className="font-medium text-right text-gray-800 dark:text-gray-200">St. Marys Group of Institutions</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 dark:text-gray-400">Current Semester</span>
                  <span className="font-medium text-right text-teal-600 dark:text-amber-400">3rd Year (3-2 Semester)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 dark:text-gray-400">Expected Graduation</span>
                  <span className="font-medium text-right text-gray-800 dark:text-gray-200">2028</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 dark:text-gray-400">Target Roles</span>
                  <span className="font-medium text-right text-gray-800 dark:text-gray-200">SDE / Full-Stack / Backend</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="pt-6">
          <h3 className="text-xl font-bold font-space text-[#0B192C] dark:text-[#F8F9FA] mb-6">
            Core Strengths &amp; Engineering Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white dark:bg-[#132238] border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-teal-500/50 dark:hover:border-amber-400/50 transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-amber-400/10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#0B192C] dark:text-[#F8F9FA] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
