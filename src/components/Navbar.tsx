import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, FileText } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#0B192C]/85 backdrop-blur-md shadow-xs border-b border-gray-200/70 dark:border-gray-800/80 py-3'
          : 'bg-white/60 dark:bg-[#0B192C]/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Classic Brand Mark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-space font-semibold text-base sm:text-lg tracking-tight text-[#0B192C] dark:text-[#F8F9FA] group"
          >
            <span className="w-8 h-8 rounded-full bg-teal-700 dark:bg-amber-400 text-white dark:text-[#0B192C] flex items-center justify-center text-xs font-mono font-bold shadow-xs transition-transform group-hover:scale-105">
              SK
            </span>
            <span className="group-hover:text-teal-700 dark:group-hover:text-amber-400 transition-colors">
              Srividya Kuruva
            </span>
          </a>

          {/* Desktop Clean Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-700 dark:hover:text-amber-400 px-3 py-1.5 rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume, Socials, Theme */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-teal-700/30 text-teal-800 dark:text-amber-300 dark:border-amber-400/40 hover:bg-teal-50 dark:hover:bg-amber-400/10 transition-all cursor-pointer shadow-2xs"
              aria-label="View Resume"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>

            <a
              href="https://github.com/ksrividya7670-Kuruva"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-[#0A66C2] dark:text-gray-400 dark:hover:text-[#0A66C2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={17} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? (
                <Sun size={17} className="text-amber-400" />
              ) : (
                <Moon size={17} className="text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 shadow-lg px-6 pt-3 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-teal-700 dark:hover:text-amber-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-teal-700 dark:bg-amber-400 text-white dark:text-[#0B192C] shadow-xs cursor-pointer"
            >
              <FileText size={14} /> Resume
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ksrividya7670-Kuruva"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/srividya-kuruva-17a25638b/"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-[#0A66C2]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
