import { Printer, X, Mail, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-[#0F172A] text-[#0B192C] dark:text-[#F8F9FA] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800 relative my-auto">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between no-print z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-space font-bold text-sm sm:text-base text-gray-800 dark:text-gray-100">
              Verified Candidate Resume — Srividya Kuruva
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-600 dark:bg-amber-400 text-white dark:text-[#0B192C] text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              title="Print or Save as PDF using your browser"
            >
              <Printer size={14} /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ATS-Formatted Resume Content (Clean, elegant, recruiter-ready) */}
        <div className="p-6 sm:p-10 space-y-7 bg-white text-gray-900 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b-2 border-gray-800 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-space text-gray-950 uppercase tracking-tight">
                Srividya Kuruva
              </h1>
              <p className="text-sm font-semibold text-teal-700 mt-1">
                Software Engineer • Full-Stack Developer • AI &amp; Data Science Student
              </p>
            </div>

            <div className="mt-3 sm:mt-0 text-xs text-gray-600 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin size={13} className="text-teal-700" /> Jogulamba Gadwal District, Telangana, India
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail size={13} className="text-teal-700" /> ksrividya7670@gmail.com
              </p>
              <p className="flex items-center sm:justify-end gap-3 pt-1">
                <a href="https://github.com/ksrividya7670-Kuruva" target="_blank" rel="noreferrer" className="text-teal-700 underline font-medium">
                  github.com/ksrividya7670-Kuruva
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/" target="_blank" rel="noreferrer" className="text-teal-700 underline font-medium">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Motivated B.Tech undergraduate in Artificial Intelligence and Data Science (Currently in 3rd Year / 3-2 Semester, St. Marys Group of Institutions) with hands-on experience designing full-stack web architectures, REST APIs, and relational databases. Demonstrated capability delivering modular software projects including the Official Appointment Management System (OAMS). Strong problem solver proficient in breaking down complex logic into manageable, scalable code for software engineering placements.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <p className="font-bold text-gray-900">B.Tech – Artificial Intelligence and Data Science</p>
                  <p className="text-gray-600">St. Marys Group of Institutions • Telangana, India</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-teal-800">2025 – 2028 (Expected)</p>
                  <p className="text-xs text-gray-500">Currently in 3rd Year (3-2 Semester)</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs text-gray-600 border-t border-gray-100 pt-2">
                <div>
                  <p className="font-semibold text-gray-800">Intermediate Education (Class XII)</p>
                  <p className="text-gray-500 italic">[Institution / Junior College Placeholder] • MPC Stream</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">[Year Placeholder]</p>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs text-gray-600 border-t border-gray-100 pt-2">
                <div>
                  <p className="font-semibold text-gray-800">Secondary School Certificate (SSC / Class X)</p>
                  <p className="text-gray-500 italic">[School Name Placeholder]</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">[Year Placeholder]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm space-y-1.5 text-gray-700">
              <p><span className="font-bold text-gray-900">Frontend:</span> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite</p>
              <p><span className="font-bold text-gray-900">Backend:</span> Node.js, Express.js, Python, Django, Django REST Framework, RESTful APIs, JWT Authentication</p>
              <p><span className="font-bold text-gray-900">Databases:</span> PostgreSQL, MongoDB, SQL, Knex.js</p>
              <p><span className="font-bold text-gray-900">Programming Languages:</span> Python, Java, JavaScript, SQL</p>
              <p><span className="font-bold text-gray-900">AI &amp; Data Science:</span> Artificial Intelligence, Data Science, Machine Learning fundamentals, NLP concepts</p>
              <p><span className="font-bold text-gray-900">Developer Tools:</span> Git, GitHub, Docker Compose, Postman, Linux basics</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2.5">
              Software Engineering Projects
            </h2>
            <div className="space-y-4">
              {/* OAMS */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    Official Appointment Management System (OAMS)
                  </h3>
                  <a href="https://github.com/ksrividya7670-Kuruva/OAMS" target="_blank" rel="noreferrer" className="text-xs text-teal-700 font-medium underline">
                    github.com/ksrividya7670-Kuruva/OAMS
                  </a>
                </div>
                <p className="text-xs text-gray-600 font-mono mt-0.5">
                  TypeScript, Node.js, Express.js, React 19, PostgreSQL, Knex.js, Redis, Docker
                </p>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1.5 space-y-1 leading-relaxed">
                  <li>Built a production-grade monorepo appointment scheduling system with role-based access control (RBAC).</li>
                  <li>Implemented conflict-free scheduling engine with calendar availability, room allocation, and automated status transitions.</li>
                  <li>Configured transactional outbox background workers for task reminders, overdue tracking, and no-show detection.</li>
                </ul>
              </div>

              {/* LearnHub */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    Interactive Coding Learning Platform (LearnHub)
                  </h3>
                  <span className="text-xs font-semibold text-amber-700">[In Development]</span>
                </div>
                <p className="text-xs text-gray-600 font-mono mt-0.5">
                  React.js, Tailwind CSS, Python, Django, Django REST Framework, JWT, PostgreSQL
                </p>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1.5 space-y-1 leading-relaxed">
                  <li>Developing modern developer educational portal with modular curriculum, quizzes, and student progress tracking.</li>
                  <li>Architecting REST APIs for user progress serialization and interactive company-specific interview preparation modules.</li>
                </ul>
              </div>

              {/* AI Resume Analyzer */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    AI-Powered Resume Analyzer
                  </h3>
                  <span className="text-xs font-semibold text-sky-700">[Planned / In Development]</span>
                </div>
                <p className="text-xs text-gray-600 font-mono mt-0.5">
                  React.js, Python, Django, NLP / LLM Analysis, PostgreSQL
                </p>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1.5 space-y-1 leading-relaxed">
                  <li>Designing an ATS compatibility analysis tool to evaluate student resumes against software engineering job descriptions.</li>
                  <li>Extracting technical skill tokens and calculating semantic relevance scores with tailored improvement recommendations.</li>
                </ul>
              </div>

              {/* MERN Workout App */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    MERN Workout Application
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700">[Completed]</span>
                </div>
                <p className="text-xs text-gray-600 font-mono mt-0.5">
                  React.js, Node.js, Express.js, MongoDB, REST APIs
                </p>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1.5 space-y-1 leading-relaxed">
                  <li>Full-stack CRUD application for managing workout records, set configurations, and database persistence.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Experience &amp; Internships
            </h2>
            <div className="space-y-3">
              {/* Thiranex (Current Internship) */}
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">Intern – Full Stack Development</p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Current Internship
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">Thiranex • Remote / Project-Based</p>
                  <p className="text-xs text-gray-700 mt-1">
                    • Currently gaining practical experience in Full Stack Development through a remote, project-based internship at Thiranex.
                  </p>
                </div>
                <div className="text-right whitespace-nowrap pl-2">
                  <p className="text-xs font-semibold text-teal-800">05 Oct 2026 – 04 Nov 2026</p>
                  <p className="text-[11px] text-gray-500 font-medium">Ongoing</p>
                </div>
              </div>

              {/* Unified Mentor (Previous Internship) */}
              <div className="flex justify-between items-start text-xs sm:text-sm border-t border-gray-100 pt-2.5">
                <div>
                  <p className="font-bold text-gray-900">Fullstack Web Development Intern</p>
                  <p className="text-gray-600 font-medium">Unified Mentor Pvt. Ltd. • Remote</p>
                  <p className="text-xs text-gray-700 mt-1">
                    • Developed full-stack web applications following component modularity and REST API principles.
                    <br />• Built assigned frontend and backend modules while maintaining Git version control best practices.
                  </p>
                </div>
                <div className="text-right whitespace-nowrap pl-2">
                  <p className="text-xs font-semibold text-teal-800">01 Aug 2026 – 01 Nov 2026</p>
                  <p className="text-[11px] text-gray-500">Completed (3 Months)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Courses &amp; Placement Preparation
            </h2>
            <div className="text-xs text-gray-700 space-y-1">
              <p>• <span className="font-semibold text-gray-900">Tutedude:</span> Web Development Course (Completed)</p>
              <p>• <span className="font-semibold text-gray-900">Tutedude:</span> Advanced Python Course (Completed / In Progress)</p>
              <p>• <span className="font-semibold text-gray-900">Placement Preparation:</span> Active practice in Data Structures &amp; Algorithms (DSA), Relational Database Management Systems (SQL / DBMS), Object-Oriented Programming (Java / Python), and Computer Science fundamentals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
