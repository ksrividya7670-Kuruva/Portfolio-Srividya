import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0B192C] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Candidate Monogram & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-teal-600 dark:bg-amber-400 text-white dark:text-[#0B192C] flex items-center justify-center text-xs font-mono font-bold">
                SK
              </span>
              <span className="font-space font-bold text-lg text-[#0B192C] dark:text-[#F8F9FA]">
                Srividya Kuruva
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Artificial Intelligence &amp; Data Science Undergraduate • St. Marys Group of Institutions
            </p>
          </div>

          {/* Social Profiles & Email */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ksrividya7670-Kuruva"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:ksrividya7670@gmail.com"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-amber-400 transition-colors"
              aria-label="Email Srividya"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#0B192C] dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Positioning */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Srividya Kuruva. Software Engineering &amp; Placement Portfolio.
          </p>
          <p className="text-gray-400 dark:text-gray-500 font-mono text-[11px]">
            Placement Candidate • Class of 2028
          </p>
        </div>
      </div>
    </footer>
  );
}
